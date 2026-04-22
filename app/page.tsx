import { Hero } from "@/components/sections/Hero";
import { Proof } from "@/components/sections/Proof";
import { BentoOffer } from "@/components/sections/BentoOffer";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Sectors } from "@/components/sections/Sectors";
import { RoiCalculator } from "@/components/sections/RoiCalculator";
import { Partners } from "@/components/sections/Partners";
import { Testimonial } from "@/components/sections/Testimonial";
import { CtaFinal } from "@/components/sections/CtaFinal";

export default function Home() {
  return (
    <>
      <Hero />
      <Proof />
      <BentoOffer />
      <HowItWorks />
      <Sectors />
      <RoiCalculator />
      <Partners />
      <Testimonial />
      <CtaFinal />
    </>
  );
}
