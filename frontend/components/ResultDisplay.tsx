import PixelSwap from "./PixelSwap";
import ExplanationBars from "./ExplanationBars";
import type { AnalyzeResult } from "@/types";

function ResultPanel({
  label,
  emoji,
  colorClass,
  probability,
}: {
  label: string;
  emoji: string;
  colorClass: string;
  probability: number;
}) {
  return (
    <div className={`flex h-full w-full flex-col items-center justify-center gap-2 ${colorClass}`}>
      <span className="text-5xl">{emoji}</span>
      <span className="text-2xl font-bold text-white">{label}</span>
      <span className="text-sm text-white/70">{Math.round(probability * 100)}% confidence</span>
    </div>
  );
}

export default function ResultDisplay({ result }: { result: AnalyzeResult }) {
  const isPositive = result.sentiment === "Positive";
  const confidence = isPositive ? result.probability : 1 - result.probability;

  return (
    <div className="w-full space-y-6">
      {/* The reactbits pixel swap does not trigger on hover here: it switches
          automatically based on the result via active + trigger="manual". */}
      <PixelSwap
        firstContent={<ResultPanel label="Negative" emoji="🙁" colorClass="bg-rose-500/15" probability={confidence} />}
        secondContent={<ResultPanel label="Positive" emoji="🙂" colorClass="bg-emerald-500/15" probability={confidence} />}
        active={isPositive}
        trigger="manual"
        pattern="center"
        pixelSize={28}
        duration={1100}
        aspectRatio="16 / 6"
        className="rounded-2xl border border-white/10"
      />

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/60">
          Why this result? (LIME explanation)
        </h3>
        <ExplanationBars explanation={result.explanation} />
        <p className="mt-4 text-xs text-white/40">
          Green = pushes toward &quot;Positive&quot; · Red = pushes toward &quot;Negative&quot;
        </p>
      </div>
    </div>
  );
}
