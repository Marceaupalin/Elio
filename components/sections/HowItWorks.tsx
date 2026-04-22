import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/layout/Container";

export function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "AUDIT",
      desc: "Analyse de vos flux, volumes, contraintes SI et calcul du ROI projeté.",
      duration: "2 SEMAINES",
    },
    {
      num: "2",
      title: "SÉLECTION",
      desc: "Shortlist de 2 à 3 robots adaptés. Démonstration sur site. Pilote possible.",
      duration: "3 SEMAINES",
    },
    {
      num: "3",
      title: "INTÉGRATION",
      desc: "Connexion SI, cartographie des espaces, formation des équipes, mise en production.",
      duration: "4 À 8 SEMAINES",
    },
    {
      num: "4",
      title: "EXPLOITATION",
      desc: "Supervision continue, SAV réactif, optimisation data, extensions.",
      duration: "CONTINU",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-elio-ink text-white relative">
      <Container>
        <Reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-elio-coral mb-6">
            03 — NOTRE MÉTHODE
          </div>
          <h2 className="text-[clamp(36px,4.5vw,56px)] leading-[1.05] font-serif mb-20 max-w-2xl">
            De l&apos;audit au déploiement, <span className="italic text-elio-coral">quatre étapes</span>.
          </h2>
        </Reveal>

        <div className="relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-elio-coral/30 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <Reveal key={step.num} delay={0.1 * idx} className="flex flex-col relative h-full">
                <div className="font-serif text-[80px] leading-none text-elio-coral mb-6 bg-elio-ink inline-block lg:pr-4">
                  {step.num}
                </div>
                <h3 className="text-2xl font-sans font-semibold tracking-tight mb-4">{step.title}</h3>
                <p className="text-white/70 text-[15px] leading-relaxed mb-12 flex-grow">
                  {step.desc}
                </p>
                <div className="font-mono text-[11px] uppercase tracking-wider text-elio-coral/80 mt-auto pt-6 border-t border-white/10">
                  {step.duration}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
