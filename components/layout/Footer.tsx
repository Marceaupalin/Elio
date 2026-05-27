import Link from "next/link";
import { Container } from "./Container";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-elio-ink relative overflow-hidden text-white pt-20 pb-8">
      {/* Decorative background mascot */}
      <div className="absolute -bottom-24 -right-12 opacity-5 pointer-events-none w-96 h-96">
        <Image
          src="/mascot.webp"
          alt=""
          fill
          className="object-contain grayscale"
        />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <Image
                src="/logo_elio_blanc.png"
                alt="Elio Robotics"
                width={180}
                height={60}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-[260px]">
              Intégrateur multi-marques de robots de service B2B, avec le SAV en France.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-elio-text-soft mb-6">Utilisations</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/utilisations#nettoyage" className="text-white/80 hover:text-white transition-colors text-sm">Nettoyage</Link></li>
              <li><Link href="/utilisations#service" className="text-white/80 hover:text-white transition-colors text-sm">Service en salle</Link></li>
              <li><Link href="/utilisations#livraison" className="text-white/80 hover:text-white transition-colors text-sm">Livraison interne</Link></li>
              <li><Link href="/utilisations#accueil" className="text-white/80 hover:text-white transition-colors text-sm">Accueil & Orientation</Link></li>
              <li><Link href="/utilisations#logistique" className="text-white/80 hover:text-white transition-colors text-sm">Logistique</Link></li>
              <li><Link href="/utilisations#hygiene" className="text-white/80 hover:text-white transition-colors text-sm">Hygiène & Désinfection</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-elio-text-soft mb-6">Contact</h4>
            <ul className="flex flex-col gap-3 text-white/80 text-sm">
              <li>Paris, France</li>
              <li><a href="mailto:contact@elio-robot.fr" className="hover:text-white transition-colors">contact@elio-robot.fr</a></li>
              <li className="pt-3 flex flex-col gap-2">
                <Link href="/approche" className="hover:text-white transition-colors">Notre approche</Link>
                <Link href="/financement" className="hover:text-white transition-colors">Financement</Link>
                <Link href="/contact" className="hover:text-white transition-colors font-medium text-elio-coral hover:text-elio-coral-soft">Planifier un échange</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-white/50 tracking-wider">
          <p>© 2026 ELIO ROBOTICS</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">MENTIONS LÉGALES</Link>
            <Link href="/confidentialite" className="hover:text-white transition-colors">POLITIQUE DE CONFIDENTIALITÉ</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
