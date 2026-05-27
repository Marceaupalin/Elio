"use client";

import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  label: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
  src?: string;
}

/**
 * Placeholder d'image digne : fond dégradé charte Elio, légende discrète,
 * dimensions fixes pour éviter les sauts de mise en page au remplacement.
 *
 * Dès qu'Elio dépose le vrai visuel sous le chemin `src`, il s'affiche
 * automatiquement à la place du placeholder (via onerror côté img).
 *
 * Convention de nommage des fichiers : /assets/images/<identifiant>.webp
 * Voir /public/assets/images/README.md pour le registre complet.
 */
export function ImagePlaceholder({
  label,
  alt,
  aspectRatio = "aspect-video",
  className = "",
  src,
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden ${aspectRatio} ${className}`}
      style={{
        background:
          "linear-gradient(135deg, #F2ECE2 0%, #FAF7F2 50%, #E6DFD3 100%)",
      }}
    >
      {/* Grille subtile en fond */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(30,42,66,0.06) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      {/* Contenu placeholder */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4">
        <ImageIcon
          size={28}
          className="text-elio-ink/15"
          strokeWidth={1}
          aria-hidden="true"
        />
        <span className="font-mono text-[10px] uppercase tracking-widest text-elio-ink/25 text-center leading-snug">
          {label}
        </span>
      </div>

      {/* Image réelle (invisible si absent du serveur) */}
      {src && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover opacity-0"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.opacity = "0";
          }}
          onLoad={(e) => {
            (e.currentTarget as HTMLImageElement).style.opacity = "1";
          }}
          style={{ transition: "opacity 0.3s" }}
        />
      )}
    </div>
  );
}
