import { Reveal } from "@/components/ui/Reveal";

export function Timeline() {
  const nodes = [
    { year: "2024", title: "Veille robotique", desc: "Première analyse marché" },
    { year: "2025", title: "Benchmark terrain", desc: "Premiers contacts fabricants" },
    { year: "2026", title: "Lancement d'Elio", desc: "Premiers déploiements pilotes" },
  ];

  return (
    <div className="mt-16 relative">
      <div className="absolute top-8 left-0 right-0 h-[2px] bg-elio-border z-0 hidden md:block" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        {nodes.map((node, idx) => (
          <Reveal key={idx} delay={0.1 * idx} className="flex flex-col relative">
            <div className="hidden md:flex absolute top-[30px] -left-4 w-8 h-[2px] bg-elio-coral" />

            <div className="w-16 h-16 rounded-full bg-elio-cream border-2 border-elio-coral flex items-center justify-center font-mono text-sm text-elio-coral mb-6 shadow-sm">
              {node.year}
            </div>
            <h4 className="font-sans font-semibold text-elio-ink text-lg mb-2">{node.title}</h4>
            <p className="text-[14px] text-elio-text-muted leading-relaxed">{node.desc}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
