import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowUpRight, Repeat, ShieldCheck, Wrench, BarChart3, FileText } from "lucide-react";

export const metadata = {
  title: "Financement | Elio Robotics",
  description:
    "Elio propose un modèle Robot-as-a-Service (RaaS) : OPEX plutôt que CAPEX, contrat tout inclus (robot, installation, maintenance, assurance, remplacement), flexible et sans investissement initial lourd.",
};

export default function FinancementPage() {
  return (
    <main className="min-h-screen bg-elio-cream">

      {/* HERO */}
      <section className="relative pt-[160px] pb-24 md:pt-[200px] bg-elio-ink text-white overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-elio-coral mb-6">
                <span className="text-[8px]">●</span>
                <span>FINANCEMENT</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-[clamp(42px,5.5vw,72px)] leading-[1.06] tracking-tight font-serif mb-8 text-balance">
                Un robot de service sans immobilisation de capital.
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-[18px] leading-[1.65] text-white/75 max-w-2xl">
                Le modèle RaaS d&apos;Elio transforme l&apos;achat d&apos;un robot en abonnement mensuel tout inclus. Vos équipements sont toujours à jour, votre trésorerie reste libre.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* RAAS — LE MODÈLE */}
      <section className="py-24 md:py-32 bg-elio-cream">
        <Container>
          <Reveal>
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-elio-text-soft mb-6">
              01 — ROBOT-AS-A-SERVICE
            </div>
            <h2 className="text-[clamp(32px,4vw,52px)] leading-[1.08] font-serif mb-6 max-w-2xl text-elio-ink">
              OPEX plutôt que CAPEX. <span className="italic text-elio-coral">Un contrat, tout inclus</span>.
            </h2>
            <p className="text-[17px] text-elio-text-muted max-w-2xl leading-relaxed mb-16">
              Plutôt qu&apos;un achat de matériel à amortir sur plusieurs années, Elio vous propose un abonnement mensuel fixe sur 24 à 72 mois. Le robot est opérationnel dès le premier jour.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Repeat,
                title: "Robot inclus",
                desc: "Le robot le mieux adapté à votre cas d'usage, sélectionné parmi nos marques partenaires (Pudu, Keenon, Gausium, OrionStar, Reeman, HikRobot).",
              },
              {
                icon: Wrench,
                title: "Maintenance & SAV France",
                desc: "Interventions techniques, pièces détachées, mises à jour logicielles. Nos ingénieurs francophones interviennent sur site.",
              },
              {
                icon: ShieldCheck,
                title: "Assurance & remplacement",
                desc: "En cas de panne prolongée, nous remplaçons l'équipement. Votre service n'est pas interrompu.",
              },
              {
                icon: BarChart3,
                title: "Supervision continue",
                desc: "Dashboard de suivi : taux d'utilisation, alertes, rapports d'activité. Vous pilotez votre flotte, nous gérons l'infrastructure.",
              },
              {
                icon: FileText,
                title: "Intégration SI comprise",
                desc: "Connexion à votre caisse, PMS hôtelier, ERP ou WMS. L'installation est réalisée par nos équipes, pas laissée à votre DSI.",
              },
              {
                icon: ArrowUpRight,
                title: "Flexibilité au renouvellement",
                desc: "À l'issue du contrat, upgrade vers un nouveau modèle, ajout de robots, ou arrêt. Vous restez maître de votre feuille de route.",
              },
            ].map((item, idx) => (
              <Reveal key={idx} delay={0.08 * idx} className="bg-white border border-elio-border rounded-[20px] p-8 flex flex-col gap-5 hover:border-elio-border-mid hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 bg-elio-coral/10 rounded-xl flex items-center justify-center">
                  <item.icon size={20} className="text-elio-coral" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-elio-ink text-[17px] mb-2">{item.title}</h3>
                  <p className="text-[14px] text-elio-text-muted leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* LEASING */}
      <section className="py-24 bg-elio-sand border-y border-elio-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-elio-text-soft mb-6">
                02 — LEASING
              </div>
              <h2 className="text-[clamp(28px,3.5vw,44px)] leading-[1.1] font-serif mb-6 text-elio-ink">
                La location longue durée, quand le RaaS ne s&apos;adapte pas.
              </h2>
              <p className="text-[17px] text-elio-text-muted leading-relaxed">
                Pour certains profils d&apos;acheteurs (marchés publics, structures avec contraintes d&apos;achats spécifiques), nous proposons une formule de location longue durée ou de crédit-bail. Nous étudions ensemble la structure la plus adaptée à votre organisation.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-elio-ink text-white rounded-[28px] p-10 md:p-12">
                <h3 className="font-serif text-[22px] mb-8">Comparer RaaS et leasing</h3>
                <div className="space-y-4">
                  {[
                    { label: "Investissement initial", raas: "Aucun", lease: "Selon contrat" },
                    { label: "Maintenance incluse", raas: "Oui", lease: "Selon contrat" },
                    { label: "Remplacement en panne", raas: "Oui", lease: "À négocier" },
                    { label: "Flexibilité à la hausse", raas: "Oui", lease: "Limitée" },
                    { label: "Compatible marchés publics", raas: "À étudier", lease: "Souvent oui" },
                  ].map((row) => (
                    <div key={row.label} className="grid grid-cols-3 gap-4 text-sm border-b border-white/10 pb-4">
                      <span className="text-white/60">{row.label}</span>
                      <span className="text-elio-coral font-medium">{row.raas}</span>
                      <span className="text-white/80">{row.lease}</span>
                    </div>
                  ))}
                  <div className="grid grid-cols-3 gap-4 text-[11px] font-mono uppercase tracking-wider text-white/30 pt-2">
                    <span></span>
                    <span>RaaS</span>
                    <span>Leasing</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* MENTION AIDES PUBLIQUES */}
      <section className="py-16 bg-elio-cream border-b border-elio-border">
        <Container>
          <Reveal>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-[15px] text-elio-text-muted leading-relaxed italic">
                Des aides publiques à l&apos;investissement peuvent exister selon votre profil et votre région. Nous vous orientons vers les dispositifs pertinents le moment venu.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-[100px] bg-elio-coral-wash text-center">
        <Container>
          <Reveal>
            <h2 className="text-[clamp(36px,5vw,64px)] font-serif leading-[1.08] mb-6 text-elio-ink max-w-3xl mx-auto text-balance">
              Discutons de la formule adaptée à votre projet.
            </h2>
            <p className="text-[18px] text-elio-text-muted mb-12 max-w-xl mx-auto leading-relaxed">
              Chaque déploiement est unique. Un échange de 15 minutes suffit pour qualifier votre cas et esquisser le modèle économique.
            </p>
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg shadow-coral">
              <Link href="/contact" className="gap-2">
                Planifier un échange
                <ArrowUpRight size={22} />
              </Link>
            </Button>
          </Reveal>
        </Container>
      </section>

    </main>
  );
}
