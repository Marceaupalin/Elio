/** @type {import('next').NextConfig} */
const nextConfig = {
  // Mode "output: export" retiré → active les API routes Next.js (nécessaire pour l'envoi email).
  // Déployer sur Vercel (gratuit) — Firebase Hosting seul ne supporte pas les routes serveur.
  images: {
    unoptimized: true, // conserver jusqu'au dépôt des vrais visuels dans /assets/images/
  },
};

export default nextConfig;
