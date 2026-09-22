import type { AnalyzeResult } from "@/types";

// Mets l'URL de ton backend FastAPI dans .env.local :
// NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000";

/**
 * Appelle /explain sur le backend et renvoie un résultat déjà structuré
 * (sentiment + probabilité + explication mot par mot pour LIME).
 *
 * Suppose que l'endpoint /explain du backend a été étendu pour renvoyer :
 * { sentiment: "Positive" | "Negative", probability: number, explanation: [string, number][] }
 * (voir la note sur le backend fournie à côté du code).
 */
export async function analyzeText(text: string): Promise<AnalyzeResult> {
  const trimmed = text.trim();
  if (!trimmed) {
    throw new Error("Le texte est vide.");
  }

  const url = `${API_BASE_URL}/explain?${new URLSearchParams({ text: trimmed })}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Erreur API (${res.status})`);
  }

  const data = await res.json();

  return {
    sentiment: data.sentiment,
    probability: data.probability,
    explanation: (data.explanation as [string, number][]).map(([word, weight]) => ({
      word,
      weight,
    })),
  };
}
