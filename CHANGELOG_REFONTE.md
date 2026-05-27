# Changelog — Refonte site Elio Robotics

Stack : **Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion**  
Domaine retenu : **elio-robot.fr** (voir conflit signalé ci-dessous)  
Commits : 7 commits atomiques, un par BLOC

---

## BLOC 1 — Corrections critiques de crédibilité

### Supprimé
| Élément | Fichier |
|---|---|
| H1 "Les robots de service, enfin orchestrée" (faute + positionnement flou) | `components/sections/Hero.tsx` |
| Carte KPI flottante "Coûts opérationnels −35% sur 24 mois" | `components/sections/Hero.tsx` |
| Badge "12 robots déployés ce trimestre" (chiffre non vérifiable) | `components/sections/Hero.tsx` |
| Carrousel faux logos clients (Groupe CHR National, Chaîne Hôtelière 3*, etc.) | `components/sections/Proof.tsx` |
| Téléphone fictif "+33 1 00 00 00 00" | `components/layout/Footer.tsx`, `app/contact/page.tsx` |
| Ligne "SIRET XXX" | `components/layout/Footer.tsx` |
| Liens orphelins `/solutions#integration`, `/solutions#multimarques`, etc. | `components/layout/Footer.tsx` |
| Image AI-générée (ChatGPT Image Apr 17...) en arrière-plan footer | `components/layout/Footer.tsx` |
| Label "PROPRIÉTÉ EXCLUSIVE ELIO" sur l'intégration SI | `components/sections/BentoOffer.tsx` |
| Formulation "ROI immédiat sur les coûts de main d'œuvre" | `components/sections/Sectors.tsx` |
| Texte "Espace photo" visible en production | `components/sections/Sectors.tsx` |

### Réécrit
- **H1 home** → "L'intégrateur multi-marques de robots de service, avec le SAV en France."
- **Sous-titre hero** → "Elio sélectionne, intègre et exploite les robots adaptés à vos opérations..."
- **CTA principal** → "Planifier un échange" (cohérent partout)
- **Badges hero** → "SAV France / Ingénieurs francophones" + "Multi-marques, indépendant"
- **BentoOffer** → "NOTRE CŒUR DE MÉTIER"
- **Email** → `contact@elio-robot.fr` dans footer et page contact
- **Footer** → colonne Solutions supprimée, remplacée par navigation réelle (Approche, Financement, Contact)
- **Image fond footer** → `/mascot.webp` (existante, fond transparent)
- **Domaine** → unifié `elio-robot.fr` dans `layout.tsx`, `sitemap.ts`, `robots.ts`

---

## BLOC 2 — Preuves & confiance

### Réécrit
- **Proof.tsx** → section "citation GHR" + "premiers déploiements" en section 2 (sous le hero)
  - Citation complète de François Gauthier, Président GHR
  - Badge "Premiers déploiements en cours auprès d'opérateurs en Île-de-France."
- **Partners.tsx** → titre mis à jour ("Multi-marques, par principe."), commentaires HTML pour logos fabricants
  - Marques : Pudu, Keenon, Gausium, OrionStar, Reeman, HikRobot
- **Testimonial.tsx** → vidé, remplacé par commentaire développeur (format attendu pour vrai client)

---

## BLOC 3 — Financement simplifié

### Supprimé (11 composants, ~1 000 lignes de JS CARSAT)
`CarsatHero`, `TmsContext`, `SubventionCards`, `BeforeAfterTable`, `CarsatProcess`,  
`CarsatCalculator`, `CaseStudy`, `CompetitorCompare`, `CarsatFaq`, `RoiCalculator`, `RoiCompareTable`

### Réécrit
- **`app/financement/page.tsx`** → page centrée sur RaaS (6 piliers) + leasing (tableau comparatif)
- Mention aides publiques : une seule phrase, sans nommer CARSAT, sans montants ni promesse
- Meta description mise à jour (plus de "CARSAT 50%")
- `app/page.tsx` : import `RoiCalculator` retiré

---

## BLOC 4 — Corrections éditoriales /utilisations

### Formulations "remplacement" corrigées
| Avant | Après |
|---|---|
| "Des sols propres. Sans recruter." | "Des sols propres, sans alourdir vos équipes." |
| "Le runner qui ne démissionne jamais." | "Le renfort qui absorbe vos pics de service." |
| "D'un étage à l'autre. Sans personne." | "D'un étage à l'autre, à toute heure." |
| Intro livraison ("pénurie de personnel") | "couvre les plages horaires difficiles à pourvoir, sans mobiliser vos équipes sur des trajets répétitifs" |

### Tirets longs (—) supprimés dans les phrases
- sous-titre hero utilisations, intro nettoyage (x2), blockquote GHR, intro livraison, intro accueil, note logistique, intro hygiène

### Marques non autorisées retirées
| Marque supprimée | Raison | Remplacé par |
|---|---|---|
| Savioke Relay 2 | Entreprise inactive | Keenon W3 / Pudu D7 |
| GEEK+ AMR | Hors liste autorisée | HIKROBOT AMR |
| COWA ROBOT, UVD ROBOTS | Hors liste autorisée | "En évaluation" (générique) |
| PADBOT X3 | Hors liste autorisée | OrionStar |

### EligibleBadge
- "ÉLIGIBLE CARSAT −50%" → "Disponible aujourd'hui" (vert, sans tooltip CARSAT, sans lien /financement)

---

## BLOC 5 — Placeholders images

### Créé
- **`components/ui/ImagePlaceholder.tsx`** : composant réutilisable (fond dégradé charte, grille, légende, icône)
- **`public/assets/images/README.md`** : registre de 15 emplacements (id, page, rôle, dimensions, ratio, alt, statut REMPLAÇABLE)
- Sectors.tsx : 4 cartes "Espace photo" → `ImagePlaceholder` avec alt descriptifs et `src` stables

### Emplacements à compléter (15 visuels)
Voir le registre complet : `/public/assets/images/README.md`

Priorités immédiates :
1. `hero.webp` (1200×900 px) — hero home
2. `usecase-nettoyage/service/livraison/accueil.webp` (800×450 px) — 4 cartes home
3. `logo-pudu/keenon/gausium/orionstar/reeman/hikrobot.webp` (160×60 px) — section Partners

---

## BLOC 6 — Conversion

### Créé
- **`lib/config.ts`** : constante `CALENDLY_URL` centralisée, actuellement `/contact`

**Pour brancher Calendly :**
1. Créer un événement sur calendly.com (ou HubSpot Meetings)
2. Copier le lien de partage
3. Remplacer la valeur dans `lib/config.ts`
4. Déployer

---

## BLOC 7 — SEO & fondations

### Ajouté
- Metadata `title` + `description` sur `/utilisations` et `/approche`
- `/app/blog/page.tsx` : structure blog prête, vide, convention éditoriale documentée
- `sitemap.ts` : `/blog` ajouté (changeFrequency: weekly)

---

## Variables à renseigner avant déploiement

| Variable | Emplacement | Valeur actuelle | À renseigner |
|---|---|---|---|
| `CALENDLY_URL` | `lib/config.ts` | `/contact` | Lien Calendly ou HubSpot Meetings |
| Email de contact | `components/layout/Footer.tsx`, `app/contact/page.tsx` | `contact@elio-robot.fr` | Confirmer si c'est la bonne adresse |
| SIRET | `components/layout/Footer.tsx` | *retiré* | Ajouter dès disponible |
| Téléphone | `components/layout/Footer.tsx`, `app/contact/page.tsx` | *retiré* | Ajouter dès disponible |
| Logos fabricants | `public/assets/images/` | *placeholders* | Voir README.md dans ce dossier |
| Visuels terrain | `public/assets/images/` | *placeholders* | Photos des premiers déploiements |
| Article de blog | `app/blog/page.tsx` | *vide* | Premier article au premier déploiement réel |
| Témoignage client | `components/sections/Testimonial.tsx` | *vide* | Format décrit en commentaire |

---

## Conflit de domaine signalé

Le code source original utilisait **`eliorobotics.fr`** (email, OG tags, canonical, sitemap).  
Le brief indique que le site est sur **`elio-robot.fr`**.

**Décision appliquée par défaut** : tout a été unifié sur `elio-robot.fr`.  
Si le vrai domaine mail est `eliorobotics.fr`, mettre à jour manuellement :
- `app/layout.tsx` (metadataBase, og:url)
- `app/sitemap.ts`
- `app/robots.ts`
- `components/layout/Footer.tsx` (email affiché)
- `app/contact/page.tsx` (email affiché)

---

## Décisions prises par défaut (à valider)

1. **Section témoignage** : retournée `null` jusqu'au premier vrai client. La structure de référence visuelle est dans l'historique git.
2. **"Premiers déploiements en Île-de-France"** : formulation sobre retenue, sans chiffre.
3. **UV-C hygiène** : marques COWA/UVD retirées (hors liste autorisée), section passée en "En évaluation" générique. Si Elio distribue un robot UV-C autorisé, ajouter son nom.
4. **Section logistique/AMR** : note de positionnement conservée ("intégrateur SI, pas revendeur hardware"), reformulation em dash corrigée.
5. **Tirets de section** (`01 — NETTOYAGE`) : conservés, car motif UI design cohérent dans tout le site, pas des phrases éditoriales.
6. **ROI nettoyage (135 000€ / StrongPoint)** : conservé comme "cas documenté" car il s'agit d'une référence publiée (Gausium + StrongPoint). À supprimer si non vérifiable par l'équipe.

---

*Refonte réalisée en 7 commits atomiques le 27 mai 2026.*
