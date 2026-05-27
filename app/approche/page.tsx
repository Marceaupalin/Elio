import { SectorHero } from "@/components/sections/SectorHero";
import { ConvictionGrid } from "@/components/sections/ConvictionGrid";
import { MethodTimeline } from "@/components/sections/MethodTimeline";
import { ContextKpis } from "@/components/sections/ContextKpis";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Notre approche | Elio Robotics",
  description:
    "Elio est un intégrateur multi-marques indépendant : audit, sélection, intégration SI et exploitation continue. Quatre étapes, des livrables concrets à chaque phase.",
};

export default function ApprochePage() {
  return (
    <div className="bg-elio-cream min-h-screen">

      <SectorHero
        label="NOTRE APPROCHE"
        title={<>Partenaire de robotisation. <br /><span className="italic text-elio-coral">Créateur de valeur durable</span>.</>}
        subtitle="Elio est né d&apos;un constat simple : le marché français de la robotique de service reste fragmenté, dominé par des approches mono-marque et des logiques purement transactionnelles.

Nous faisons un choix différent : une approche indépendante, multi-fabricants, combinée à un modèle de service récurrent et une véritable expertise d&apos;intégration aux systèmes d&apos;information."
        variant="cream"
      />

      {/* SECTION 2 - CONVICTIONS */}
      <section className="py-24 md:py-32 bg-elio-ink text-white">
        <Container>
          <Reveal>
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-elio-coral mb-6">
              01 — CE QUI NOUS DIFFÉRENCIE
            </div>
            <h2 className="text-[clamp(36px,4.5vw,56px)] leading-[1.05] font-serif max-w-2xl text-balance">
              Quatre convictions. <span className="italic text-elio-coral">Zéro concession</span>.
            </h2>
          </Reveal>

          <ConvictionGrid />
        </Container>
      </section>

      {/* SECTION 3 - MÉTHODE */}
      <section className="py-24 md:py-32 bg-elio-cream">
        <Container>
          <Reveal>
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-elio-coral mb-6">
              02 — NOTRE MÉTHODE
            </div>
            <h2 className="text-[clamp(36px,4.5vw,56px)] leading-[1.05] font-serif mb-6 max-w-2xl text-elio-ink text-balance">
              Un process d&apos;intégrateur, <span className="italic text-elio-coral">structurée et orientée résultats</span>.
            </h2>
            <p className="text-[18px] text-elio-text-muted max-w-2xl leading-relaxed">
              Quatre phases. Chaque phase produit un livrable concret. Vous décidez de continuer à chaque étape.
            </p>
          </Reveal>

          <MethodTimeline />
        </Container>
      </section>

      {/* SECTION 4 - ENGAGEMENT */}
      <section className="py-32 md:py-48 bg-elio-coral-wash text-center px-4 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-elio-coral/5 rounded-full blur-3xl pointer-events-none" />
        <Container className="relative z-10">
          <Reveal>
            <blockquote className="font-serif text-[clamp(28px,4vw,36px)] leading-[1.3] italic text-elio-ink max-w-[800px] mx-auto mb-12">
              &quot;Le marché français attendait un acteur qui ne soit ni un revendeur opportuniste, ni un éditeur enfermé sur son produit. Notre engagement : rester indépendant, rester technique, rester local.&quot;
            </blockquote>
            <div className="font-mono text-[12px] uppercase tracking-widest text-elio-coral">
              L&apos;ÉQUIPE ELIO ROBOTICS · 2026
            </div>
          </Reveal>
        </Container>
      </section>

      {/* SECTION 5 - CONTEXTE */}
      <section className="py-24 md:py-32 bg-elio-ink text-white">
        <Container>
          <Reveal>
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-elio-coral mb-6">
              03 — LE CONTEXTE QUI NOUS PORTE
            </div>
            <h2 className="text-[clamp(36px,4.5vw,56px)] leading-[1.05] font-serif max-w-2xl text-balance">
              Ce n&apos;est pas un pari. <span className="italic text-elio-coral">C&apos;est une convergence</span>.
            </h2>
          </Reveal>

          <ContextKpis />
        </Container>
      </section>

      {/* SECTION 6 - CTA FINAL */}
      <section className="py-[120px] bg-elio-cream text-center px-4 border-t border-elio-border">
        <Container>
          <Reveal>
            <h2 className="font-serif text-[clamp(40px,5vw,64px)] leading-[1.05] text-elio-ink mb-6">
              Prêt à structurer <span className="italic text-elio-coral">votre projet</span> ?
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-[18px] text-elio-text-muted mb-10 max-w-xl mx-auto">
              Un Diagnostic de 1 semaine suffit pour savoir si la robotisation est pertinente dans votre cas. Sans engagement.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto shadow-coral">
              <Link href="/contact" className="gap-2">
                Demander un diagnostic gratuit
                <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="w-full sm:w-auto text-elio-ink border-elio-border hover:bg-elio-ink hover:text-white">
              <Link href="/utilisations">
                Découvrir nos utilisations
              </Link>
            </Button>
          </Reveal>
        </Container>
      </section>

    </div>
  );
}
