"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { RadioCard } from "@/components/ui/RadioCard";
import { UtensilsCrossed, Sparkles, Package, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const formatPrice = (price: number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

const ROBOT_TYPES = [
  { id: "serveur", title: "Robot serveur", price: 55000, icon: <UtensilsCrossed size={24} /> },
  { id: "nettoyage", title: "Robot nettoyage", price: 45000, icon: <Sparkles size={24} /> },
  { id: "livraison", title: "Robot livraison", price: 50000, icon: <Package size={24} /> },
];

export function CarsatCalculator() {
  const [sector, setSector] = useState("Restauration / Hôtellerie");
  const [employees, setEmployees] = useState(20);
  const [robotType, setRobotType] = useState(ROBOT_TYPES[0]);
  const [tmsLeaves, setTmsLeaves] = useState(2);

  // Logic
  const subventionRobot = Math.min(robotType.price * 0.50, 25000);
  const subventionDiag = 3500; // 5000 * 0.70
  const investissementNet = robotType.price - subventionRobot + (5000 - subventionDiag);
  const economieCotisation = tmsLeaves * 2000;
  
  // ROI roughly
  const roiMoisRaw = investissementNet / (economieCotisation / 12 + robotType.price * 0.03);
  let roiDisplay = "12–18 mois";
  if (roiMoisRaw > 18 && roiMoisRaw <= 24) roiDisplay = "18–24 mois";
  if (roiMoisRaw > 24) roiDisplay = "24–30 mois";
  if (roiMoisRaw <= 12) roiDisplay = "Moins de 12 mois";

  return (
    <section className="py-24 md:py-32 bg-elio-cream">
      <Container>
        <Reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-elio-coral mb-6 text-center">
            05 — SIMULATEUR
          </div>
          <h2 className="text-[clamp(36px,4.5vw,56px)] leading-[1.05] font-serif mb-16 max-w-2xl mx-auto text-elio-ink text-center text-balance">
            Calculez votre subvention. <br /><span className="italic text-elio-coral">En 30 secondes</span>.
          </h2>
        </Reveal>

        <Reveal delay={0.1} amount={0.1}>
          <div className="max-w-[800px] mx-auto bg-white border border-elio-border rounded-[32px] shadow-lg p-8 md:p-12">
            
            {/* Inputs */}
            <div className="space-y-10 mb-12">
              
              {/* Secteur */}
              <div>
                <label className="block font-mono text-xs uppercase tracking-widest text-elio-text-muted mb-3">
                  1. Secteur d&apos;activité
                </label>
                <select 
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                  className="w-full bg-elio-sand border-none rounded-pill px-6 py-4 text-elio-ink font-medium focus:ring-2 focus:ring-elio-coral outline-none appearance-none"
                >
                  <option>Restauration / Hôtellerie</option>
                  <option>Nettoyage / Facility</option>
                  <option>Santé / EHPAD</option>
                  <option>Autre</option>
                </select>
              </div>

              {/* Effectif */}
              <div>
                <div className="flex justify-between items-end mb-3">
                  <label className="block font-mono text-xs uppercase tracking-widest text-elio-text-muted">
                    2. Nombre de salariés
                  </label>
                  <span className="font-serif text-3xl text-elio-coral leading-none">{employees}</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="100" 
                  value={employees}
                  onChange={(e) => setEmployees(parseInt(e.target.value))}
                  className="w-full h-2 bg-elio-sand rounded-lg appearance-none cursor-pointer accent-elio-coral"
                />
                <div className="mt-2 text-xs text-elio-text-soft">
                  Éligible CARSAT : 1 à 49 salariés
                </div>
                
                {employees > 49 && (
                  <div className="mt-4 p-4 bg-elio-coral-wash text-elio-ink rounded-xl text-sm border border-elio-coral/20">
                    Votre effectif dépasse 49 salariés. Des dispositifs existent mais les conditions diffèrent — <Link href="/contact" className="underline font-medium hover:text-elio-coral">contactez-nous pour une étude personnalisée</Link>.
                  </div>
                )}
              </div>

              {/* Type Robot */}
              <div>
                <label className="block font-mono text-xs uppercase tracking-widest text-elio-text-muted mb-3">
                  3. Type d&apos;équipement
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {ROBOT_TYPES.map((rt) => (
                    <RadioCard 
                      key={rt.id}
                      icon={rt.icon}
                      title={rt.title}
                      price={`${formatPrice(rt.price)} €`}
                      selected={robotType.id === rt.id}
                      onClick={() => setRobotType(rt)}
                    />
                  ))}
                </div>
              </div>

              {/* TMS */}
              <div>
                <div className="flex justify-between items-end mb-3">
                  <label className="block font-mono text-xs uppercase tracking-widest text-elio-text-muted">
                    4. Nombre d&apos;arrêts TMS / an
                  </label>
                  <span className="font-serif text-3xl text-elio-coral leading-none">{tmsLeaves}</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="20" 
                  value={tmsLeaves}
                  onChange={(e) => setTmsLeaves(parseInt(e.target.value))}
                  className="w-full h-2 bg-elio-sand rounded-lg appearance-none cursor-pointer accent-elio-coral"
                />
                <div className="mt-2 text-xs text-elio-text-soft">
                  Un arrêt TMS coûte en moyenne 3 000€ à 5 000€ à l&apos;entreprise (remplacement + cotisation)
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="bg-elio-ink text-white rounded-[24px] p-8 md:p-10 transition-opacity duration-300">
              
              <div className="space-y-6">
                {/* Row 1 */}
                <div className="flex justify-between items-baseline border-b border-white/10 pb-6">
                  <div className="space-y-1">
                    <div className="text-white/60 text-sm">Coût robot</div>
                    <div className="font-medium">{formatPrice(robotType.price)} €</div>
                  </div>
                  <div className="space-y-1 text-right">
                    <div className="text-white/60 text-sm">Subvention CARSAT (50%)</div>
                    <div className="font-serif text-3xl text-elio-coral">−{formatPrice(subventionRobot)} €</div>
                  </div>
                  <div className="space-y-1 text-right">
                    <div className="text-white/80 text-sm font-bold">Votre investissement net</div>
                    <div className="font-serif text-4xl underline decoration-elio-coral decoration-2 underline-offset-4">{formatPrice(robotType.price - subventionRobot)} €</div>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex justify-between items-baseline border-b border-white/10 pb-6">
                  <div className="space-y-1">
                    <div className="text-white/60 text-sm">Diagnostic ergonomique</div>
                    <div className="font-medium">5 000 €</div>
                  </div>
                  <div className="space-y-1 text-right">
                    <div className="text-white/60 text-sm">Subvention diagnostic (70%)</div>
                    <div className="text-elio-coral font-medium">−{formatPrice(subventionDiag)} €</div>
                  </div>
                  <div className="space-y-1 text-right">
                    <div className="text-white/80 text-sm font-bold">Diagnostic net</div>
                    <div className="font-medium">{formatPrice(5000 - subventionDiag)} €</div>
                  </div>
                </div>

                {/* Row 3 - Highlight */}
                <div className="bg-elio-coral rounded-xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left mt-8">
                  <div>
                    <div className="text-white/90 text-sm font-medium uppercase tracking-wider mb-2">Total Subvention CARSAT</div>
                    <div className="font-serif text-5xl leading-none">{formatPrice(subventionRobot + subventionDiag)} €</div>
                  </div>
                  <div className="space-y-3 sm:border-l sm:border-white/20 sm:pl-8 text-sm">
                    <div className="flex justify-between gap-8">
                      <span className="text-white/80">Économie AT/MP estimée</span>
                      <span className="font-bold">−2 000 à −4 000€/an</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span className="text-white/80">ROI estimé</span>
                      <span className="font-bold">{roiDisplay}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 text-center flex flex-col items-center">
                <Button asChild size="lg" className="rounded-full px-8 h-14 bg-white text-elio-coral hover:bg-elio-sand shadow-lg w-full sm:w-auto">
                  <Link href="/contact" className="gap-2">
                    Obtenir cette subvention — Demander un diagnostic gratuit
                    <ArrowUpRight size={20} />
                  </Link>
                </Button>
                <div className="font-mono text-[11px] uppercase tracking-widest text-white/40 mt-6 max-w-md">
                  ESTIMATION INDICATIVE · MONTANTS SOUMIS À VALIDATION CARSAT · PME 1–49 SALARIÉS
                </div>
              </div>

            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
