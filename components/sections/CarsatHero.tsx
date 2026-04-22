import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/layout/Container";

export function CarsatHero() {
  return (
    <section className="relative pt-[160px] pb-24 md:pt-[200px] min-h-[60vh] flex flex-col justify-center bg-elio-ink text-white overflow-hidden">
      <Container className="relative z-10 flex flex-col h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-elio-coral mb-6">
                <span className="text-[8px]">●</span>
                <span>FINANCEMENT</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-[clamp(48px,6vw,80px)] leading-[1.05] tracking-tight font-serif mb-6 text-balance">
                Votre robot, <br/><span className="italic text-elio-coral">financé à moitié</span>.
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-[18px] leading-[1.6] max-w-[640px] text-white/70">
                La CARSAT finance jusqu&apos;à 50% du prix de votre robot dans le cadre de la prévention des troubles musculo-squelettiques. Elio est le seul intégrateur en France à gérer l&apos;intégralité du dossier pour vous.
              </p>
            </Reveal>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5">
            <Reveal delay={0.3}>
              <div className="bg-elio-coral rounded-[32px] p-10 md:p-12 flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 blur-2xl rounded-full scale-150 translate-x-10 translate-y-10" />
                <div className="relative z-10">
                  <div className="font-serif text-[96px] leading-none mb-2">−50%</div>
                  <div className="text-[18px] text-white/90 font-medium mb-8">sur votre investissement robot</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-white/50 px-4 py-2 border border-white/20 rounded-pill">
                    SUBVENTION CARSAT TMS ACTION · PME 1–49 SALARIÉS
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </Container>
    </section>
  );
}
