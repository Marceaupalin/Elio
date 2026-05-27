/**
 * Blog Elio Robotics — Index des articles
 *
 * Convention éditoriale :
 *   - Cadence : 1 article par mois minimum
 *   - Angle : augmentation des équipes par le robot (jamais réduction de personnel)
 *   - Ciblage SEO : secteur + ville (ex. "robot serveur hôtel Paris", "autolaveuse EHPAD Lyon")
 *   - Format : retour terrain > cas d'usage > données de marché > perspective
 *
 * Pour créer un article :
 *   1. Créer app/blog/[slug]/page.tsx avec export metadata.
 *   2. Ajouter l'entrée dans la liste articles ci-dessous.
 *   3. Déployer.
 *
 * Aucun article inventé ne doit être publié — uniquement du contenu factuel
 * basé sur des déploiements réels ou des données de marché vérifiables.
 */

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Blog | Elio Robotics",
  description:
    "Actualités, retours terrain et analyses du marché de la robotique de service B2B en France.",
};

const articles: {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  secteur: string;
}[] = [
  /* Exemple (décommenter et adapter au premier article réel) :
  {
    slug: "robot-autolaveuse-hotel-paris",
    date: "2026-06-01",
    title: "...",
    excerpt: "...",
    secteur: "Hospitality",
  },
  */
];

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24 bg-elio-cream min-h-screen">
      <Container>
        <div className="max-w-2xl mb-16">
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-elio-text-soft mb-6">
            ACTUALITÉS
          </div>
          <h1 className="text-[clamp(36px,5vw,64px)] font-serif leading-[1.05] text-elio-ink mb-6">
            Le terrain, en clair.
          </h1>
          <p className="text-[18px] text-elio-text-muted leading-relaxed">
            Retours d&apos;expérience, analyses de marché et perspectives sur la robotique de service B2B en France.
          </p>
        </div>

        {articles.length === 0 ? (
          <div className="py-24 text-center border border-elio-border rounded-[24px] bg-white">
            <p className="text-elio-text-soft font-mono text-[12px] uppercase tracking-widest mb-6">
              Premiers articles à venir
            </p>
            <Button asChild variant="ghost" size="sm">
              <Link href="/contact" className="gap-2">
                Planifier un échange
                <ArrowUpRight size={16} />
              </Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group bg-white rounded-[24px] p-8 border border-elio-border hover:shadow-lg transition-all duration-300"
              >
                <div className="font-mono text-[10px] uppercase tracking-widest text-elio-coral mb-4">
                  {article.secteur} · {article.date}
                </div>
                <h2 className="font-serif text-xl text-elio-ink mb-3 group-hover:text-elio-coral transition-colors">
                  {article.title}
                </h2>
                <p className="text-[14px] text-elio-text-muted leading-relaxed">
                  {article.excerpt}
                </p>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
