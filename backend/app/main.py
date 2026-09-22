import pickle
import numpy as np  # <-- corrigé : "from numpy import np" n'existe pas
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.models import load_model
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from lime.lime_text import LimeTextExplainer
from sentence_transformers import SentenceTransformer
app = FastAPI()

# Nécessaire pour que Next.js (localhost:3000) puisse appeler cette API.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # à adapter/élargir en prod
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get("/")
def root():
    return {"message": "FastAPI fonctionne"}


@app.get("/explain")
def explain(text: str):
    # Probabilité [P(négatif), P(positif)] pour CE texte précis
    proba = predict_sentiment([text])[0]
    is_positive = proba[1] >= 0.5

    return {
        "sentiment": "Positive" if is_positive else "Negative",
        "probability": float(proba[1]),
        "explanation": explain_prediction(text),
    }


# load the model and tokenizer
model = load_model("model/sentiment_model.keras")
model.compile(
    optimizer="adam",
    loss="binary_crossentropy",
    metrics=["accuracy"]
)
_ = model.predict(np.zeros((1, 384)), verbose=0)

sbert_model = SentenceTransformer('all-MiniLM-L6-v2')

def predict_sentiment(texts):
    # 1. cleaning the texts
    clean_texts = [text if text and text.strip() != "" else " " for text in texts]
    # 2. vectorisation and padding
    embeddings =  sbert_model.encode(clean_texts)
    # 3. Prédiction
    predictions = model.predict(embeddings, verbose=0)

    # 4. Sécurité anti-NaN : nettoyer les éventuelles valeurs NaN
    predictions = np.nan_to_num(predictions, nan=0.5)

    # 5. make sure the predictions are in the correct shape
    return np.hstack((1 - predictions, predictions))


def explain_prediction(text: str):
    explainer = LimeTextExplainer(class_names=["Négatif", "Positif"])
    explanation = explainer.explain_instance(text, predict_sentiment, num_features=10)
    return explanation.as_list()
