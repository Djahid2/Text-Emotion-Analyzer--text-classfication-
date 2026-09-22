import type { ExplanationItem } from "@/types";

export default function ExplanationBars({ explanation }: { explanation: ExplanationItem[] }) {
  const maxWeight = Math.max(...explanation.map((item) => Math.abs(item.weight)), 0.0001);
  const sorted = [...explanation].sort((a, b) => Math.abs(b.weight) - Math.abs(a.weight));

  return (
    <div className="space-y-2">
      {sorted.map((item) => {
        const isPositive = item.weight >= 0;
        const widthPct = Math.round((Math.abs(item.weight) / maxWeight) * 100);

        return (
          <div key={item.word} className="flex items-center gap-3 text-sm">
            <span className="w-28 shrink-0 truncate font-medium text-white/90">{item.word}</span>
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
              <div
                className={`h-full rounded-full ${isPositive ? "bg-emerald-400" : "bg-rose-400"}`}
                style={{ width: `${widthPct}%` }}
              />
            </div>
            <span className={`w-16 shrink-0 text-right font-mono text-xs ${isPositive ? "text-emerald-300" : "text-rose-300"}`}>
              {item.weight.toFixed(3)}
            </span>
          </div>
        );
      })}
    </div>
  );
}
