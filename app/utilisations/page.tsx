import { UseCaseHero } from "@/components/sections/UseCaseHero";
import { AnchorPills } from "@/components/ui/AnchorPills";
import { UseCaseBlock } from "@/components/sections/UseCaseBlock";
import { SectorPills } from "@/components/sections/SectorPills";
import { UseCaseMatrix } from "@/components/sections/UseCaseMatrix";
import { EligibleBadge } from "@/components/ui/EligibleBadge";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import {
  ArrowUpRight,
  Maximize,
  Layers,
  Droplets,
  ArrowRight,
  ArrowLeft,
  Tablet,
  Calendar,
  Building2,
  Pill,
  FileText,
  DoorOpen,
  Navigation,
  Warehouse,
  Box,
  ArrowRightLeft,
  Zap,
  Eye
} from "lucide-react";

export const metadata = {
  title: "Utilisations | Elio Robotics",
  description:
    "Nettoyage, service en salle, livraison interne, accueil, logistique, hygiène : découvrez les cas d'usage de la robotique de service B2B avec Elio, intégrateur multi-marques.",
};

export default function UtilisationsPage() {
  const navItems = [
    { id: "nettoyage", label: "Nettoyage" },
    { id: "service", label: "Service en salle" },
    { id: "livraison", label: "Livraison interne" },
    { id: "accueil", label: "Accueil" },
    { id: "logistique", label: "Logistique" },
    { id: "hygiene", label: "Hygiène" },
  ];

  return (
    <main className="bg-elio-cream min-h-screen">
      <UseCaseHero
        label="NOS UTILISATIONS"
        title={<>Un robot par besoin. <br /><span className="italic text-elio-coral">Une solution sur mesure</span>.</>}
        subtitle="Nettoyer, servir, livrer, accueillir, transporter, désinfecter : chaque cas d'usage a sa solution, son ROI, ses robots adaptés. Trouvez le vôtre."
      />

      <AnchorPills items={navItems} />

      {/* SECTION 1 - NETTOYAGE */}
      <UseCaseBlock
        id="nettoyage"
        number="01 — NETTOYAGE"
        icon="Sparkles"
        title={<>Des sols propres, <span className="italic text-elio-coral">sans alourdir vos équipes</span>.</>}
        intro="Le nettoyage professionnel pèse 12 milliards d'euros en France. 50 000 postes sont vacants, le turnover dépasse 35%. Les robots autonomes couvrent 1 500 m² par heure (six fois plus qu'un agent de nettoyage), fonctionnent 24h/7, et consomment 80% d'eau en moins."
        background="cream"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Reveal className="md:col-span-2 bg-elio-ink text-white p-10 rounded-[32px] flex flex-col justify-between">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-elio-coral mb-4">LE ROI LE PLUS DOCUMENTÉ DU MARCHÉ</div>
              <div className="font-serif text-[64px] text-elio-coral leading-none mb-4">135 000 €</div>
              <p className="text-xl text-white/80 mb-6">économisés sur 5 ans (cas réel StrongPoint / Gausium)</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div>
                <div className="text-xs text-white/50 uppercase tracking-wider mb-1">Coût RaaS</div>
                <div className="font-medium">900 – 1 200 € / mois</div>
              </div>
              <div>
                <div className="text-xs text-white/50 uppercase tracking-wider mb-1">Performance</div>
                <div className="font-medium">1 500 m² / heure</div>
              </div>
              <div className="bg-elio-coral/20 border border-elio-coral/30 px-3 py-1 rounded text-[10px] font-bold text-elio-coral inline-flex items-center self-start uppercase tracking-tighter">
                ROI 4–8 MOIS
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative bg-elio-coral-wash p-8 rounded-[32px] flex flex-col">
            <EligibleBadge />
            <Maximize className="text-elio-coral mb-6" size={32} />
            <h3 className="font-serif text-2xl mb-4">Scrubber grandes surfaces</h3>
            <p className="text-[15px] text-elio-text-muted mb-8 leading-relaxed">
              Lobbies, aéroports, centres commerciaux, supermarchés. Autolaveuse autonome, auto-recharge station, 2 500 m² par tank.
            </p>
            <div className="mt-auto font-mono text-[10px] uppercase tracking-widest text-elio-coral font-bold">
              GAUSIUM SCRUBBER 50
            </div>
          </Reveal>

          <Reveal delay={0.2} className="relative bg-elio-sand p-8 rounded-[32px] flex flex-col">
            <EligibleBadge />
            <Layers className="text-elio-coral mb-6" size={32} />
            <h3 className="font-serif text-2xl mb-4">Multi-fonctions espaces denses</h3>
            <p className="text-[15px] text-elio-text-muted mb-8 leading-relaxed">
              Aspiration + lavage + essuyage + séchage en un passage. EHPAD, bureaux, hôtels. Format compact pour couloirs étroits.
            </p>
            <div className="mt-auto font-mono text-[10px] uppercase tracking-widest text-elio-coral font-bold">
              GAUSIUM PHANTAS 1.3 · OMNIE
            </div>
          </Reveal>

          <Reveal delay={0.3} className="bg-elio-ink/5 border border-elio-border p-8 rounded-[32px] flex flex-col">
            <Droplets className="text-elio-coral mb-6" size={32} />
            <h3 className="font-serif text-2xl mb-4">Sanitaires autonomes</h3>
            <p className="text-[15px] text-elio-text-muted mb-8 leading-relaxed">
              La tâche la plus impopulaire, automatisée. Nettoyage WC autonome. Argument EHPAD très fort (normes hygiène renforcées).
            </p>
            <div className="mt-auto inline-flex px-3 py-1 bg-elio-coral text-white rounded text-[10px] font-bold uppercase tracking-widest w-fit">
              EN ÉVALUATION
            </div>
          </Reveal>
        </div>
        <SectorPills sectors={[
          { icon: "Hotel", label: "Hôtels" },
          { icon: "Hospital", label: "🏥 EHPAD" },
          { icon: "Plane", label: "Aéroports" },
          { icon: "ShoppingBag", label: "Grande distribution" },
          { icon: "Building", label: "Bureaux" },
          { icon: "Briefcase", label: "Facility managers" },
        ]} />
      </UseCaseBlock>

      {/* SECTION 2 - SERVICE EN SALLE */}
      <UseCaseBlock
        id="service"
        number="02 — SERVICE EN SALLE"
        icon="UtensilsCrossed"
        title={<>Le renfort qui absorbe <br /><span className="italic text-elio-coral">vos pics de service</span>.</>}
        intro="75% de turnover annuel sur les postes de runner en restauration. Le coût d'un runner est de 27 000€/an charges incluses. Un robot serveur est rentabilisé en 5 à 7 mois, fonctionne 15 heures par jour, 7 jours sur 7, et absorbe les pics saisonniers sans recrutement en urgence."
        background="ink"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 space-y-4">
            {[
              { icon: ArrowRight, title: "Livraison en salle", desc: "Le robot apporte les plats de la cuisine aux tables. Navigation autonome entre les clients, même en rush. Jusqu'à 400 plats/jour.", model: "KEENON T9 PRO · ORIONSTAR LUCKIBOT PRO", eligible: true },
              { icon: ArrowLeft, title: "Débarrassage", desc: "Collecte des assiettes sales en buffet ou salle. Retour automatique en plonge. Complémentaire au robot serveur.", model: "KEENON W3", eligible: true },
              { icon: Tablet, title: "Accueil & prise de commande", desc: "Écran intégré, menu digital, orientation des clients. Adapté lobbies de restaurant, fast-food, food-court.", model: "KETTYBOT (KEENON)", eligible: false }
            ].map((card, i) => (
              <Reveal key={i} delay={i * 0.1} className="relative bg-elio-cream text-elio-ink p-8 rounded-[24px] flex gap-6 items-start">
                {card.eligible && <EligibleBadge />}
                <div className="p-3 bg-elio-coral/10 rounded-xl">
                  <card.icon size={24} className="text-elio-coral" />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">{card.title}</h3>
                  <p className="text-[15px] text-elio-text-muted mb-4 leading-relaxed">{card.desc}</p>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-elio-coral font-bold">{card.model}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3} className="lg:col-span-5 bg-elio-coral-wash text-elio-ink p-10 rounded-[32px] flex flex-col">
            <Calendar className="text-elio-coral mb-8" size={40} />
            <h3 className="font-serif text-3xl mb-6">La saisonnalité, c&apos;est votre enjeu</h3>
            <p className="text-[17px] text-elio-text-muted mb-8 leading-relaxed">
              Le CHR fonctionne par pics. Week-ends, saisons touristiques, fêtes. Le nombre d&apos;employés peut varier du simple au triple. Le robot est votre variable d&apos;ajustement : RaaS activé en haute saison, ajusté hors pointe.
            </p>
            <blockquote className="italic text-elio-text-soft text-sm mb-12 border-l-2 border-elio-coral pl-6">
              &quot;Le robot doit être un complément du service, pas un remplacement.&quot; (François Gauthier, Président GHR)
            </blockquote>
            <div className="mt-auto">
              <div className="font-serif text-[56px] text-elio-coral leading-none mb-2">57,4%</div>
              <p className="text-xs font-mono uppercase tracking-widest text-elio-text-soft">des embauches réputées difficiles en CHR (2026)</p>
            </div>
          </Reveal>
        </div>
        <SectorPills sectors={[
          { icon: "Utensils", label: "Restaurants" },
          { icon: "Hotel", label: "Hôtels avec restaurant" },
          { icon: "Coffee", label: "Fast-food & food-courts" },
          { icon: "Users", label: "Restauration collective" },
          { icon: "HeartPulse", label: "EHPAD" },
        ]} />
      </UseCaseBlock>

      {/* SECTION 3 - LIVRAISON INTERNE */}
      <UseCaseBlock
        id="livraison"
        number="03 — LIVRAISON INTERNE"
        icon="Package"
        title={<>D&apos;un étage à l&apos;autre, <span className="italic text-elio-coral">à toute heure</span>.</>}
        intro="Room service de nuit, distribution de médicaments, transport de linge entre étages : le robot prend l'ascenseur seul, livre au bon endroit, et revient à sa station. Il couvre les plages horaires difficiles à pourvoir, sans mobiliser vos équipes sur des trajets répétitifs."
        background="cream"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Reveal className="relative bg-elio-sand p-8 rounded-[32px] flex flex-col">
            <EligibleBadge />
            <Building2 className="text-elio-coral mb-6" size={32} />
            <h3 className="font-serif text-2xl mb-4">Room service hôtelier</h3>
            <p className="text-[15px] text-elio-text-muted mb-8 leading-relaxed">
              Livraison en chambre 24h/7. Hôtels 80+ chambres. Le robot gère les ascenseurs de manière autonome. ROI en 4 à 6 mois face au coût d&apos;un employé de nuit.
            </p>
            <div className="mt-auto flex flex-col gap-4">
              <div className="font-mono text-[10px] uppercase tracking-widest text-elio-coral font-bold">KEENON W3 · PUDU D7</div>
              <div className="px-3 py-1 bg-elio-coral/10 border border-elio-coral/30 text-elio-coral rounded text-[10px] font-bold uppercase w-fit">ROI 4–6 MOIS</div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative bg-elio-coral-wash p-8 rounded-[32px] flex flex-col">
            <EligibleBadge />
            <Pill className="text-elio-coral mb-6" size={32} />
            <h3 className="font-serif text-2xl mb-4">Transport médical</h3>
            <p className="text-[15px] text-elio-text-muted mb-8 leading-relaxed">
              Médicaments, repas, prélèvements, linge. Inter-étages sans aide humaine. Fonctionne la nuit sans personnel soignant mobilisé.
            </p>
            <div className="mt-auto font-mono text-[10px] uppercase tracking-widest text-elio-coral font-bold">
              KEENON M1 · PUDU D7
            </div>
          </Reveal>

          <Reveal delay={0.2} className="bg-elio-ink text-white p-8 rounded-[32px] flex flex-col">
            <FileText className="text-elio-coral mb-6" size={32} />
            <h3 className="font-serif text-2xl mb-4">Courrier & documents</h3>
            <p className="text-[15px] text-white/70 mb-8 leading-relaxed">
              Bureaux multi-étages, résidences services, cliniques. Transport sécurisé de documents entre services. Cabines fermées à clé.
            </p>
            <div className="mt-auto font-mono text-[10px] uppercase tracking-widest text-elio-coral font-bold">
              KEENON W3
            </div>
          </Reveal>
        </div>
        <SectorPills sectors={[
          { icon: "Building2", label: "Hôtels 3–5★" },
          { icon: "Hospital", label: "Hôpitaux" },
          { icon: "HeartPulse", label: "EHPAD" },
          { icon: "Building", label: "Bureaux & résidences" },
        ]} />
      </UseCaseBlock>

      {/* SECTION 4 - ACCUEIL & ORIENTATION */}
      <UseCaseBlock
        id="accueil"
        number="04 — ACCUEIL & ORIENTATION"
        icon="MessageSquare"
        title={<>Le premier contact. <br /><span className="italic text-elio-coral">Toujours disponible</span>.</>}
        intro="Orientation, information, guidage en magasin ou en lobby : le robot d'accueil libère vos équipes pour les interactions à haute valeur ajoutée. Multilingue, il traite les demandes standards pendant que votre personnel se concentre sur le conseil et la vente."
        background="sand"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Reveal className="bg-white border border-elio-border p-10 rounded-[32px] flex flex-col">
            <DoorOpen className="text-elio-coral mb-8" size={40} />
            <h3 className="font-serif text-3xl mb-6">Lobby & entrée</h3>
            <p className="text-[17px] text-elio-text-muted mb-8 leading-relaxed">
              Hôtels, centres commerciaux, musées, cinémas, concessions auto. Le robot accueille, oriente vers le bon interlocuteur, affiche des informations sur écran, et parle plusieurs langues.
            </p>
            <div className="flex flex-col gap-4 mt-auto">
              <div className="font-mono text-[10px] uppercase tracking-widest text-elio-coral font-bold">KETTYBOT (KEENON) · ORIONSTAR</div>
              <p className="text-xs text-elio-text-soft italic">ROI indirect : image de marque, réduction du temps d&apos;attente, satisfaction client mesurable.</p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="bg-elio-ink text-white p-10 rounded-[32px] flex flex-col">
            <Navigation className="text-elio-coral mb-8" size={40} />
            <h3 className="font-serif text-3xl mb-6">Guidage en magasin</h3>
            <p className="text-[17px] text-white/70 mb-8 leading-relaxed">
              Le client demande un rayon, le robot l&apos;y conduit physiquement. Adapté aux grandes surfaces, pharmacies, magasins spécialisés. Réduit les sollicitations du personnel de vente.
            </p>
            <div className="mt-auto inline-flex px-3 py-1 bg-white/10 border border-white/20 text-white rounded text-[10px] font-bold uppercase tracking-widest w-fit">
              EN ÉVALUATION (HORIZON 12 À 24 MOIS)
            </div>
          </Reveal>
        </div>
        <SectorPills sectors={[
          { icon: "Hotel", label: "Lobbies hôtels" },
          { icon: "ShoppingBag", label: "Centres commerciaux" },
          { icon: "Film", label: "Cinémas" },
          { icon: "Library", label: "Musées" },
          { icon: "Landmark", label: "Banques" },
          { icon: "Hospital", label: "Hôpitaux" },
        ]} />
      </UseCaseBlock>

      {/* SECTION 5 - LOGISTIQUE */}
      <UseCaseBlock
        id="logistique"
        number="05 — LOGISTIQUE & TRANSPORT"
        icon="Truck"
        title={<>Déplacer, stocker, trier. <br /><span className="italic text-elio-coral">À l&apos;échelle</span>.</>}
        intro="Les AMR (robots mobiles autonomes) transforment les entrepôts : 600 kg de charge utile, navigation naturelle, gestion de flotte intégrée. Le marché mondial des AGV/AMR passera de 6 à 22 milliards de dollars d'ici 2030. En France, Elio se positionne comme intégrateur WMS/ERP par-dessus la couche hardware."
        background="ink"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <Reveal className="bg-white text-elio-ink p-8 rounded-[32px] flex flex-col">
            <Warehouse className="text-elio-coral mb-6" size={32} />
            <h3 className="font-serif text-2xl mb-4">AMR entrepôt</h3>
            <p className="text-[15px] text-elio-text-muted mb-8 leading-relaxed">
              Navigation SLAM naturelle, 600 kg payload, fleet management intégré. Pour entrepôts 3PL, agro-alimentaire, pharma.
            </p>
            <div className="mt-auto flex flex-col gap-4">
              <div className="font-mono text-[10px] uppercase tracking-widest text-elio-coral font-bold">HIKROBOT AMR</div>
              <div className="px-3 py-1 bg-elio-success/10 border border-elio-success/30 text-elio-success rounded text-[10px] font-bold uppercase w-fit tracking-wider">INTÉGRATION WMS/ERP</div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="bg-elio-sand text-elio-ink p-8 rounded-[32px] flex flex-col">
            <Box className="text-elio-coral mb-6" size={32} />
            <h3 className="font-serif text-2xl mb-4">Micro-fulfillment</h3>
            <p className="text-[15px] text-elio-text-muted mb-8 leading-relaxed">
              Petits entrepôts &lt; 2 000 m². Préparation de commandes e-commerce, pharmacie, click-and-collect.
            </p>
            <div className="mt-auto flex flex-col gap-4">
              <div className="font-mono text-[10px] uppercase tracking-widest text-elio-coral font-bold">ORIONSTAR CARRYBOT</div>
              <div className="px-3 py-1 bg-elio-coral/10 border border-elio-coral/30 text-elio-coral rounded text-[10px] font-bold uppercase w-fit tracking-wider">NICHE, CRÉNEAU UNIQUE</div>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="bg-elio-coral-wash text-elio-ink p-8 rounded-[32px] flex flex-col">
            <ArrowRightLeft className="text-elio-coral mb-6" size={32} />
            <h3 className="font-serif text-2xl mb-4">Transport intra-site</h3>
            <p className="text-[15px] text-elio-text-muted mb-8 leading-relaxed">
              Charges lourdes entre zones de production, cuisines centrales, blanchisseries. 300 kg, 24h/7 continu.
            </p>
            <div className="mt-auto font-mono text-[10px] uppercase tracking-widest text-elio-coral font-bold">
              PUDU T300 · HIKROBOT
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.3} className="bg-white/5 border border-white/10 p-10 rounded-[32px]">
          <h4 className="font-mono text-[11px] uppercase tracking-widest text-elio-coral mb-4">NOTE DE POSITIONNEMENT</h4>
          <p className="text-lg text-white/90 leading-relaxed max-w-4xl">
            Sur ce segment, Elio ne se positionne pas en revendeur de hardware AMR : le marché est dominé par des acteurs industriels établis. Notre valeur ajoutée : l&apos;intégration SI par-dessus la couche robot. Cartographie des sites, connexion WMS/ERP, formation, dashboard de supervision.
          </p>
        </Reveal>
        <SectorPills sectors={[
          { icon: "Factory", label: "Entrepôts & 3PL" },
          { icon: "Utensils", label: "Cuisines centrales" },
          { icon: "WashingMachine", label: "Blanchisseries" },
          { icon: "ShoppingBag", label: "E-commerce" },
          { icon: "FlaskConical", label: "Pharma" },
        ]} />
      </UseCaseBlock>

      {/* SECTION 6 - HYGIENE */}
      <UseCaseBlock
        id="hygiene"
        number="06 — HYGIÈNE & DÉSINFECTION"
        icon="Shield"
        title={<>Le niveau d&apos;hygiène que <br /><span className="italic text-elio-coral">l&apos;humain ne peut pas maintenir</span>.</>}
        intro="Les infections nosocomiales coûtent 7 milliards d'euros par an à l'hôpital français. La réglementation RABC pousse vers la désinfection renforcée. Les robots UV-C éradiquent 99% des pathogènes en 15 à 20 minutes par pièce, de nuit, sans mobiliser de personnel."
        background="cream"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Reveal className="relative md:col-span-2 bg-elio-ink text-white p-10 rounded-[32px] flex flex-col justify-between">
            <EligibleBadge className="!text-white" />
            <div>
              <div className="flex justify-between items-start mb-12">
                <Zap className="text-elio-coral" size={48} />
                <div className="px-4 py-1.5 bg-elio-coral/10 border border-elio-coral/30 text-elio-coral rounded text-[10px] font-bold uppercase tracking-widest">
                  7 Md€ / AN D&apos;INFECTIONS NOSOCOMIALES
                </div>
              </div>
              <div className="font-serif text-[84px] text-elio-coral leading-none mb-6">99%</div>
              <h3 className="text-3xl font-serif mb-6">Désinfection UV-C autonome</h3>
              <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
                Massivement déployé en Asie depuis le COVID. Aucun intégrateur RaaS en France. Éradiquent virus et bactéries en 15–20 min par pièce.
              </p>
            </div>
            <div className="pt-8 border-t border-white/10 flex flex-wrap gap-x-12 gap-y-6 mt-12">
              <div className="mt-auto inline-flex px-3 py-1 bg-elio-coral/10 border border-elio-coral/30 text-elio-coral rounded text-[10px] font-bold uppercase tracking-widest w-fit">EN ÉVALUATION</div>
            </div>
          </Reveal>

          <div className="space-y-4">
            <Reveal delay={0.1} className="bg-elio-coral-wash p-8 rounded-[32px] h-full flex flex-col">
              <Droplets className="text-elio-coral mb-6" size={32} />
              <h3 className="font-serif text-2xl mb-4">Sanitaires autonomes</h3>
              <p className="text-[15px] text-elio-text-muted mb-8 leading-relaxed">
                Nettoyage WC entièrement robotisé. Tâche la plus coûteuse en turnover. Production de masse démarrée Q1 2026.
              </p>
              <div className="mt-auto inline-flex px-3 py-1 bg-elio-coral text-white rounded text-[10px] font-bold uppercase tracking-widest w-fit">
                EN ÉVALUATION
              </div>
            </Reveal>

            <Reveal delay={0.2} className="bg-elio-sand p-8 rounded-[32px] h-full flex flex-col">
              <Eye className="text-elio-coral mb-6" size={32} />
              <h3 className="font-serif text-2xl mb-4">Surveillance propreté</h3>
              <p className="text-[15px] text-elio-text-muted mb-8 leading-relaxed">
                Capteurs intégrés : détection zones souillées, alertes temps réel, rapports de conformité hygiène.
              </p>
              <div className="mt-auto font-mono text-[10px] uppercase tracking-widest text-elio-coral font-bold">
                INTÉGRÉ AUX SOLUTIONS GAUSIUM
              </div>
            </Reveal>
          </div>
        </div>
        <SectorPills sectors={[
          { icon: "Hospital", label: "Hôpitaux" },
          { icon: "HeartPulse", label: "EHPAD & cliniques" },
          { icon: "Plane", label: "Aéroports" },
          { icon: "Hotel", label: "Hôtels" },
          { icon: "GraduationCap", label: "Écoles & crèches" },
        ]} />
      </UseCaseBlock>

      <UseCaseMatrix />

      {/* CTA SECTION */}
      <section className="py-32 bg-elio-coral-wash text-center">
        <Container>
          <Reveal>
            <h2 className="text-[clamp(40px,6vw,80px)] font-serif leading-[1.1] mb-8 text-elio-ink max-w-4xl mx-auto">
              Vous voyez votre besoin ici ? <br /><span className="italic text-elio-coral">Parlons-en</span>.
            </h2>
            <p className="text-[20px] text-elio-text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
              Un diagnostic de 1 semaine suffit pour qualifier votre cas d&apos;usage et calculer le ROI projeté.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg">
                <Link href="/contact" className="gap-2">
                  Demander un diagnostic
                  <ArrowUpRight size={22} />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="rounded-full px-10 h-14 text-lg text-elio-ink">
                <Link href="/approche">
                  Découvrir notre approche
                </Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
