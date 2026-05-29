"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { AlertCircle } from "lucide-react";

const formSchema = z.object({
  nom: z.string().min(2, "Nom requis"),
  entreprise: z.string().min(2, "Entreprise requise"),
  email: z.string().email("Email invalide"),
  telephone: z.string().optional(),
  secteur: z.string().min(1, "Veuillez choisir un secteur"),
  message: z.string().min(10, "Message trop court"),
  rgpd: z.boolean().refine((val) => val === true, {
    message: "Vous devez accepter la politique de confidentialité",
  }),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: data.nom,
          entreprise: data.entreprise,
          email: data.email,
          telephone: data.telephone || undefined,
          secteur: data.secteur,
          message: data.message,
        }),
      });

      if (res.ok) {
        setSuccess(true);
        reset();
      } else {
        const json = await res.json().catch(() => ({}));
        setServerError(
          json.error ?? "Une erreur est survenue. Merci de réessayer ou d'écrire directement à contact@elio-robot.fr"
        );
      }
    } catch {
      setServerError(
        "Impossible de joindre le serveur. Vérifiez votre connexion ou écrivez à contact@elio-robot.fr"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full h-12 px-4 rounded-xl border border-elio-border focus:border-elio-coral focus:ring-1 focus:ring-elio-coral outline-none transition-all bg-white";

  return (
    <div className="pt-32 pb-24 bg-elio-cream min-h-screen">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Colonne gauche — informations */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-elio-ink mb-8">
              Parlons de vos flux.
            </h1>
            <p className="text-lg text-elio-text-muted mb-12 max-w-md leading-relaxed">
              Vous avez un projet de robotisation ? Échangez avec l&apos;un de
              nos ingénieurs pour évaluer sa faisabilité et son ROI. 15 minutes
              suffisent.
            </p>

            <div className="flex flex-col gap-8">
              <div>
                <h3 className="font-mono text-[11px] uppercase tracking-widest text-elio-coral mb-2">
                  Email
                </h3>
                <a
                  href="mailto:contact@elio-robot.fr"
                  className="text-elio-ink font-medium hover:text-elio-coral transition-colors"
                >
                  contact@elio-robot.fr
                </a>
              </div>
              <div>
                <h3 className="font-mono text-[11px] uppercase tracking-widest text-elio-coral mb-2">
                  Bureaux
                </h3>
                <p className="text-elio-ink font-medium">Paris, France</p>
              </div>
              <div>
                <h3 className="font-mono text-[11px] uppercase tracking-widest text-elio-coral mb-2">
                  Délai de réponse
                </h3>
                <p className="text-elio-ink font-medium">Sous 24h ouvrées</p>
              </div>
            </div>
          </div>

          {/* Colonne droite — formulaire */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-elio-border">

            {success ? (
              /* État succès */
              <div className="flex flex-col items-center justify-center py-12 text-center h-full gap-4">
                <div className="w-16 h-16 bg-elio-success/10 text-elio-success rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-serif mb-2">Demande envoyée</h3>
                  <p className="text-elio-text-muted">
                    Nous vous recontacterons sous 24h ouvrées.
                  </p>
                </div>
                <Button
                  variant="ghost"
                  className="mt-4 text-elio-ink"
                  onClick={() => { setSuccess(false); setServerError(null); }}
                >
                  Envoyer une autre demande
                </Button>
              </div>
            ) : (
              /* Formulaire */
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-elio-ink mb-2">
                      Nom complet <span className="text-elio-coral">*</span>
                    </label>
                    <input
                      {...register("nom")}
                      autoComplete="name"
                      className={inputClass}
                      aria-invalid={!!errors.nom}
                    />
                    {errors.nom && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.nom.message}</span>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-elio-ink mb-2">
                      Entreprise <span className="text-elio-coral">*</span>
                    </label>
                    <input
                      {...register("entreprise")}
                      autoComplete="organization"
                      className={inputClass}
                      aria-invalid={!!errors.entreprise}
                    />
                    {errors.entreprise && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.entreprise.message}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-elio-ink mb-2">
                      Email professionnel <span className="text-elio-coral">*</span>
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      autoComplete="email"
                      className={inputClass}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.email.message}</span>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-elio-ink mb-2">
                      Téléphone{" "}
                      <span className="text-elio-text-soft font-normal">(optionnel)</span>
                    </label>
                    <input
                      type="tel"
                      {...register("telephone")}
                      autoComplete="tel"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-elio-ink mb-2">
                    Secteur d&apos;activité <span className="text-elio-coral">*</span>
                  </label>
                  <select
                    {...register("secteur")}
                    className={inputClass}
                    aria-invalid={!!errors.secteur}
                  >
                    <option value="">Sélectionnez un secteur...</option>
                    <option value="chr">CHR (Restauration / Hôtellerie)</option>
                    <option value="facility">Facility Management / Propreté</option>
                    <option value="retail">Retail / Grande distribution</option>
                    <option value="sante">Santé / Médico-social</option>
                    <option value="autre">Autre</option>
                  </select>
                  {errors.secteur && (
                    <span className="text-xs text-red-500 mt-1 block">{errors.secteur.message}</span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-elio-ink mb-2">
                    Votre message <span className="text-elio-coral">*</span>
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Décrivez votre contexte : secteur, surface ou volume concerné, contraintes spécifiques..."
                    className="w-full py-3 px-4 rounded-xl border border-elio-border focus:border-elio-coral focus:ring-1 focus:ring-elio-coral outline-none transition-all resize-none bg-white"
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <span className="text-xs text-red-500 mt-1 block">{errors.message.message}</span>
                  )}
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="rgpd"
                    {...register("rgpd")}
                    className="mt-1 w-4 h-4 rounded accent-elio-coral"
                  />
                  <label htmlFor="rgpd" className="text-sm text-elio-text-muted leading-relaxed">
                    J&apos;accepte que ces données soient utilisées pour le traitement de ma demande,
                    conformément à la{" "}
                    <a href="/confidentialite" className="text-elio-coral hover:underline">
                      politique de confidentialité
                    </a>{" "}
                    d&apos;Elio Robotics.
                  </label>
                </div>
                {errors.rgpd && (
                  <span className="text-xs text-red-500 block -mt-2">{errors.rgpd.message}</span>
                )}

                {/* Erreur serveur */}
                {serverError && (
                  <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
                    <AlertCircle size={18} className="text-red-500 mt-0.5 shrink-0" />
                    <p className="text-sm text-red-700 leading-relaxed">{serverError}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Envoi en cours...
                    </span>
                  ) : (
                    "Envoyer la demande"
                  )}
                </Button>

              </form>
            )}
          </div>

        </div>
      </Container>
    </div>
  );
}
