import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SentimentAI — Explained sentiment analysis",
  description: "Sentiment analysis with Word2Vec, deep learning, and LIME explanations.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
