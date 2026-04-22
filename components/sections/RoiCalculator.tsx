"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/layout/Container";
import { BadgePercent } from "lucide-react";
import Link from "next/link";

export function RoiCalculator() {
  const [robots, setRobots] = useState([2]);
  const [isRaas, setIsRaas] = useState(true);

  // Values based on prompt guidelines
  const costRunner = 2250;
  const costRaas = 950;
  // Let's assume an average purchase cost of 12000€ if buying instead of RaaS
  const costPurchase = 12000;
  
  const monthlySavings = (costRunner - (isRaas ? costRaas : 0)) * robots[0];
  const monthsToAmortize = isRaas ? 0 : Math.round(costPurchase / costRunner);
  
  // 3 years ROI calculation
  const totalCostRunner = costRunner * 36 * robots[0];
  const totalCostRobot = isRaas ? (costRaas * 36 * robots[0]) : (costPurchase * robots[0]);
  const roiPercentage = Math.round(((totalCostRunner - totalCostRobot) / totalCostRobot) * 100);

  return (
    <section className="py-24 md:py-32 bg-elio-sand border-y border-elio-border overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="flex flex-col">
            <Reveal>
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-elio-text-soft mb-6">
                05 — ROI
              </div>
              <h2 className="text-[clamp(36px,4.5vw,56px)] leading-[1.05] font-serif mb-6 text-elio-ink">
                Faites le calcul. <br/><span className="italic text-elio-coral">Vraiment</span>.
              </h2>
              <p className="text-elio-text-muted text-[17px] leading-relaxed mb-8 max-w-md">
                Un robot de service ne remplace pas l&apos;humain, il le décharge des kilomètres de marche quotidiens. Simulez l&apos;impact financier d&apos;une flotte automatisée sur vos opérations.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="bg-white rounded-[32px] p-8 md:p-12 shadow-xl border border-white/50 relative">
            <div className="flex flex-col gap-10">
              
              {/* Controls */}
              <div className="flex flex-col gap-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-semibold text-elio-ink">Nombre de robots</label>
                    <span className="font-mono text-elio-coral font-medium text-lg">{robots[0]}</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="10" 
                    step="1"
                    value={robots[0]}
                    onChange={(e) => setRobots([parseInt(e.target.value)])}
                    className="w-full accent-elio-coral h-2 bg-elio-sand rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-elio-text-soft">
                    <span>1</span>
                    <span>10+</span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-elio-border pt-8">
                  <span className="text-sm font-semibold text-elio-ink">Modèle d&apos;acquisition</span>
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-mono font-medium transition-colors ${!isRaas ? "text-elio-ink" : "text-elio-text-soft"}`}>ACHAT</span>
                    <button 
                      onClick={() => setIsRaas(!isRaas)}
                      className="relative inline-flex h-6 w-11 items-center rounded-full bg-elio-ink transition-colors focus:outline-none focus:ring-2 focus:ring-elio-coral focus:ring-offset-2"
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isRaas ? 'translate-x-6' : 'translate-x-1'}`} />
                    </button>
                    <span className={`text-xs font-mono font-medium transition-colors ${isRaas ? "text-elio-coral" : "text-elio-text-soft"}`}>RaaS</span>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="bg-elio-cream rounded-2xl p-6 md:p-8 flex flex-col gap-6">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-elio-text-soft mb-2">Économie mensuelle estimée</div>
                  <div className="font-serif text-[48px] md:text-[56px] leading-none text-elio-coral">
                    +{monthlySavings.toLocaleString('fr-FR')}€
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 border-t border-elio-border pt-6 mt-2">
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-elio-text-soft mb-1">Amortissement</div>
                    <div className="font-sans font-semibold text-elio-ink text-xl">
                      {isRaas ? "Immédiat" : `${monthsToAmortize} mois`}
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-elio-text-soft mb-1">ROI sur 3 ans</div>
                    <div className="font-sans font-semibold text-elio-ink text-xl">
                      {roiPercentage}%
                    </div>
                  </div>
                </div>
              </div>

              <div className="font-mono text-[10px] sm:text-[11px] leading-[1.6] text-elio-text-soft tracking-wider text-center pt-4 border-t border-elio-border opacity-70 cursor-help" title="Runner estimé à 2250€/mois (SMIC + 42% charges)">
                HYPOTHÈSES : SMIC + 42% CHARGES · SERVICE 15H/7J · ASSUMÉ 100% DISPONIBILITÉ ROBOT
              </div>
            </div>
          </Reveal>

        </div>

        {/* CARSAT Insert */}
        <Reveal delay={0.3} className="mt-16">
          <div className="bg-elio-success text-white rounded-2xl p-8 max-w-[680px] mx-auto text-center flex flex-col items-center shadow-lg">
            <BadgePercent size={32} className="text-white mb-6" />
            <h3 className="font-sans text-[20px] font-semibold text-white mb-4">Et si 50% du prix était pris en charge ?</h3>
            <p className="text-[15px] text-white/80 leading-relaxed mb-6">
              La CARSAT finance jusqu&apos;à 50% de votre robot dans le cadre de la prévention des TMS. PME de 1 à 49 salariés, tous nos secteurs cibles sont éligibles.
            </p>
            <Link href="/financement" className="text-white underline text-[14px] font-medium hover:text-white/80 transition-colors">
              Découvrir le dispositif →
            </Link>
          </div>
        </Reveal>

      </Container>
    </section>
  );
}
