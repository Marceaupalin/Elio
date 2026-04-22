"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { Button } from "@/components/ui/Button";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-elio-cream/80 backdrop-blur-md border-b border-elio-border py-4" : "bg-transparent py-6"
        }`}
    >
      <Container className="flex items-center justify-between">
        <Link href="/" className="relative z-50">
          <Image
            src="/logo-elio.png"
            alt="Elio Robotics Logo"
            width={180}
            height={60}
            className="h-14 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {/* <Link href="/solutions" className="text-sm font-medium text-elio-text-muted hover:text-elio-coral transition-colors">
            Solutions
          </Link>*/}
          <Link href="/utilisations" className="text-sm font-medium text-elio-text-muted hover:text-elio-coral transition-colors">
            Utilisations
          </Link>
          <Link href="/financement" className="text-sm font-medium text-elio-text-muted hover:text-elio-coral transition-colors">
            Financement
          </Link>
          <Link href="/approche" className="text-sm font-medium text-elio-text-muted hover:text-elio-coral transition-colors">
            Notre Approche
          </Link>
          <Button asChild size="sm">
            <Link href="/contact">Planifier un échange</Link>
          </Button>
        </nav>

        <button
          className="md:hidden relative z-50 text-elio-text"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </Container>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-elio-cream flex flex-col pt-24 px-6 md:hidden">
          <nav className="flex flex-col gap-6 text-2xl font-serif text-elio-ink">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>Accueil</Link>
            {/*<Link href="/solutions" onClick={() => setMobileMenuOpen(false)}>Solutions</Link>*/}
            <Link href="/utilisations" onClick={() => setMobileMenuOpen(false)}>Utilisations</Link>
            <Link href="/financement" onClick={() => setMobileMenuOpen(false)}>Financement</Link>
            <Link href="/approche" onClick={() => setMobileMenuOpen(false)}>Notre Approche</Link>
          </nav>
          <div className="mt-12">
            <Button asChild className="w-full">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Planifier un échange</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
