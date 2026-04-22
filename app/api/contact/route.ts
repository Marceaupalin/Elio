// API Route désactivée — le formulaire utilise Formspree en mode static export.
// Ce fichier est conservé pour ne pas casser l'historique git.
// Pour réactiver l'envoi email côté serveur, passer au plan Firebase Blaze
// et supprimer output: 'export' de next.config.mjs.

export async function GET() {
  return Response.json({ status: "static-export-mode" });
}
