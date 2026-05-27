import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/layout/Container";
import { Quote } from "lucide-react";

export function Proof() {
  return (
    <section className="bg-elio-sand py-16 md:py-20 border-b border-elio-border">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Citation GHR */}
          <div className="lg:col-span-8">
            <Reveal>
              <Quote size={32} className="text-elio-coral mb-6 opacity-80" strokeWidth={1} />
              <blockquote className="font-serif text-[clamp(19px,2.4vw,28px)] leading-[1.38] italic text-elio-ink mb-6">
                &ldquo;Le marché français attendait un acteur qui ne soit ni un revendeur opportuniste,
                ni un éditeur enfermé sur son produit. Elio apporte la rigueur d&apos;intégrateur SI
                à un marché qui en manquait cruellement.&rdquo;
              </blockquote>
              <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-elio-coral">
                François Gauthier, Président, Groupement Hôtellerie Restauration (GHR)
              </div>
            </Reveal>
          </div>

          {/* Mention premiers déploiements */}
          <div className="lg:col-span-4">
            <Reveal delay={0.2}>
              <div className="bg-white rounded-[20px] p-7 border border-elio-border shadow-sm">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-elio-coral opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-elio-coral"></span>
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-elio-text-soft">Déploiements actifs</span>
                </div>
                <p className="text-[15px] text-elio-text-muted leading-relaxed">
                  Premiers déploiements en cours auprès d&apos;opérateurs en Île-de-France.
                </p>
              </div>
            </Reveal>
          </div>

        </div>
      </Container>
    </section>
  );
}
