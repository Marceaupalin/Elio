import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/layout/Container";
import { Quote } from "lucide-react";

export function Testimonial() {
  return (
    <section className="py-32 md:py-48 bg-elio-ink text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-elio-coral/5 rounded-full blur-3xl pointer-events-none" />
      
      <Container className="max-w-4xl relative z-10 text-center flex flex-col items-center">
        <Reveal>
          <Quote size={48} className="text-elio-coral mb-12 opacity-80" strokeWidth={1} />
        </Reveal>
        
        <Reveal delay={0.1}>
          <blockquote className="font-serif text-[clamp(28px,4vw,44px)] leading-[1.2] italic text-white mb-12">
            &quot;Le marché français attendait un acteur qui ne soit ni un revendeur opportuniste, ni un éditeur enfermé sur son produit. Elio apporte la rigueur d&apos;intégrateur SI à un marché qui en manquait cruellement.&quot;
          </blockquote>
        </Reveal>
        
        <Reveal delay={0.2}>
          <div className="font-mono text-sm uppercase tracking-widest text-elio-coral">
            FRANÇOIS GAUTHIER — PRÉSIDENT, GROUPEMENT HÔTELLERIE RESTAURATION
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
