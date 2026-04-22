import { Reveal } from "@/components/ui/Reveal";

export function MethodTimeline() {
  const phases = [
    {
      num: "1",
      title: "DIAGNOSTIC",
      duration: "1 SEMAINE",
      desc: "Nous analysons vos flux opérationnels sur site : volumes, pics, contraintes d'espace, outils existants. Nous cartographions les postes les plus robotisables et les plus rentables. Pas de vente pendant le diagnostic — juste de l'analyse.",
      deliverable: "RAPPORT DU DIAGNOSTIC · CARTOGRAPHIE DES FLUX · CALCUL ROI PROJETÉ PAR POSTE",
    },
    {
      num: "2",
      title: "SÉLECTION",
      duration: "3 SEMAINES",
      desc: "Sur la base du diagnostic, nous proposons une shortlist de 2 à 3 robots adaptés à votre cas d'usage, avec comparatif technique et financier. Nous organisons une démonstration sur site. Si le contexte s'y prête, un pilote de 30 jours peut être mis en place.",
      deliverable: "SHORTLIST ROBOTS · COMPARATIF TECHNIQUE + FINANCIER · DÉMONSTRATION SUR SITE",
    },
    {
      num: "3",
      title: "INTÉGRATION",
      duration: "4 À 8 SEMAINES",
      desc: "Configuration de la navigation (cartographie des espaces), connexion aux systèmes existants (caisse, ERP, PMS), formation des équipes sur site, mise en production encadrée. Chaque déploiement suit un protocole documenté. Rien n'est laissé au hasard.",
      deliverable: "ROBOT OPÉRATIONNEL · CONNEXION SI ACTIVE · ÉQUIPES FORMÉES · PROTOCOLE SAV ACTIVÉ",
    },
    {
      num: "4",
      title: "EXPLOITATION",
      duration: "CONTINU",
      desc: "Supervision continue via dashboard. Alertes en temps réel. Maintenance préventive et curative. Rapports mensuels de performance et de ROI. Recommandations d'optimisation. Extensions de flotte si pertinent.",
      deliverable: "DASHBOARD TEMPS RÉEL · RAPPORTS MENSUELS · SLA GARANTI · ÉVOLUTIONS DE FLOTTE",
    },
  ];

  return (
    <div className="relative max-w-4xl mx-auto pl-4 md:pl-0 mt-20">
      {/* Ligne verticale */}
      <div className="absolute top-0 bottom-0 left-[24px] md:left-[100px] w-[2px] bg-elio-coral/20" />

      <div className="flex flex-col gap-16 md:gap-24">
        {phases.map((phase, idx) => (
          <Reveal key={idx} delay={0.1} className="relative flex flex-col md:flex-row gap-8 md:gap-16">

            {/* Numéro */}
            <div className="w-[48px] md:w-[200px] flex justify-center md:justify-end shrink-0 relative z-10 bg-elio-cream py-4">
              <span className="font-serif text-[64px] md:text-[72px] leading-none text-elio-coral mr-4">
                {phase.num}
              </span>
            </div>

            {/* Contenu */}
            <div className="flex flex-col pt-4">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="font-sans font-semibold text-2xl text-elio-ink">{phase.title}</h3>
                <span className="font-mono text-[12px] uppercase text-elio-coral tracking-wider bg-elio-coral-wash px-3 py-1 rounded-pill">
                  {phase.duration}
                </span>
              </div>

              <p className="text-[16px] text-elio-text-muted leading-relaxed mb-6 max-w-2xl">
                {phase.desc}
              </p>

              <div className="inline-flex max-w-fit">
                <div className="bg-elio-sand px-4 py-3 rounded-lg border border-elio-border font-mono text-[11px] text-elio-ink tracking-wider">
                  <span className="text-elio-coral mr-2">●</span>
                  LIVRABLE : {phase.deliverable}
                </div>
              </div>
            </div>

          </Reveal>
        ))}
      </div>
    </div>
  );
}
