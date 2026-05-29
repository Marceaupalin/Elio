import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

// Resend est instancié dans chaque handler pour éviter une erreur au build
// si RESEND_API_KEY n'est pas encore défini dans l'environnement de CI/CD.

// Adresse de réception — modifier dans les variables d'environnement si besoin.
const TO_EMAIL = process.env.CONTACT_EMAIL ?? "contact@elio-robot.fr";

// Adresse d'expédition :
//   - Sans domaine vérifié sur Resend : utilise "onboarding@resend.dev" (fonctionne en test)
//   - Avec domaine elio-robot.fr vérifié : utilise "noreply@elio-robot.fr" (production)
//   Configurer RESEND_FROM_EMAIL dans les variables d'environnement Vercel.
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ?? "Elio Robotics <onboarding@resend.dev>";

const SECTEUR_LABELS: Record<string, string> = {
  chr: "CHR (Restauration / Hôtellerie)",
  facility: "Facility Management / Propreté",
  retail: "Retail / Grande distribution",
  sante: "Santé / Médico-social",
  autre: "Autre",
};

function emailHtml(data: {
  nom: string;
  entreprise: string;
  email: string;
  telephone?: string;
  secteur: string;
  message: string;
}) {
  const { nom, entreprise, email, telephone, secteur, message } = data;
  const secteurLabel = SECTEUR_LABELS[secteur] ?? secteur;
  const messageHtml = message.replace(/\n/g, "<br>");

  return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Nouvelle demande Elio</title>
</head>
<body style="margin:0;padding:0;background:#FAF7F2;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#FAF7F2;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(30,42,66,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:#1E2A42;padding:28px 36px;">
              <p style="margin:0;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#D2694B;font-family:monospace;">
                ELIO ROBOTICS · FORMULAIRE CONTACT
              </p>
              <h1 style="margin:8px 0 0;font-size:20px;color:#ffffff;font-weight:600;">
                Nouvelle demande — ${nom}
              </h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 36px;">

              <!-- Champs -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom:20px;">
                    <p style="margin:0 0 4px;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#8A93A3;font-family:monospace;">NOM</p>
                    <p style="margin:0;font-size:16px;color:#1E2A42;font-weight:600;">${nom}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:20px;">
                    <p style="margin:0 0 4px;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#8A93A3;font-family:monospace;">ENTREPRISE</p>
                    <p style="margin:0;font-size:16px;color:#1E2A42;font-weight:600;">${entreprise}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:20px;">
                    <p style="margin:0 0 4px;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#8A93A3;font-family:monospace;">EMAIL</p>
                    <p style="margin:0;font-size:16px;">
                      <a href="mailto:${email}" style="color:#D2694B;text-decoration:none;font-weight:600;">${email}</a>
                    </p>
                  </td>
                </tr>
                ${
                  telephone
                    ? `<tr>
                  <td style="padding-bottom:20px;">
                    <p style="margin:0 0 4px;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#8A93A3;font-family:monospace;">TÉLÉPHONE</p>
                    <p style="margin:0;font-size:16px;color:#1E2A42;font-weight:600;">${telephone}</p>
                  </td>
                </tr>`
                    : ""
                }
                <tr>
                  <td style="padding-bottom:28px;">
                    <p style="margin:0 0 4px;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#8A93A3;font-family:monospace;">SECTEUR</p>
                    <p style="margin:0;font-size:14px;color:#ffffff;background:#1E2A42;display:inline-block;padding:4px 12px;border-radius:999px;font-weight:600;">${secteurLabel}</p>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <div style="background:#FAF7F2;border-left:3px solid #D2694B;border-radius:0 8px 8px 0;padding:20px 24px;">
                <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#8A93A3;font-family:monospace;">MESSAGE</p>
                <p style="margin:0;font-size:15px;color:#1E2A42;line-height:1.65;">${messageHtml}</p>
              </div>

              <!-- Répondre CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                <tr>
                  <td>
                    <a href="mailto:${email}?subject=Re: votre demande Elio Robotics"
                       style="display:inline-block;background:#D2694B;color:#ffffff;text-decoration:none;padding:12px 28px;border-radius:999px;font-size:14px;font-weight:600;letter-spacing:0.02em;">
                      Répondre à ${nom}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="border-top:1px solid #F2ECE2;padding:16px 36px;">
              <p style="margin:0;font-size:11px;color:#8A93A3;font-family:monospace;letter-spacing:0.05em;">
                Soumis via le formulaire de contact · elio-robot.fr
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nom, entreprise, email, telephone, secteur, message } = body;

    // Validation basique côté serveur
    if (!nom || !entreprise || !email || !secteur || !message) {
      return NextResponse.json(
        { error: "Champs requis manquants." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY manquante — configurer la variable d'environnement.");
      return NextResponse.json(
        { error: "Configuration email manquante." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `Nouvelle demande — ${nom} (${entreprise})`,
      html: emailHtml({ nom, entreprise, email, telephone, secteur, message }),
    });

    if (error) {
      console.error("Erreur Resend :", error);
      return NextResponse.json(
        { error: "L'email n'a pas pu être envoyé. Réessayez." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Erreur API contact :", err);
    return NextResponse.json(
      { error: "Erreur serveur inattendue." },
      { status: 500 }
    );
  }
}

// GET désactivé (pour éviter les scans automatiques)
export async function GET() {
  return NextResponse.json({ status: "ok" }, { status: 200 });
}
