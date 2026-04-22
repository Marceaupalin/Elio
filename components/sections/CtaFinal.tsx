import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CtaFinal() {
  return (
    <section className="bg-elio-coral-wash py-[120px] relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots text-elio-coral/5" style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      <Container className="relative z-10 text-center flex flex-col items-center">
        <Reveal>
          <h2 className="text-[clamp(40px,5vw,64px)] leading-[1.05] font-serif text-elio-ink mb-6">
            Parlons de vos flux. <br/><span className="italic text-elio-coral">Concrètement</span>.
          </h2>
        </Reveal>
        
        <Reveal delay={0.1}>
          <p className="text-elio-text-muted text-lg max-w-lg mb-10">
            15 minutes suffisent pour qualifier si votre cas d&apos;usage est adapté à la robotisation.
          </p>
        </Reveal>
        
        <Reveal delay={0.2}>
          <Button asChild size="lg" className="shadow-coral">
            <Link href="/contact" className="gap-2">
              Planifier un échange
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
