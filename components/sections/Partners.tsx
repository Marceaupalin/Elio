import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/layout/Container";

export function Partners() {
  const partners = [
    { name: "Pudu", desc: "Leader mondial service hospitality" },
    { name: "Keenon", desc: "Innovateur indoor delivery" },
    { name: "Gausium", desc: "Spécialiste autolaveuses" },
    { name: "OrionStar", desc: "Robots d&apos;accueil IA" },
    { name: "Reeman", desc: "Logistique et chassis" },
    { name: "HikRobot", desc: "Vision et AMR industriels" },
  ];

  return (
    <section className="py-24 md:py-32 bg-elio-cream">
      <Container>
        <Reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-elio-text-soft mb-6">
            06 — ÉCOSYSTÈME
          </div>
          <h2 className="text-[clamp(36px,4.5vw,56px)] leading-[1.05] font-serif mb-16 max-w-2xl text-elio-ink">
            Les meilleurs fabricants du marché. <br /><span className="italic text-elio-coral">Sélectionnés, pas subis</span>.
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {partners.map((partner, idx) => (
            <Reveal key={idx} delay={0.1 * idx} className="bg-white border border-elio-border rounded-xl p-8 flex flex-col items-center justify-center text-center gap-4 hover:border-elio-border-mid transition-colors duration-300">
              <div className="h-12 flex items-center justify-center">
                <span className="font-sans font-bold text-2xl text-elio-ink/30 uppercase tracking-widest">{partner.name}</span>
              </div>
              <p className="text-[13px] text-elio-text-muted">{partner.desc}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
