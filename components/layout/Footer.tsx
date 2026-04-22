import Link from "next/link";
import { Container } from "./Container";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-elio-ink relative overflow-hidden text-white pt-20 pb-8">
      {/* Background Mascot Vector */}
      <div className="absolute -bottom-24 -right-12 opacity-5 pointer-events-none w-96 h-96">
        <Image
          src="/ChatGPT Image Apr 17, 2026, 12_52_24 PM.png"
          alt=""
          fill
          className="object-contain grayscale"
        />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
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
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-elio-text-soft mb-6">Solutions</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/solutions#integration" className="text-white/80 hover:text-white transition-colors text-sm">Intégration SI</Link></li>
              <li><Link href="/solutions#multimarques" className="text-white/80 hover:text-white transition-colors text-sm">Multi-marques</Link></li>
              <li><Link href="/solutions#raas" className="text-white/80 hover:text-white transition-colors text-sm">Robot-as-a-Service</Link></li>
              <li><Link href="/financement" className="text-white/80 hover:text-white transition-colors text-sm font-medium text-elio-coral">Financement CARSAT</Link></li>
              <li><Link href="/solutions#data" className="text-white/80 hover:text-white transition-colors text-sm">Data & Supervision</Link></li>
            </ul>
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
              <li><a href="mailto:contact@eliorobotics.fr" className="hover:text-white transition-colors">contact@eliorobotics.fr</a></li>
              <li>+33 1 00 00 00 00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-white/50 tracking-wider">
          <p>© 2026 ELIO ROBOTICS · SIRET XXX</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">MENTIONS LÉGALES</Link>
            <Link href="/confidentialite" className="hover:text-white transition-colors">POLITIQUE DE CONFIDENTIALITÉ</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
