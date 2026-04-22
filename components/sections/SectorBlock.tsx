import { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/layout/Container";

interface SectorBlockProps {
  id: string;
  label: string;
  title: ReactNode;
  description: string;
  children: ReactNode;
  bgClass?: string;
  textClass?: string;
  descriptionClass?: string;
}

export function SectorBlock({
  id,
  label,
  title,
  description,
  children,
  bgClass = "bg-elio-cream",
  textClass = "text-elio-ink",
  descriptionClass = "text-elio-text-muted",
}: SectorBlockProps) {
  return (
    <section id={id} className={`py-24 md:py-32 ${bgClass} ${textClass} scroll-mt-20`}>
      <Container>
        <Reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-elio-coral mb-6">
            {label}
          </div>
          <h2 className="text-[clamp(36px,4.5vw,56px)] leading-[1.05] font-serif mb-8 max-w-2xl text-balance">
            {title}
          </h2>
          <p className={`text-[17px] leading-relaxed mb-16 max-w-[720px] ${descriptionClass}`}>
            {description}
          </p>
        </Reveal>
        {children}
      </Container>
    </section>
  );
}
