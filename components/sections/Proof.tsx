import { Reveal } from "@/components/ui/Reveal";

export function Proof() {
  const logos = [
    "Groupe CHR National",
    "Chaîne Hôtelière 3*",
    "Opérateur Facility",
    "Retail Center Paris",
    "Clinique Santé Plus",
    "Logistique Express",
    "Aéroport Hub",
    "Resto Rapide Co."
  ];

  return (
    <section className="bg-elio-sand py-12 border-b border-elio-border overflow-hidden">
      <Reveal>
        <div className="text-center mb-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-elio-text-soft">
            ILS NOUS FONT CONFIANCE — DÉPLOIEMENTS EN COURS
          </span>
        </div>
      </Reveal>

      {/* Marquee Container */}
      <div className="w-full flex overflow-hidden mask-image-fade">
        <div className="flex animate-marquee gap-8 whitespace-nowrap pl-8">
          {[...logos, ...logos].map((logo, idx) => (
            <div 
              key={idx} 
              className="px-6 py-3 rounded-pill border border-elio-border-mid bg-white/40 backdrop-blur-sm flex items-center justify-center text-sm font-medium text-elio-text-muted"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
      
      {/* Add custom CSS for marquee and mask-image in globals.css later */}
    </section>
  );
}
