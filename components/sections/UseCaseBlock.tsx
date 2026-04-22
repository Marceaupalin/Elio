import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import * as LucideIcons from "lucide-react";
import { ReactNode } from "react";

interface UseCaseBlockProps {
  id: string;
  number: string;
  icon: string;
  title: ReactNode;
  intro: string;
  background: "cream" | "ink" | "sand";
  children: ReactNode;
}

export function UseCaseBlock({
  id,
  number,
  icon,
  title,
  intro,
  background,
  children
}: UseCaseBlockProps) {
  // @ts-expect-error - Dynamic lucide icon access from string icon prop
  const Icon = LucideIcons[icon] || LucideIcons.Zap;
  
  const bgClasses = {
    cream: "bg-elio-cream text-elio-ink",
    ink: "bg-elio-ink text-white",
    sand: "bg-elio-sand text-elio-ink"
  };

  const labelColor = background === "ink" ? "text-elio-coral" : "text-elio-coral";
  const introColor = background === "ink" ? "text-white/70" : "text-elio-text-muted";

  return (
    <section id={id} className={`py-24 md:py-32 scroll-mt-24 ${bgClasses[background]}`}>
      <Container>
        <div className="mb-16">
          <Reveal>
            <div className={`font-mono text-[11px] uppercase tracking-[0.14em] mb-6 ${labelColor}`}>
              {number}
            </div>
            <div className="flex items-start gap-6 mb-8">
              <div className="p-4 rounded-2xl bg-elio-coral/10 border border-elio-coral/20">
                <Icon size={40} className="text-elio-coral" strokeWidth={1.5} />
              </div>
              <h2 className="text-[clamp(36px,4.5vw,56px)] leading-[1.05] font-serif text-balance">
                {title}
              </h2>
            </div>
            <p className={`text-[17px] leading-[1.7] max-w-3xl ${introColor}`}>
              {intro}
            </p>
          </Reveal>
        </div>

        <div className="relative">
          {children}
        </div>
      </Container>
    </section>
  );
}
