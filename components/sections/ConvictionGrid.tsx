import { Reveal } from "@/components/ui/Reveal";
import { Layers, Repeat, Network, Wrench } from "lucide-react";

export function ConvictionGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">

      {/* Conviction 1 */}
      <Reveal delay={0.1} className="bg-elio-cream text-elio-ink rounded-[24px] p-8 md:p-10 flex flex-col group hover:shadow-lg transition-all duration-300 border border-elio-border">
        <div className="flex justify-between items-start mb-12">
          <Layers size={48} className="text-elio-coral" strokeWidth={1.5} />
          <span className="font-serif text-[80px] leading-none text-elio-coral opacity-20 group-hover:opacity-100 transition-opacity">01</span>
        </div>
        <h3 className="font-sans font-semibold text-2xl mb-4">Indépendance fabricant</h3>
        <p className="text-[15px] text-elio-text-muted leading-relaxed mb-8 flex-grow">
          Nous ne sommes affiliés à aucun fabricant unique. Keenon, Gausium, OrionStar, Savioke, HikRobot... Nous sélectionnons la meilleure solution pour chaque cas d&apos;usage. Si un robot n&apos;est pas le bon, nous le disons. Aucun concurrent en France ne propose cette indépendance au niveau national.
        </p>
        <div className="font-mono text-[11px] uppercase tracking-wider text-elio-text-soft pt-4 border-t border-elio-border">
        </div>
      </Reveal>

      {/* Conviction 2 */}
      <Reveal delay={0.2} className="bg-elio-coral-wash text-elio-ink rounded-[24px] p-8 md:p-10 flex flex-col group hover:shadow-lg transition-all duration-300">
        <div className="flex justify-between items-start mb-12">
          <Repeat size={48} className="text-elio-coral" strokeWidth={1.5} />
          <span className="font-serif text-[80px] leading-none text-elio-coral opacity-20 group-hover:opacity-100 transition-opacity">02</span>
        </div>
        <h3 className="font-sans font-semibold text-2xl mb-4">Robot-as-a-Service, pas vente au comptoir</h3>
        <p className="text-[15px] text-elio-text-muted leading-relaxed mb-8 flex-grow">
          OPEX, pas CAPEX. Un contrat 24 à 72 mois tout inclus : robot, installation, maintenance, assurance, remplacement. Votre trésorerie respire. Votre risque est nul. Et vous restez flexible : ajoutez des unités en haute saison, suspendez hors pointe.
        </p>
        <div className="inline-flex items-center gap-2 pt-4 border-t border-elio-coral/20">
          <span className="font-mono text-[11px] uppercase tracking-wider text-elio-ink">Amortissement :</span>
          <span className="font-serif italic text-xl text-elio-coral">5–7 mois</span>
        </div>
      </Reveal>

      {/* Conviction 3 */}
      <Reveal delay={0.3} className="bg-elio-sand text-elio-ink rounded-[24px] p-8 md:p-10 flex flex-col group hover:shadow-lg transition-all duration-300">
        <div className="flex justify-between items-start mb-12">
          <Network size={48} className="text-elio-coral" strokeWidth={1.5} />
          <span className="font-serif text-[80px] leading-none text-elio-coral opacity-20 group-hover:opacity-100 transition-opacity">03</span>
        </div>
        <h3 className="font-sans font-semibold text-2xl mb-4">Le robot parle à votre SI</h3>
        <p className="text-[15px] text-elio-text-muted leading-relaxed mb-8 flex-grow">
          Un robot déconnecté de votre environnement est un gadget. Nos équipes connectent chaque déploiement à votre stack : caisse, ERP, PMS hôtelier, WMS, système de supervision. Données de performance remontées en temps réel dans un dashboard propriétaire. C&apos;est notre fossé défensif — et votre valeur ajoutée.
        </p>
        <div className="inline-flex">
          <span className="bg-elio-ink text-white font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-pill">
            TICKET MOYEN 2× SUPÉRIEUR AU REVENDEUR CLASSIQUE
          </span>
        </div>
      </Reveal>

      {/* Conviction 4 */}
      <Reveal delay={0.4} className="bg-elio-ink-soft text-white rounded-[24px] p-8 md:p-10 flex flex-col group hover:shadow-lg transition-all duration-300">
        <div className="flex justify-between items-start mb-12">
          <Wrench size={48} className="text-elio-coral" strokeWidth={1.5} />
          <span className="font-serif text-[80px] leading-none text-elio-coral opacity-20 group-hover:opacity-100 transition-opacity">04</span>
        </div>
        <h3 className="font-sans font-semibold text-2xl mb-4 text-white">Maintenance locale, pas sous-traitée</h3>
        <p className="text-[15px] text-white/70 leading-relaxed mb-8 flex-grow">
          Ingénieurs francophones. Pièces détachées en France. Intervention hardware en 48 heures. 70% des incidents résolus à distance par logiciel. Si le robot est irréparable, nous le remplaçons. Votre service ne s&apos;arrête pas.
        </p>
        <div className="inline-flex items-center gap-2 pt-4 border-t border-white/10">
          <span className="font-mono text-[11px] uppercase tracking-wider text-white/50">Garantie :</span>
          <span className="font-serif italic text-xl text-white">Intervention 48h</span>
        </div>
      </Reveal>

    </div>
  );
}
