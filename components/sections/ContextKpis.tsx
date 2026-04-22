import { Reveal } from "@/components/ui/Reveal";

export function ContextKpis() {
  const kpis = [
    {
      value: "57,4%",
      desc: "des embauches difficiles en France (2026). CHR, nettoyage et santé en tête des professions en tension.",
    },
    {
      value: "5–8 mois",
      desc: "ROI d'un robot serveur face à un runner. Le prix FOB est passé sous 5 000€, rendant le RaaS massivement viable pour les PME.",
    },
    {
      value: "15h",
      desc: "d'autonomie réelle (Keenon T9 Pro, 2026). Navigation VSLAM sans marqueurs. La technologie est sortie du stade démo.",
    },
    {
      value: "3 ans",
      desc: "de fenêtre concurrentielle estimée avant saturation du marché français. 75% des PME nettoyage n'ont encore aucun robot.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
      {kpis.map((kpi, idx) => (
        <Reveal key={idx} delay={0.1 * idx} className="bg-elio-cream rounded-2xl p-8 flex flex-col items-start border border-elio-border hover:-translate-y-1 transition-transform duration-300">
          <div className="font-serif text-[48px] lg:text-[56px] leading-none text-elio-coral mb-4">
            {kpi.value}
          </div>
          <p className="text-[15px] text-elio-ink leading-relaxed">
            {kpi.desc}
          </p>
        </Reveal>
      ))}
    </div>
  );
}
