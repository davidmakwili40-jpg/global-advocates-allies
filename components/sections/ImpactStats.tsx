import type { ImpactMetric } from "@/types/content";
import { Card } from "@/components/ui/Card";

export function ImpactStats({ metrics }: { metrics: ImpactMetric[] }) {
  return (
    <dl className="grid gap-4 sm:grid-cols-3">
      {metrics.map((metric) => (
        <Card className="relative overflow-hidden" key={metric.label}>
          <div className="absolute right-5 top-5 size-10 border-r border-t border-gold-400/40" />
          <dt className="kicker">{metric.label}</dt>
          <dd className="mt-3 font-serif text-step-5 font-semibold text-ink">{metric.value}</dd>
          <p className="mt-3 text-sm leading-6 text-ink/70">{metric.context}</p>
        </Card>
      ))}
    </dl>
  );
}
