import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ReactNode } from "react";

interface UseCaseHeroProps {
  label: string;
  title: ReactNode;
  subtitle: string;
}

export function UseCaseHero({ label, title, subtitle }: UseCaseHeroProps) {
  return (
    <section className="relative pt-[180px] pb-24 md:pt-[200px] md:pb-24 overflow-hidden bg-elio-ink text-white">
      {/* Background patterns could go here */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-elio-coral/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl">
          <Reveal>
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-elio-coral mb-6 flex items-center gap-2">
              <span className="text-[8px]">●</span> {label}
            </div>
            <h1 className="text-[clamp(48px,7vw,88px)] leading-[1.02] tracking-[-0.02em] font-serif mb-8 text-balance">
              {title}
            </h1>
            <p className="text-[19px] md:text-[21px] leading-[1.6] text-white/70 max-w-2xl mb-12 text-balance">
              {subtitle}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
