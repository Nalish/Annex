type StatCardProps = {
  title: string;
  value: string;
  description: string;
  color: "indigo" | "teal" | "amber";
};

export default function StatCard({
  title,
  value,
  description,
  color,
}: StatCardProps) {
  const colors = {
    indigo: "bg-electric-indigo",
    teal: "bg-slate-teal",
    amber: "bg-amber-glow",
  };

  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-surface p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">

      {/* Title */}
      <p className="text-sm font-medium text-muted">
        {title}
      </p>

      {/* Value */}
      <p className="mt-2 text-3xl font-bold tracking-tight text-carbon-slate">
        {value}
      </p>

      {/* Description */}
      <p className="mt-3 text-xs text-muted">
        {description}
      </p>

      {/* Bottom accent */}
      <div
        className={`absolute bottom-0 left-0 h-1 w-full ${colors[color]}`}
      />

    </div>
  );
}