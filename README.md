# Text Emotion Analyzer

A machine learning application that determines whether a text is positive or negative and provides an explanation using LIME. The project combines a transfer-learning-based embedding model with a modern web interface for user interaction.

## Overview

This application allows users to input a text and receive:

- a sentiment prediction: positive or negative
- a confidence score
- an explanation of the prediction using LIME

The goal is to make sentiment analysis both practical and interpretable, especially for end users who want to understand why the model made a given decision.

## Dataset

The model was trained on the following dataset:

- Kaggle: Text Classification
- Link: https://www.kaggle.com/datasets/uday756/text-classification

Because the dataset is relatively small, transfer learning was used to exploit pre-trained semantic representations from:

- Sentence Transformers: all-MiniLM-L6-v2
- Hugging Face: https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2

This helps improve performance and generalization even with limited training data.

## Model architecture

The project uses a transfer-learning approach:

1. Text is encoded with a pre-trained sentence embedding model
2. Embeddings are passed to a classifier for sentiment prediction
3. The final prediction is generated as positive or negative
4. LIME explains the contribution of important words in the input text

## Tech stack

### Backend
- Python
- FastAPI
- TensorFlow / Keras
- scikit-learn
- lime
- sentence-transformers

### Frontend
- Next.js
- TypeScript
- React
- CSS

### Containerization
- Docker
- Docker Compose

## Project structure
```
Text Emotion/
├── docker-compose.yml
├──backend
│    ├── app
│    │   └── main.py
│    ├── model
│    │   └── sentiment_model.keras
│    ├── notbook
│    │   └── train_w.ipynb
│    ├── Dockerfile
│    └── requirements.txt
└── frontend/
    ├── Dockerfile
    ├── package.json
    ├── app/
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components/
    │   ├── ExplanationBars.tsx
    │   ├── FloatingLines.tsx
    │   ├── Footer.tsx
    │   ├── Hero.tsx
    │   ├── ModelSection.tsx
    │   ├── Navbar.tsx
    │   ├── PixelSwap.tsx
    │   ├── ResultDisplay.tsx
    │   ├── TextAnalyzer.tsx
    │   └── Word2VecSection.tsx
    ├── lib/
    │   └── api.ts
    ├── public/
    │   ├── 1.png
    │   └── 2-2.png
    └── types/
        └── index.ts
```
## Getting started

### 1. Clone the repository

```bash
git clone <repository-url>
cd "Text emotion"
```

### 2. Run the application

```bash
docker compose up --build
```

### 3. Open the app

- Frontend: http://localhost:3000
- Backend API: http://localhost:8000

### 4. Stop the services

```bash
docker compose down
```

## Demo screenshots


```md
## Demo


```

## Example prediction

```text
Input: "This movie is amazing and I really enjoyed it."
Prediction: Positive
```

## Notes

- The model uses transfer learning to improve sentiment classification on a small dataset
- LIME is used to explain why the model predicted a given label
- The project is useful for NLP demos, educational purposes, and model explainability studies

## License

This project is intended for educational and demonstration purposes.

## Author

Built as a full-stack text sentiment analysis application using transfer learning and explainability techniques.
