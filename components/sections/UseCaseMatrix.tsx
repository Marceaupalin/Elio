"use client";

import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";

const USES = [
  "Nettoyage",
  "Service en salle",
  "Livraison interne",
  "Accueil",
  "Logistique",
  "Désinfection"
];

const SECTORS = [
  "Restaurants",
  "Hôtels",
  "EHPAD / Santé",
  "Retail",
  "Entrepôts",
  "Bureaux"
];

// Matrix data: [Use Index, Sector Index]
const MAPPING = [
  [0, 0], [0, 1], [0, 2], [0, 3], [0, 5],
  [1, 0], [1, 1], [1, 2],
  [2, 1], [2, 2], [2, 5],
  [3, 0], [3, 1], [3, 2], [3, 3], [3, 5],
  [4, 3], [4, 4],
  [5, 1], [5, 2]
];

export function UseCaseMatrix() {
  const isMatch = (useIdx: number, sectorIdx: number) => {
    return MAPPING.some(m => m[0] === useIdx && m[1] === sectorIdx);
  };

  return (
    <section className="py-24 md:py-32 bg-elio-sand">
      <Container>
        <Reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-elio-coral mb-6">
            GUIDE RAPIDE
          </div>
          <h2 className="text-[clamp(36px,4.5vw,56px)] leading-[1.05] font-serif mb-16 text-elio-ink">
            Quel robot pour quel lieu ?
          </h2>
        </Reveal>

        {/* Desktop Matrix */}
        <div className="hidden lg:block overflow-x-auto">
          <div className="min-w-[1000px] bg-white rounded-[32px] border border-elio-border overflow-hidden shadow-sm">
            <div className="grid grid-cols-[200px_repeat(6,1fr)] border-b border-elio-border bg-elio-cream/30">
              <div className="p-6 font-mono text-[10px] uppercase tracking-widest text-elio-text-soft border-r border-elio-border">
                Utilisation
              </div>
              {SECTORS.map((sector, i) => (
                <div key={i} className="p-6 font-mono text-[10px] uppercase tracking-widest text-elio-text-soft text-center border-r last:border-0 border-elio-border">
                  {sector}
                </div>
              ))}
            </div>

            {USES.map((use, useIdx) => (
              <div 
                key={useIdx} 
                className="grid grid-cols-[200px_repeat(6,1fr)] border-b last:border-0 border-elio-border group hover:bg-elio-coral-wash/30 transition-colors"
              >
                <div className="p-6 font-serif text-lg text-elio-ink border-r border-elio-border font-medium">
                  {use}
                </div>
                {SECTORS.map((_, sectorIdx) => (
                  <div key={sectorIdx} className="p-6 flex items-center justify-center border-r last:border-0 border-elio-border">
                    {isMatch(useIdx, sectorIdx) ? (
                      <div className="w-2.5 h-2.5 rounded-full bg-elio-coral shadow-[0_0_8px_rgba(210,105,75,0.4)]" />
                    ) : (
                      <div className="w-1.5 h-1.5 rounded-full bg-elio-border" />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile List View */}
        <div className="lg:hidden space-y-4">
          {USES.map((use, useIdx) => (
            <Reveal key={useIdx} delay={useIdx * 0.05}>
              <div className="bg-white rounded-2xl p-6 border border-elio-border shadow-sm">
                <h3 className="font-serif text-xl text-elio-ink mb-4">{use}</h3>
                <div className="flex flex-wrap gap-2">
                  {SECTORS.map((sector, sectorIdx) => (
                    isMatch(useIdx, sectorIdx) && (
                      <span key={sectorIdx} className="px-3 py-1 bg-elio-sand rounded-full text-xs font-medium text-elio-ink">
                        {sector}
                      </span>
                    )
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-12 text-center text-elio-text-muted text-[15px] italic max-w-2xl mx-auto">
            La plupart de nos clients combinent 2 à 3 cas d&apos;usage. C&apos;est précisément là qu&apos;un intégrateur multi-marques crée sa valeur.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
