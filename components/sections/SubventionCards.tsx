import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Search, Wrench } from "lucide-react";

export function SubventionCards() {
  return (
    <section className="py-24 md:py-32 bg-elio-ink">
      <Container>
        <Reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-elio-coral mb-6 text-center">
            02 — LE DISPOSITIF
          </div>
          <h2 className="text-[clamp(36px,4.5vw,56px)] leading-[1.05] font-serif mb-16 max-w-2xl mx-auto text-white text-center text-balance">
            Deux subventions. <br /><span className="italic text-elio-coral">Jusqu&apos;à 50 000€ par entreprise</span>.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Card Gauche: TMS Diagnostic */}
          <Reveal delay={0.1} className="bg-elio-coral-wash text-elio-ink p-10 md:p-12 rounded-[32px] flex flex-col">
            <div className="flex justify-between items-start mb-8">
              <Search className="text-elio-coral" size={40} />
              <div className="font-mono text-[10px] uppercase tracking-widest text-elio-coral font-bold px-3 py-1 border border-elio-coral/30 rounded">
                ÉTAPE 1
              </div>
            </div>
            
            <h3 className="font-serif text-3xl mb-4">Diagnostic ergonomique</h3>
            <p className="text-[17px] text-elio-ink/80 mb-10 leading-relaxed">
              Un ergonome référencé CARSAT évalue les postes à risque TMS dans votre entreprise. Il cartographie les gestes, mesure les contraintes, et produit un plan d&apos;actions.
            </p>

            <div className="mt-auto bg-white rounded-2xl p-6 flex items-center justify-between shadow-sm">
              <div>
                <div className="font-serif text-[36px] text-elio-coral leading-none mb-1">70%</div>
                <div className="text-sm font-medium text-elio-ink">financé par la CARSAT</div>
              </div>
              <div className="text-right">
                <div className="font-medium">max 25 000€</div>
                <div className="text-xs text-elio-text-muted">par dossier</div>
              </div>
            </div>
            <div className="mt-6 font-mono text-[10px] uppercase tracking-widest text-elio-text-soft text-center">
              PME 1–49 SALARIÉS · TOUS SECTEURS
            </div>
          </Reveal>

          {/* Card Droite: TMS Action */}
          <Reveal delay={0.2} className="bg-elio-cream text-elio-ink p-10 md:p-12 rounded-[32px] border border-elio-border flex flex-col">
            <div className="flex justify-between items-start mb-8">
              <Wrench className="text-elio-coral" size={40} />
              <div className="font-mono text-[10px] uppercase tracking-widest text-elio-coral font-bold px-3 py-1 border border-elio-coral/30 rounded">
                ÉTAPE 2
              </div>
            </div>
            
            <h3 className="font-serif text-3xl mb-4">Équipement de prévention</h3>
            <p className="text-[17px] text-elio-text-muted mb-10 leading-relaxed">
              La CARSAT finance 50% du matériel identifié dans le plan d&apos;actions — y compris les robots de service. Robot serveur, robot de nettoyage, robot de livraison : si le diagnostic conclut qu&apos;il réduit les TMS, il est éligible.
            </p>

            <div className="mt-auto bg-white border border-elio-border rounded-2xl p-6 flex items-center justify-between shadow-sm">
              <div>
                <div className="font-serif text-[36px] text-elio-coral leading-none mb-1">50%</div>
                <div className="text-sm font-medium text-elio-ink">financé par la CARSAT</div>
              </div>
              <div className="text-right">
                <div className="font-medium">max 25 000€</div>
                <div className="text-xs text-elio-text-muted">par dossier</div>
              </div>
            </div>
            <div className="mt-6 font-mono text-[10px] uppercase tracking-widest text-elio-text-soft text-center">
              TOTAL POSSIBLE : 50 000€ DE SUBVENTION PAR ENTREPRISE
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
