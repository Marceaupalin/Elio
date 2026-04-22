import { CarsatHero } from "@/components/sections/CarsatHero";
import { TmsContext } from "@/components/sections/TmsContext";
import { SubventionCards } from "@/components/sections/SubventionCards";
import { BeforeAfterTable } from "@/components/sections/BeforeAfterTable";
import { CarsatProcess } from "@/components/sections/CarsatProcess";
import { CarsatCalculator } from "@/components/sections/CarsatCalculator";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { CompetitorCompare } from "@/components/sections/CompetitorCompare";
import { CarsatFaq } from "@/components/sections/CarsatFaq";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Financement CARSAT | Elio Robotics",
  description: "La CARSAT finance jusqu'à 50% de votre robot de service. Elio monte votre dossier de subvention TMS de A à Z.",
};

export default function FinancementPage() {
  return (
    <main className="min-h-screen">
      <CarsatHero />
      <TmsContext />
      <SubventionCards />
      <BeforeAfterTable />
      <CarsatProcess />
      <CarsatCalculator />
      <CaseStudy />
      <CompetitorCompare />
      <CarsatFaq />

      {/* SECTION 9 - CTA FINAL */}
      <section className="py-[100px] bg-elio-coral-wash text-center">
        <Container>
          <Reveal>
            <h2 className="text-[clamp(40px,6vw,80px)] font-serif leading-[1.1] mb-6 text-elio-ink max-w-4xl mx-auto text-balance">
              50% remboursés. <br /><span className="italic text-elio-coral">On s&apos;occupe du reste</span>.
            </h2>
            <p className="text-[20px] text-elio-text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
              Un diagnostic d&apos;une journée suffit. Gratuit, sans engagement. Si votre cas d&apos;usage est éligible, nous montons le dossier CARSAT et vous payez votre robot à moitié prix.
            </p>
            <div className="flex flex-col items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg">
                <Link href="/contact" className="gap-2">
                  Demander un diagnostic gratuit
                  <ArrowUpRight size={22} />
                </Link>
              </Button>
              <div className="text-elio-text-soft font-mono text-sm mt-2">
                ou appelez-nous : 01 00 00 00 00
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
