import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/layout/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Sectors() {
  const uses = [
    {
      id: "nettoyage",
      label: "NETTOYAGE",
      title: "Entretien des sols",
      desc: "Autolaveuses autonomes pour lobbies, gares, supermarchés. 1 500 m²/h, 80% d'eau en moins. Vos équipes recentrées sur leurs missions à valeur ajoutée.",
      gradient: "from-elio-success/20 to-elio-sand/40",
    },
    {
      id: "service",
      label: "SERVICE",
      title: "Restauration & Hospitality",
      desc: "Robots runners pour livrer les plats et débarrasser. Libérez vos serveurs pour le conseil et la vente. Idéal pour groupes et franchises.",
      gradient: "from-elio-coral/20 to-elio-sand/40",
    },
    {
      id: "livraison",
      label: "LIVRAISON",
      title: "Logistique interne",
      desc: "Transport de linge, médicaments ou room-service. Prise d'ascenseur autonome. Solution 24/7 pour hôtels et cliniques.",
      gradient: "from-elio-ink-soft/20 to-elio-sand/40",
    },
    {
      id: "accueil",
      label: "ACCUEIL",
      title: "Orientation & Guidage",
      desc: "Premier contact multilingue pour orienter les visiteurs en magasin ou lobby. Information dynamique et accompagnement physique.",
      gradient: "from-elio-coral-wash to-elio-sand/40",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-elio-cream text-elio-ink">
      <Container>
        <Reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-elio-text-soft mb-6">
            04 — UTILISATIONS
          </div>
          <h2 className="text-[clamp(36px,4.5vw,56px)] leading-[1.05] font-serif mb-16 max-w-2xl">
            Un robot par besoin. <span className="italic text-elio-coral">Pas par catalogue</span>.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {uses.map((use, idx) => (
            <Reveal key={use.id} delay={0.1 * idx} className="group bg-white rounded-[24px] p-6 lg:p-10 border border-elio-border hover:shadow-lg transition-all duration-300">
              {/* Image Placeholder */}
              <div className={`w-full aspect-video rounded-xl bg-gradient-to-tr ${use.gradient} mb-8 flex items-center justify-center overflow-hidden relative`}>
                <span className="text-elio-ink/10 font-mono text-xs uppercase tracking-widest">{use.label}</span>
              </div>

              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-elio-text-soft mb-4">
                ● {use.label}
              </div>
              <h3 className="text-2xl font-sans font-semibold tracking-tight mb-4">
                {use.title}
              </h3>
              <p className="text-elio-text-muted text-[15px] leading-relaxed mb-8">
                {use.desc}
              </p>

              <Link href={`/utilisations#${use.id}`} className="inline-flex items-center gap-2 text-elio-coral font-medium text-[15px] group-hover:text-elio-coral-soft transition-colors">
                En savoir plus <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
