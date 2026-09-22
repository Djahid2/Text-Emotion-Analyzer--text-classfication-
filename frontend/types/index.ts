export type Sentiment = "Positive" | "Negative";

export interface ExplanationItem {
  word: string;
  weight: number; // contribution du mot : positif → pousse vers "Positive", négatif → pousse vers "Negative"
}

export interface AnalyzeResult {
  sentiment: Sentiment;
  probability: number; // probabilité de la classe "Positive", entre 0 et 1
  explanation: ExplanationItem[];
}
