import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";

export function BeforeAfterTable() {
  const rows = [
    { label: "Investissement robot serveur", before: "55 000 €", after: "27 500 €" },
    { label: "Investissement robot nettoyage", before: "45 000 €", after: "22 500 €" },
    { label: "Diagnostic ergonomique", before: "5 000 € (à votre charge)", after: "1 500 € (70% financé)" },
    { label: "ROI estimé", before: "30–36 mois", after: "12–18 mois" },
    { label: "Montage du dossier", before: "Vous, seul", after: "Elio gère tout" },
    { label: "Réseau ergonomes CARSAT", before: "À trouver vous-même", after: "Partenaires Elio intégrés" },
  ];

  return (
    <section className="py-24 md:py-32 bg-elio-cream">
      <Container>
        <Reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-elio-coral mb-6 text-center">
            03 — L&apos;IMPACT
          </div>
          <h2 className="text-[clamp(36px,4.5vw,56px)] leading-[1.05] font-serif mb-16 max-w-2xl mx-auto text-elio-ink text-center text-balance">
            Ce que ça change. <br /><span className="italic text-elio-coral">Concrètement</span>.
          </h2>
        </Reveal>

        {/* Table Desktop / Stack Mobile */}
        <Reveal delay={0.1} amount={0.1} className="max-w-[1000px] mx-auto mb-16">
          {/* Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 pb-4 border-b border-elio-border font-mono text-xs uppercase tracking-widest text-elio-text-soft">
            <div className="col-span-4"></div>
            <div className="col-span-4 text-center">Sans CARSAT</div>
            <div className="col-span-4 text-center text-elio-coral">Avec Elio + CARSAT</div>
          </div>
          
          {/* Rows */}
          <div className="flex flex-col gap-2 mt-4">
            {rows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-stretch">
                <div className="md:col-span-4 bg-elio-sand rounded-xl p-4 md:p-6 flex items-center font-medium text-elio-ink">
                  {row.label}
                </div>
                
                <div className="grid grid-cols-2 md:col-span-8 gap-2 md:gap-4">
                  <div className="bg-white border border-elio-border rounded-xl p-4 md:p-6 flex flex-col justify-center items-center text-center">
                    <div className="md:hidden font-mono text-[10px] uppercase tracking-widest text-elio-text-soft mb-2">Sans CARSAT</div>
                    <div className="text-elio-text-muted text-sm md:text-base">{row.before}</div>
                  </div>
                  
                  <div className="bg-elio-coral-wash rounded-xl p-4 md:p-6 flex flex-col justify-center items-center text-center">
                    <div className="md:hidden font-mono text-[10px] uppercase tracking-widest text-elio-coral mb-2">Avec Elio + CARSAT</div>
                    <div className="text-elio-coral font-bold text-sm md:text-base">
                      {row.after.includes('(') ? (
                        <>
                          {row.after.split('(')[0]} <span className="font-normal text-xs opacity-80 block md:inline">({row.after.split('(')[1]}</span>
                        </>
                      ) : (
                        row.after
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2} amount={0.1} className="max-w-[1000px] mx-auto">
          <div className="bg-elio-ink text-white rounded-[32px] p-10 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-elio-coral/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="relative z-10">
              <blockquote className="font-serif text-[clamp(24px,3vw,28px)] leading-[1.4] italic mb-8 max-w-[800px] mx-auto">
                &quot;Le frein numéro un à l&apos;adoption des robots de service, c&apos;est le prix. La CARSAT ne le réduit pas de 10% ou 20% — elle le divise par deux. Aucun concurrent en France n&apos;intègre ce montage dans son offre.&quot;
              </blockquote>
              <div className="font-mono text-[11px] uppercase tracking-widest text-elio-coral">
                POSITIONNEMENT ELIO · 2026
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
