import { CheckCircle2 } from "lucide-react";

interface EligibleBadgeProps {
  className?: string;
}

export function EligibleBadge({ className = "" }: EligibleBadgeProps) {
  return (
    <div className={`absolute top-4 right-4 z-10 ${className}`}>
      <div className="bg-elio-success text-white font-mono text-[10px] uppercase tracking-[0.1em] rounded-pill px-3 py-1 flex items-center gap-1.5 shadow-sm">
        <CheckCircle2 size={12} />
        <span>Disponible aujourd&apos;hui</span>
      </div>
    </div>
  );
}
