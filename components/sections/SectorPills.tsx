import { Reveal } from "@/components/ui/Reveal";
import * as LucideIcons from "lucide-react";

interface SectorPillsProps {
  sectors: { icon: string; label: string }[];
}

export function SectorPills({ sectors }: SectorPillsProps) {
  return (
    <div className="bg-elio-sand p-6 md:p-8 rounded-[24px] border border-elio-border mt-12 overflow-hidden">
      <Reveal>
        <div className="flex flex-wrap items-center gap-3 md:gap-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-elio-text-soft mr-4">
            Où ça s&apos;applique :
          </span>
          {sectors.map((sector, idx) => {
            // @ts-expect-error - Dynamic icon access
            const Icon = LucideIcons[sector.icon] || LucideIcons.Circle;
            return (
              <div 
                key={idx}
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-elio-border shadow-sm group hover:border-elio-coral transition-colors"
              >
                <Icon size={14} className="text-elio-coral shrink-0" />
                <span className="text-[13px] font-medium text-elio-ink">{sector.label}</span>
              </div>
            );
          })}
        </div>
      </Reveal>
    </div>
  );
}
