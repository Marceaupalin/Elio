import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";

export function CarsatFaq() {
  const faqs = [
    {
      q: "CARSAT, c'est pour les grosses entreprises ?",
      a: "Non, c'est spécifiquement conçu pour les PME de 1 à 49 salariés. Si votre effectif est de 28 personnes, vous êtes éligible. Le plafond de subvention est de 25 000€ par dossier."
    },
    {
      q: "Et si la CARSAT refuse mon dossier ?",
      a: "C'est rare quand le diagnostic est bien fait — le taux d'acceptation dépasse 95% sur les dossiers accompagnés. Dans tous les cas, le robot reste pertinent et le ROI positif. Vous payez simplement le prix standard."
    },
    {
      q: "Combien de temps prend le processus ?",
      a: "Du diagnostic à l'accord CARSAT : 6 à 8 semaines. Du accord au robot installé : 2 à 3 mois. Total : environ 3 mois. Elio accélère le process grâce à ses contacts directs avec les CARSAT régionales."
    },
    {
      q: "Est-ce compatible avec le modèle RaaS (location) ?",
      a: "La CARSAT finance plus favorablement l'achat que la location. Pour maximiser la subvention, nous recommandons l'achat avec financement CARSAT. Mais le RaaS reste disponible si votre structure financière le préfère."
    },
    {
      q: "Quels robots sont éligibles ?",
      a: "Tout robot qui réduit les TMS documentés dans le diagnostic : robots serveur (réduction des trajets et du port de charges), robots de nettoyage (suppression des postures contraignantes), robots de livraison (élimination des manutentions lourdes). Elio s'assure que le diagnostic CARSAT justifie le robot sélectionné."
    },
    {
      q: "Elio facture-t-il le montage du dossier CARSAT ?",
      a: "Non. Le diagnostic initial et le montage du dossier sont inclus dans notre accompagnement. Le seul coût pour vous est le prix net du robot après subvention."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-elio-sand">
      <Container>
        <Reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-elio-coral mb-6 text-center">
            08 — QUESTIONS FRÉQUENTES
          </div>
          <h2 className="text-[clamp(36px,4.5vw,56px)] leading-[1.05] font-serif mb-16 max-w-2xl mx-auto text-elio-ink text-center text-balance">
            Vos questions sur le financement.
          </h2>
        </Reveal>

        <Reveal delay={0.1} amount={0.1} className="max-w-[800px] mx-auto">
          {faqs.map((faq, idx) => (
            <Accordion key={idx} question={faq.q} answer={faq.a} />
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
