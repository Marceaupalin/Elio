import { BadgePercent } from "lucide-react";
import Link from "next/link";

interface EligibleBadgeProps {
  className?: string;
}

export function EligibleBadge({ className = "" }: EligibleBadgeProps) {
  return (
    <div className={`absolute top-4 right-4 z-10 group ${className}`}>
      <div className="bg-elio-success text-white font-mono text-[10px] uppercase tracking-[0.1em] rounded-pill px-3 py-1 flex items-center gap-1.5 shadow-sm cursor-help relative">
        <BadgePercent size={14} />
        <span>ÉLIGIBLE CARSAT −50%</span>
        
        {/* Tooltip */}
        <div className="absolute right-0 top-full mt-2 w-[220px] bg-elio-ink text-white p-3 rounded-lg text-xs opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-xl border border-white/10 text-left pointer-events-none group-hover:pointer-events-auto z-20">
          <p className="mb-2">Subvention CARSAT TMS Action — PME 1-49 salariés.</p>
          <Link href="/financement" className="text-elio-coral hover:text-white transition-colors underline decoration-elio-coral/30 hover:decoration-white inline-flex font-medium">
            En savoir plus →
          </Link>
        </div>
      </div>
    </div>
  );
}
