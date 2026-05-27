import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { ArrowUpRight } from "lucide-react";
import { MascotAnimated } from "@/components/ui/MascotAnimated";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-[180px] pb-24 md:pt-[220px] md:pb-32 overflow-hidden bg-elio-cream">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column (7 col) */}
          <div className="lg:col-span-7 flex flex-col z-10">
            <Reveal>
              <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-elio-text-soft mb-6">
                <span className="text-elio-coral text-[8px]">●</span>
                <span>PARTENAIRE DES ENTREPRISES FRANÇAISES</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-[clamp(40px,6vw,80px)] leading-[1.05] tracking-[-0.02em] font-serif text-elio-ink mb-6 text-balance">
                L&apos;intégrateur multi-marques de robots de service, <span className="italic text-elio-coral">avec le SAV en France</span>.
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-[19px] leading-[1.6] text-elio-text-muted max-w-[560px] mb-10">
                Elio sélectionne, intègre et exploite les robots adaptés à vos opérations, en hospitality, propreté et retail. Une seule approche, toutes les marques.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="/contact" className="gap-2">
                    Planifier un échange
                    <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="lg" className="w-full sm:w-auto">
                  <Link href="/utilisations">
                    Voir nos utilisations
                  </Link>
                </Button>
              </div>
              <div className="font-mono text-[11px] text-elio-text-soft tracking-wider flex flex-wrap gap-x-2 gap-y-1">
                <span>Elio Robotique</span>
                <span>·</span>
                <span>FONDÉE EN 2026</span>
                <span>·</span>
                <span>SAV FRANCE</span>
              </div>
            </Reveal>
          </div>

          {/* Right Column (5 col) - Visual Bento */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 lg:-mr-12">
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto">

              {/* Card 1: Main Shape (Animated Mascot) */}
              <Reveal delay={0.2} className="absolute inset-0 z-0 flex items-center justify-center">
                <MascotAnimated className="scale-[1.1] md:scale-[1.2]" />
              </Reveal>

              {/* Badge: SAV France */}
              <Reveal delay={0.4} className="absolute -left-6 lg:-left-12 bottom-24 z-20">
                <div className="bg-elio-sand rounded-2xl p-6 shadow-xl border border-white/50 backdrop-blur-sm">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-elio-text-soft mb-1">
                    Service après-vente
                  </div>
                  <div className="font-serif text-[28px] leading-tight text-elio-ink">
                    SAV France
                  </div>
                  <div className="text-xs font-medium text-elio-success mt-1">
                    Ingénieurs francophones
                  </div>
                </div>
              </Reveal>

              {/* Badge: Multi-marques */}
              <Reveal delay={0.5} className="absolute -right-4 lg:-right-8 top-12 z-20">
                <div className="bg-white/90 backdrop-blur-md rounded-pill px-4 py-3 shadow-lg border border-elio-border inline-flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-elio-coral opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-elio-coral"></span>
                  </span>
                  <span className="font-medium text-[13px] text-elio-ink">Multi-marques, indépendant</span>
                </div>
              </Reveal>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
