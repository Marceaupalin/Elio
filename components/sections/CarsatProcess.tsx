import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ClipboardCheck, FileText, CheckCircle, Activity } from "lucide-react";

export function CarsatProcess() {
  const steps = [
    {
      num: "01",
      icon: ClipboardCheck,
      title: "DIAGNOSTIC GRATUIT",
      desc: "Elio vient sur site une journée. Nous évaluons vos flux, vos postes à risque TMS, et l'adéquation d'un robot. Aucun engagement, aucun coût.",
      duration: "1 JOUR",
      deliverable: "RAPPORT DE DIAGNOSTIC + CALCUL ROI"
    },
    {
      num: "02",
      icon: FileText,
      title: "DOSSIER CARSAT",
      desc: "Nous rédigeons le dossier de subvention CARSAT (TMS Diagnostic + TMS Action). Nous coordonnons avec l'ergonome référencé. Vous signez, nous déposons.",
      duration: "2 SEMAINES",
      deliverable: "DOSSIER COMPLET DÉPOSÉ"
    },
    {
      num: "03",
      icon: CheckCircle,
      title: "ACCORD & COMMANDE",
      desc: "La CARSAT valide le dossier sous 6 à 8 semaines. Dès l'accord, nous commandons le robot et préparons l'intégration.",
      duration: "6–8 SEMAINES",
      deliverable: "ACCORD CARSAT + ROBOT COMMANDÉ"
    },
    {
      num: "04",
      icon: Activity,
      title: "DÉPLOIEMENT + SUIVI TMS",
      desc: "Robot installé, équipes formées. Suivi TMS sur 12 mois : nous mesurons la réduction effective des arrêts, la baisse de cotisation, et le ROI réel.",
      duration: "2–3 MOIS + 12 MOIS SUIVI",
      deliverable: "ROBOT OPÉRATIONNEL + RAPPORT TMS 12 MOIS"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-elio-sand">
      <Container>
        <Reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-elio-coral mb-6 text-center">
            04 — COMMENT ÇA MARCHE
          </div>
          <h2 className="text-[clamp(36px,4.5vw,56px)] leading-[1.05] font-serif mb-6 max-w-2xl mx-auto text-elio-ink text-center text-balance">
            Elio gère le dossier. <br /><span className="italic text-elio-coral">Vous signez le chèque à moitié prix</span>.
          </h2>
          <p className="text-[18px] text-elio-text-muted max-w-2xl mx-auto text-center leading-relaxed mb-16">
            Le dispositif CARSAT est puissant mais bureaucratique. Notre rôle : vous en extraire toute la valeur sans que vous touchiez un formulaire.
          </p>
        </Reveal>

        <div className="relative">
          {/* Dashed line connecting steps - hidden on mobile, visible on lg */}
          <div className="hidden lg:block absolute top-[48px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-elio-coral/30 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, idx) => (
              <Reveal key={idx} delay={idx * 0.1} className="flex flex-col">
                <div className="bg-white rounded-[24px] p-8 flex flex-col h-full shadow-sm border border-elio-border relative">
                  
                  {/* Circle Icon Container */}
                  <div className="w-16 h-16 rounded-full bg-elio-coral-wash flex items-center justify-center mb-6 mx-auto lg:mx-0 border-4 border-elio-sand shadow-sm">
                    <step.icon className="text-elio-coral" size={24} />
                  </div>

                  <div className="font-serif text-[60px] text-elio-coral leading-none mb-4 text-center lg:text-left opacity-20 absolute top-4 right-6 pointer-events-none">
                    {step.num}
                  </div>

                  <h3 className="font-mono text-[13px] uppercase tracking-widest text-elio-ink font-bold mb-4 text-center lg:text-left">
                    {step.title}
                  </h3>
                  
                  <p className="text-[15px] text-elio-text-muted leading-relaxed mb-8 text-center lg:text-left">
                    {step.desc}
                  </p>

                  <div className="mt-auto pt-6 border-t border-elio-border/50 space-y-3">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-elio-text-soft font-mono mb-1">DURÉE</div>
                      <div className="text-sm font-mono text-elio-ink">{step.duration}</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-elio-text-soft font-mono mb-1">LIVRABLE</div>
                      <div className="text-[11px] font-mono text-elio-coral font-bold uppercase">{step.deliverable}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.4} className="mt-16 bg-elio-cream rounded-2xl p-6 text-center border border-elio-border max-w-3xl mx-auto shadow-sm">
          <p className="text-elio-ink text-[17px]">
            Du diagnostic à la mise en production : <strong>3 mois</strong>. Suivi TMS inclus sur 12 mois.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
