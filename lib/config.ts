/**
 * Configuration globale Elio — variables à renseigner avant déploiement.
 * Une seule constante à mettre à jour pour changer le lien de prise de RDV
 * sur l'ensemble du site.
 *
 * Comment renseigner CALENDLY_URL :
 *   1. Créer un compte Calendly (ou HubSpot Meetings) et un type d'événement.
 *   2. Copier le lien de partage (ex: https://calendly.com/elio/30min).
 *   3. Remplacer la valeur ci-dessous.
 *   4. Déployer.
 *
 * Tant qu'il vaut "/contact", les CTA redirigent vers le formulaire de contact.
 */
export const CALENDLY_URL = "https://calendly.com/marceau-michaud-bot/30min";
