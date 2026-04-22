import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";

export function CaseStudy() {
  return (
    <section className="py-24 md:py-32 bg-elio-ink">
      <Container>
        <Reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-elio-coral mb-6 text-center">
            06 — CAS CONCRET
          </div>
          <h2 className="text-[clamp(36px,4.5vw,56px)] leading-[1.05] font-serif mb-16 max-w-3xl mx-auto text-white text-center text-balance">
            Restaurant La Belle Vue, Lyon. <br /><span className="italic text-elio-coral">Résultat en 6 mois</span>.
          </h2>
        </Reveal>

        <Reveal delay={0.1} amount={0.1}>
          <div className="bg-elio-cream rounded-[32px] p-8 md:p-12 max-w-[1000px] mx-auto text-elio-ink overflow-hidden relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              
              {/* Avant */}
              <div className="bg-elio-coral-wash rounded-2xl p-8">
                <div className="inline-block px-3 py-1 bg-elio-coral/10 border border-elio-coral/20 text-elio-coral text-[10px] font-bold font-mono uppercase tracking-widest rounded mb-8">
                  SITUATION DE DÉPART
                </div>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-elio-coral mt-2 shrink-0" />
                    <div>
                      <div className="font-medium text-lg">45 couverts, 8 serveurs</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-elio-coral mt-2 shrink-0" />
                    <div>
                      <div className="font-medium text-lg"><span className="text-elio-coral font-bold text-xl">2</span> arrêts TMS par an</div>
                      <div className="text-elio-text-muted text-sm mt-1">(jambes, dos)</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-elio-coral mt-2 shrink-0" />
                    <div>
                      <div className="font-medium text-lg"><span className="text-elio-coral font-bold text-xl">4 200 €</span> de cotisation</div>
                      <div className="text-elio-text-muted text-sm mt-1">AT/MP annuelle</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-elio-coral mt-2 shrink-0" />
                    <div>
                      <div className="font-medium text-lg"><span className="text-elio-coral font-bold text-xl">35%</span> de turnover serveurs</div>
                      <div className="text-elio-text-muted text-sm mt-1">(usure physique)</div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Après */}
              <div className="bg-elio-sand rounded-2xl p-8">
                <div className="inline-block px-3 py-1 bg-elio-success/10 border border-elio-success/20 text-elio-success text-[10px] font-bold font-mono uppercase tracking-widest rounded mb-8">
                  RÉSULTATS
                </div>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-elio-success mt-2 shrink-0" />
                    <div>
                      <div className="font-medium text-lg"><span className="text-elio-success font-bold text-xl">0</span> arrêt TMS</div>
                      <div className="text-elio-text-muted text-sm mt-1">la première année</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-elio-success mt-2 shrink-0" />
                    <div>
                      <div className="font-medium text-lg"><span className="text-elio-success font-bold text-xl">−2 000 €</span> de cotisation</div>
                      <div className="text-elio-text-muted text-sm mt-1">AT/MP</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-elio-success mt-2 shrink-0" />
                    <div>
                      <div className="font-medium text-lg"><span className="text-elio-success font-bold text-xl">25</span> trajets/jour évités</div>
                      <div className="text-elio-text-muted text-sm mt-1">par les serveurs</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-elio-success mt-2 shrink-0" />
                    <div>
                      <div className="font-medium text-lg"><span className="text-elio-success font-bold text-xl">+20%</span> satisfaction</div>
                      <div className="text-elio-text-muted text-sm mt-1">clients</div>
                    </div>
                  </li>
                </ul>
              </div>

            </div>

            {/* Barre financière */}
            <div className="mt-8 bg-elio-ink text-white rounded-2xl p-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
              <div className="text-white/80">
                Robot serveur : 50 000€ <br className="sm:hidden" />
                <span className="hidden sm:inline"> → </span>
                Diagnostic CARSAT + subvention
              </div>
              <div className="text-lg">
                Coût net client : <span className="font-bold text-elio-coral text-xl">28 000€</span> <br className="sm:hidden" />
                <span className="hidden sm:inline"> → </span>
                ROI : <span className="font-bold text-white text-xl">12 mois</span>
              </div>
            </div>

            <div className="mt-8 text-center font-mono text-[10px] text-elio-text-soft tracking-widest uppercase">
              CAS ILLUSTRATIF BASÉ SUR DES DONNÉES TERRAIN · LES RÉSULTATS VARIENT SELON LE CONTEXTE
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
