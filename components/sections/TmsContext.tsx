import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";

export function TmsContext() {
  return (
    <section className="py-24 md:py-32 bg-elio-cream">
      <Container>
        <Reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-elio-coral mb-6 text-center">
            01 — LE CONTEXTE
          </div>
          <h2 className="text-[clamp(36px,4.5vw,56px)] leading-[1.05] font-serif mb-16 max-w-4xl mx-auto text-elio-ink text-center text-balance">
            87% des maladies professionnelles en France. <br/><span className="italic text-elio-coral">Un seul nom : TMS</span>.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Reveal delay={0.1} className="bg-elio-sand p-8 md:p-10 rounded-[32px] flex flex-col items-center text-center">
            <div className="font-serif text-[56px] text-elio-coral leading-none mb-6">87%</div>
            <p className="text-[16px] text-elio-ink leading-relaxed">
              des maladies professionnelles déclarées = Troubles Musculo-Squelettiques. Mal de dos, douleurs articulaires, blessures par gestes répétitifs.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="bg-elio-sand p-8 md:p-10 rounded-[32px] flex flex-col items-center text-center">
            <div className="font-serif text-[56px] text-elio-coral leading-none mb-6">2 Md€</div>
            <p className="text-[16px] text-elio-ink leading-relaxed">
              par an de cotisations AT/MP versées par les entreprises françaises. Cet argent finance la prévention — y compris les subventions pour vos robots.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="bg-elio-sand p-8 md:p-10 rounded-[32px] flex flex-col items-center text-center">
            <div className="font-serif text-[56px] text-elio-coral leading-none mb-6">#1</div>
            <p className="text-[16px] text-elio-ink leading-relaxed">
              Les secteurs les plus touchés : nettoyage, restauration, santé, logistique. Exactement les secteurs qu&apos;Elio adresse.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.4}>
          <p className="text-[17px] text-elio-text-muted max-w-[800px] mx-auto text-center leading-relaxed">
            Vos serveurs portent des plateaux. Vos agents de nettoyage poussent des autolaveuses. Vos aides-soignants soulèvent des résidents. Ces gestes répétés produisent des TMS — arrêts de travail, turnover, cotisations en hausse. La CARSAT existe précisément pour financer les solutions qui réduisent ces risques. Un robot de service en fait partie.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
