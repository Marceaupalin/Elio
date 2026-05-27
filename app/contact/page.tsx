"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  nom: z.string().min(2, "Nom requis"),
  entreprise: z.string().min(2, "Entreprise requise"),
  email: z.string().email("Email invalide"),
  telephone: z.string().optional(),
  secteur: z.string().min(1, "Veuillez choisir un secteur"),
  message: z.string().min(10, "Message trop court"),
  rgpd: z.boolean().refine(val => val === true, { message: "Vous devez accepter la politique de confidentialité" }),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  // ⚠️  Remplacez FORMSPREE_FORM_ID par votre ID réel (https://formspree.io)
  // Ex: https://formspree.io/f/xyzabcde
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/FORMSPREE_FORM_ID";

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: data.nom,
          entreprise: data.entreprise,
          email: data.email,
          telephone: data.telephone,
          secteur: data.secteur,
          message: data.message,
        }),
      });
      if (res.ok) {
        setSuccess(true);
        reset();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-elio-cream min-h-screen">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Info */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-elio-ink mb-8">
              Parlons de vos flux.
            </h1>
            <p className="text-lg text-elio-text-muted mb-12 max-w-md">
              Vous avez un projet de robotisation ? Échangez avec l&apos;un de nos ingénieurs pour évaluer sa faisabilité technique et son ROI.
            </p>
            
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="font-mono text-[11px] uppercase tracking-widest text-elio-coral mb-2">Email</h3>
                <a href="mailto:contact@elio-robot.fr" className="text-elio-ink font-medium hover:text-elio-coral transition-colors">contact@elio-robot.fr</a>
              </div>

              <div>
                <h3 className="font-mono text-[11px] uppercase tracking-widest text-elio-coral mb-2">Bureaux</h3>
                <p className="text-elio-ink font-medium">Paris, France</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-elio-border">
            {success ? (
              <div className="flex flex-col items-center justify-center py-12 text-center h-full">
                <div className="w-16 h-16 bg-elio-success/10 text-elio-success rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif mb-2">Demande envoyée</h3>
                <p className="text-elio-text-muted">Un expert vous recontactera sous 24h.</p>
                <Button className="mt-8" onClick={() => setSuccess(false)}>Nouvelle demande</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-elio-ink mb-2">Nom complet</label>
                    <input {...register("nom")} className="w-full h-12 px-4 rounded-xl border border-elio-border focus:border-elio-coral focus:ring-1 focus:ring-elio-coral outline-none transition-all" />
                    {errors.nom && <span className="text-xs text-red-500 mt-1">{errors.nom.message}</span>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-elio-ink mb-2">Entreprise</label>
                    <input {...register("entreprise")} className="w-full h-12 px-4 rounded-xl border border-elio-border focus:border-elio-coral focus:ring-1 focus:ring-elio-coral outline-none transition-all" />
                    {errors.entreprise && <span className="text-xs text-red-500 mt-1">{errors.entreprise.message}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-elio-ink mb-2">Email pro</label>
                    <input type="email" {...register("email")} className="w-full h-12 px-4 rounded-xl border border-elio-border focus:border-elio-coral focus:ring-1 focus:ring-elio-coral outline-none transition-all" />
                    {errors.email && <span className="text-xs text-red-500 mt-1">{errors.email.message}</span>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-elio-ink mb-2">Téléphone (optionnel)</label>
                    <input type="tel" {...register("telephone")} className="w-full h-12 px-4 rounded-xl border border-elio-border focus:border-elio-coral focus:ring-1 focus:ring-elio-coral outline-none transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-elio-ink mb-2">Secteur d&apos;activité</label>
                  <select {...register("secteur")} className="w-full h-12 px-4 rounded-xl border border-elio-border focus:border-elio-coral focus:ring-1 focus:ring-elio-coral outline-none transition-all bg-white">
                    <option value="">Sélectionnez un secteur...</option>
                    <option value="chr">CHR (Restauration / Hôtellerie)</option>
                    <option value="facility">Facility Management / Propreté</option>
                    <option value="retail">Retail / Grande distribution</option>
                    <option value="sante">Santé / Médico-social</option>
                    <option value="autre">Autre</option>
                  </select>
                  {errors.secteur && <span className="text-xs text-red-500 mt-1">{errors.secteur.message}</span>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-elio-ink mb-2">Votre message</label>
                  <textarea {...register("message")} rows={4} className="w-full py-3 px-4 rounded-xl border border-elio-border focus:border-elio-coral focus:ring-1 focus:ring-elio-coral outline-none transition-all resize-none" />
                  {errors.message && <span className="text-xs text-red-500 mt-1">{errors.message.message}</span>}
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" id="rgpd" {...register("rgpd")} className="mt-1 w-4 h-4 rounded text-elio-coral accent-elio-coral" />
                  <label htmlFor="rgpd" className="text-sm text-elio-text-muted">
                    J&apos;accepte que ces données soient stockées et traitées pour ma demande.
                  </label>
                </div>
                {errors.rgpd && <span className="text-xs text-red-500 block">{errors.rgpd.message}</span>}

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
                </Button>
              </form>
            )}
          </div>
          
        </div>
      </Container>
    </div>
  );
}
