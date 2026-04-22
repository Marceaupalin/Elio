import { ReactNode } from "react";

interface RadioCardProps {
  icon: ReactNode;
  title: string;
  price: string;
  selected: boolean;
  onClick: () => void;
}

export function RadioCard({ icon, title, price, selected, onClick }: RadioCardProps) {
  return (
    <button
      onClick={onClick}
      className={`relative w-full text-left p-6 rounded-2xl border-2 transition-all duration-200 flex flex-col items-start gap-4
        ${selected 
          ? "bg-elio-coral-wash border-elio-coral shadow-sm" 
          : "bg-elio-sand border-transparent hover:border-elio-border"
        }
      `}
    >
      <div className={`p-3 rounded-xl ${selected ? "bg-white text-elio-coral" : "bg-white/50 text-elio-text-soft"}`}>
        {icon}
      </div>
      <div>
        <h4 className={`font-serif text-xl mb-1 ${selected ? "text-elio-ink" : "text-elio-text-muted"}`}>{title}</h4>
        <div className={`font-mono text-sm font-bold tracking-wider ${selected ? "text-elio-coral" : "text-elio-text-soft"}`}>
          {price}
        </div>
      </div>
      
      {/* Selection Indicator */}
      <div className={`absolute top-6 right-6 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors
        ${selected ? "border-elio-coral" : "border-elio-border"}
      `}>
        {selected && <div className="w-2.5 h-2.5 bg-elio-coral rounded-full" />}
      </div>
    </button>
  );
}
