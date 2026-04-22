import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/layout/Container";
import { AnchorPills } from "@/components/ui/AnchorPills";
import { ReactNode } from "react";

interface SectorHeroProps {
  label: string;
  title: ReactNode;
  subtitle: string;
  links?: { id: string; label: string }[];
  variant?: "ink" | "cream";
}

export function SectorHero({ label, title, subtitle, links, variant = "ink" }: SectorHeroProps) {
  const isInk = variant === "ink";
  
  return (
    <section className={`relative pt-[160px] pb-24 md:pt-[200px] min-h-[60vh] flex flex-col justify-center ${isInk ? 'bg-elio-ink text-white' : 'bg-elio-cream text-elio-ink'}`}>
      <Container className="relative z-10 flex flex-col h-full">
        <Reveal>
          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-elio-coral mb-6">
            <span className="text-[8px]">●</span>
            <span>{label}</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="text-[clamp(48px,5vw,72px)] leading-[1.05] tracking-tight font-serif mb-6 max-w-4xl text-balance">
            {title}
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className={`text-[18px] leading-[1.6] max-w-[640px] mb-12 ${isInk ? 'text-white/70' : 'text-elio-text-muted'}`}>
            {subtitle}
          </p>
        </Reveal>

        {links && links.length > 0 && (
          <Reveal delay={0.3} className="mt-auto pt-12">
            <AnchorPills items={links} />
          </Reveal>
        )}
      </Container>
    </section>
  );
}
