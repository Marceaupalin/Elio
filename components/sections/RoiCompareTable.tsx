// removed import

export function RoiCompareTable() {
  const rows = [
    { label: "Coût mensuel", humain: "2 250 €", robot: "900–1 200 € (RaaS)" },
    { label: "Surface couverte/h", humain: "250–350 m²", robot: "> 1 500 m²" },
    { label: "Disponibilité", humain: "8h/jour", robot: "24h/7 (auto-recharge)" },
    { label: "Économies eau/énergie", humain: "—", robot: "−80% eau, −75% énergie" },
  ];

  return (
    <div className="bg-elio-cream rounded-2xl border border-elio-border overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-3 bg-elio-sand/50 p-4 md:p-6 border-b border-elio-border font-sans font-semibold text-sm">
        <div className="text-elio-text-muted">Poste</div>
        <div className="text-elio-ink">Agent humain</div>
        <div className="text-elio-coral">Robot Gausium Scrubber 50</div>
      </div>
      
      {/* Body */}
      <div className="flex flex-col">
        {rows.map((row, idx) => (
          <div key={idx} className="grid grid-cols-3 p-4 md:p-6 border-b border-elio-border/50 text-[15px] items-center">
            <div className="text-elio-text-muted font-medium pr-2">{row.label}</div>
            <div className="text-elio-ink">{row.humain}</div>
            <div className="text-elio-ink font-semibold">{row.robot}</div>
          </div>
        ))}
        
        {/* Footer highlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 p-6 md:p-8 bg-elio-coral-wash items-center gap-4">
          <div className="text-elio-ink font-medium">ROI documenté 5 ans</div>
          <div className="text-elio-text-muted hidden md:block">—</div>
          <div className="flex flex-col">
            <div className="font-serif text-4xl lg:text-[48px] text-elio-coral leading-none mb-1">
              135 000 €
            </div>
            <div className="text-xs font-mono uppercase tracking-widest text-elio-coral/70">économisés</div>
          </div>
        </div>
      </div>
    </div>
  );
}
