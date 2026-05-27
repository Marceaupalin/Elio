import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/layout/Container";

export function Partners() {
  const partners = [
    { name: "Pudu", desc: "Leader mondial service hospitality" },
    { name: "Keenon", desc: "Innovateur indoor delivery" },
    { name: "Gausium", desc: "Spécialiste autolaveuses" },
    { name: "OrionStar", desc: "Robots d'accueil IA" },
    { name: "Reeman", desc: "Logistique et chassis" },
    { name: "HikRobot", desc: "Vision et AMR industriels" },
  ];

  return (
    <section className="py-24 md:py-32 bg-elio-cream">
      <Container>
        <Reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-elio-text-soft mb-6">
            06 — NOS MARQUES PARTENAIRES
          </div>
          <h2 className="text-[clamp(32px,4vw,52px)] leading-[1.08] font-serif mb-5 max-w-3xl text-elio-ink">
            Multi-marques, par principe.
          </h2>
          <p className="text-[17px] text-elio-text-muted max-w-2xl leading-relaxed mb-16">
            Nous sélectionnons le robot adapté à votre cas, pas celui qui arrange notre stock. Notre indépendance vis-à-vis des fabricants est la garantie que nous travaillons dans votre intérêt.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {partners.map((partner, idx) => (
            <Reveal
              key={idx}
              delay={0.08 * idx}
              className="bg-white border border-elio-border rounded-xl p-8 flex flex-col items-center justify-center text-center gap-4 hover:border-elio-border-mid transition-colors duration-300"
            >
              {/*
                LOGO FABRICANT à placer ici : /assets/images/logo-[nom].webp
                Dimensions cibles : 160x60px (ratio 8:3), fond transparent.
                Voir /assets/images/README.md pour la convention de nommage.
              */}
              <div className="h-14 w-full flex items-center justify-center">
                <span className="font-sans font-bold text-2xl text-elio-ink/25 uppercase tracking-widest select-none">
                  {partner.name}
                </span>
              </div>
              <p className="text-[13px] text-elio-text-muted">{partner.desc}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
