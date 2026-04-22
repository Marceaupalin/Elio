import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/layout/Container";
import { Network, Layers, Wrench, Repeat, BarChart3 } from "lucide-react";

export function BentoOffer() {
  return (
    <section className="py-24 md:py-32 bg-elio-cream text-elio-ink">
      <Container>
        <Reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-elio-text-soft mb-6">
            02 — NOTRE OFFRE
          </div>
          <h2 className="text-[clamp(36px,4.5vw,56px)] leading-[1.05] font-serif mb-16 max-w-2xl">
            Un seul partenaire, <span className="italic text-elio-coral">quatre</span> leviers.
          </h2>
        </Reveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[auto] lg:auto-rows-[280px] gap-4">
          
          {/* Card 1: Intégration (2x2) */}
          <Reveal delay={0.1} className="md:col-span-2 lg:col-span-2 lg:row-span-2 bg-elio-ink text-white rounded-[24px] p-8 md:p-12 relative overflow-hidden group shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            {/* Background connection lines placeholder */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
            
            <Network size={48} className="text-elio-coral mb-8" strokeWidth={1.5} />
            <h3 className="text-2xl md:text-[28px] font-sans font-semibold tracking-tight mb-4 pr-12">
              L&apos;intégration SI qui manquait au marché
            </h3>
            <p className="text-white/70 text-base leading-relaxed mb-12 max-w-md">
              Caisse, ERP, PMS hôtelier, WMS, supervision... Nos équipes connectent les robots à votre stack existant. Pas d&apos;îlot technologique, pas de données perdues.
            </p>
            <div className="absolute bottom-8 left-8 md:left-12">
              <span className="font-mono text-[11px] uppercase tracking-wider text-elio-coral border border-elio-coral/30 px-3 py-1.5 rounded-pill">
                PROPRIÉTÉ EXCLUSIVE ELIO
              </span>
            </div>
          </Reveal>

          {/* Card 3: RaaS (1x2) */}
          <Reveal delay={0.2} className="lg:row-span-2 bg-white rounded-[24px] p-8 relative overflow-hidden border border-elio-border group shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <Repeat size={32} className="text-elio-coral mb-6" strokeWidth={1.5} />
            <h3 className="text-xl font-sans font-semibold tracking-tight mb-3">
              Robot-as-a-Service
            </h3>
            <p className="text-elio-text-muted text-[15px] leading-relaxed mb-8">
              OPEX plutôt que CAPEX. Un contrat 24-72 mois tout inclus : robot, installation, maintenance, assurance, remplacement. Rentabilisé en 5 à 7 mois face au coût d&apos;un runner.
            </p>
            {/* Minimal SVG Chart */}
            <div className="absolute bottom-0 inset-x-0 h-32 px-8 flex items-end">
              <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                <path d="M0,45 C20,40 40,35 60,20 C80,5 100,0 100,0" fill="none" stroke="var(--elio-coral)" strokeWidth="3" strokeLinecap="round" className="opacity-80" />
                <path d="M0,50 L0,45 C20,40 40,35 60,20 C80,5 100,0 100,0 L100,50 Z" fill="url(#coral-gradient)" className="opacity-10" />
                <defs>
                  <linearGradient id="coral-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--elio-coral)" />
                    <stop offset="100%" stopColor="var(--elio-coral)" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </Reveal>

          {/* Card 4: Data & Supervision (1x2) */}
          <Reveal delay={0.3} className="lg:row-span-2 bg-white rounded-[24px] p-8 relative overflow-hidden border border-elio-border group shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <BarChart3 size={32} className="text-elio-coral mb-6" strokeWidth={1.5} />
            <h3 className="text-xl font-sans font-semibold tracking-tight mb-3">
              Vos robots, pilotés
            </h3>
            <p className="text-elio-text-muted text-[15px] leading-relaxed mb-8">
              Dashboard propriétaire : taux d&apos;utilisation, pics de trafic, ROI réel. Vous pilotez une flotte, pas un gadget.
            </p>
            {/* Dashboard minimal SVG */}
            <div className="absolute bottom-8 inset-x-8 h-24 bg-elio-sand/30 rounded-xl p-4 border border-elio-border/50 flex items-end gap-2">
              <div className="w-full bg-elio-coral/20 rounded-t-sm h-[40%]" />
              <div className="w-full bg-elio-coral/40 rounded-t-sm h-[70%]" />
              <div className="w-full bg-elio-coral rounded-t-sm h-[100%]" />
              <div className="w-full bg-elio-coral/60 rounded-t-sm h-[60%]" />
              <div className="w-full bg-elio-coral/30 rounded-t-sm h-[45%]" />
            </div>
          </Reveal>

          {/* Card 2a: Multi-marques (1x1) */}
          <Reveal delay={0.4} className="bg-elio-coral-wash rounded-[24px] p-8 relative hover:-translate-y-1 transition-transform duration-300 h-full flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <Layers size={28} className="text-elio-coral" strokeWidth={1.5} />
              <h3 className="text-[19px] font-sans font-semibold tracking-tight">Multi-marques, par principe</h3>
            </div>
            <p className="text-elio-text-muted text-[15px] leading-relaxed">
              Pudu, Keenon, Gausium, OrionStar... Nous sélectionnons le robot adapté à votre cas d&apos;usage, pas celui qui arrange notre stock.
            </p>
          </Reveal>

          {/* Card 2b: SAV France (1x1) */}
          <Reveal delay={0.5} className="bg-elio-ink-soft text-white rounded-[24px] p-8 relative hover:-translate-y-1 transition-transform duration-300 h-full flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <Wrench size={28} className="text-elio-coral" strokeWidth={1.5} />
              <h3 className="text-[19px] font-sans font-semibold tracking-tight">SAV France en 48h</h3>
            </div>
            <p className="text-white/70 text-[15px] leading-relaxed">
              Ingénieurs francophones, pièces détachées sur place, remplacement si nécessaire. Votre service ne s&apos;arrête pas.
            </p>
          </Reveal>

        </div>
      </Container>
    </section>
  );
}
