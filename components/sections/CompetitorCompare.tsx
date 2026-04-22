import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Check, X } from "lucide-react";

export function CompetitorCompare() {
  const criteria = [
    { name: "Robot", competitor: { val: true }, elio: { val: true } },
    { name: "Installation + SAV", competitor: { val: true }, elio: { val: true } },
    { name: "Diagnostic TMS inclus", competitor: { val: false }, elio: { val: true, text: "Gratuit" } },
    { name: "Montage dossier CARSAT", competitor: { val: false }, elio: { val: true, text: "Elio gère" } },
    { name: "Réseau ergonomes CARSAT", competitor: { val: false }, elio: { val: true, text: "Partenaires intégrés" } },
    { name: "Suivi TMS 12 mois", competitor: { val: false }, elio: { val: true, text: "Rapport annuel" } },
    { name: "Prix net client (robot serveur)", competitor: { text: "55 000 €" }, elio: { text: "27 500 €", highlight: true } },
    { name: "ROI", competitor: { text: "30–36 mois" }, elio: { text: "12–18 mois", highlight: true } },
  ];

  return (
    <section className="py-24 md:py-32 bg-elio-cream">
      <Container>
        <Reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-elio-coral mb-6 text-center">
            07 — NOTRE DIFFÉRENCE
          </div>
          <h2 className="text-[clamp(36px,4.5vw,56px)] leading-[1.05] font-serif mb-16 max-w-2xl mx-auto text-elio-ink text-center text-balance">
            Ce qu&apos;aucun autre fournisseur ne fait.
          </h2>
        </Reveal>

        <Reveal delay={0.1} amount={0.1} className="max-w-[1000px] mx-auto overflow-x-auto pb-4">
          <div className="min-w-[700px]">
            {/* Header */}
            <div className="grid grid-cols-12 gap-4 px-6 pb-6 border-b border-elio-border font-mono text-[11px] uppercase tracking-widest">
              <div className="col-span-4 text-elio-text-soft">Critère</div>
              <div className="col-span-4 text-center text-elio-text-soft">Fournisseur classique</div>
              <div className="col-span-4 text-center text-elio-coral font-bold">Elio</div>
            </div>

            {/* Rows */}
            <div className="flex flex-col gap-2 mt-4">
              {criteria.map((row, idx) => (
                <div key={idx} className="grid grid-cols-12 gap-4 items-stretch group">
                  <div className="col-span-4 flex items-center px-6 py-4 rounded-l-xl group-hover:bg-elio-sand/50 transition-colors">
                    <span className="font-medium text-elio-ink">{row.name}</span>
                  </div>
                  
                  {/* Competitor Column */}
                  <div className="col-span-4 flex items-center justify-center p-4 bg-white border-y border-l border-elio-border rounded-l-xl text-elio-text-muted">
                    {row.competitor.val === true && <Check size={20} />}
                    {row.competitor.val === false && <X size={20} className="opacity-30" />}
                    {row.competitor.text && <span className="text-sm">{row.competitor.text}</span>}
                  </div>
                  
                  {/* Elio Column */}
                  <div className="col-span-4 flex items-center justify-center p-4 bg-elio-coral-wash rounded-r-xl border border-elio-coral/20">
                    <div className="flex items-center gap-2">
                      {row.elio.val === true && <Check size={20} className="text-elio-success" strokeWidth={3} />}
                      <span className={`text-sm ${row.elio.highlight ? 'text-elio-coral font-bold text-lg' : 'text-elio-success font-bold'}`}>
                        {row.elio.text}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
