"use client";

import { useState } from "react";
import { analyzeText } from "@/lib/api";
import type { AnalyzeResult } from "@/types";
import ResultDisplay from "./ResultDisplay";

export default function TextAnalyzer() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<AnalyzeResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!text.trim() || loading) return;
    setLoading(true);
    setError(null);
    try {
      const data = await analyzeText(text);
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred.");
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
      event.preventDefault();
      handleSubmit();
    }
  };

  return (
    <section id="analyse" className="mx-auto max-w-3xl px-6 py-24">
      <h2 className="mb-2 text-center text-3xl font-bold text-white">Analyze your text</h2>
      <p className="mb-10 text-center text-white/60">
        Write a sentence or review and discover whether it is perceived as positive or negative.
      </p>

      <textarea
        value={text}
        onChange={(event) => setText(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Example: This product is amazing, I highly recommend it!"
        rows={5}
        className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 p-5 text-lg text-white placeholder:text-white/30 focus:border-violet-400 focus:outline-none"
      />

      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-white/40">Ctrl/Cmd + Enter to send</span>
        <button
          onClick={handleSubmit}
          disabled={loading || !text.trim()}
          className="rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {loading ? "Analyzing..." : "Send"}
        </button>
      </div>

      {error && (
        <p className="mt-4 rounded-lg bg-rose-500/10 px-4 py-3 text-sm text-rose-300">{error}</p>
      )}

      {result && (
        <div className="mt-10">
          <ResultDisplay result={result} />
        </div>
      )}
    </section>
  );
}
