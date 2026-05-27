import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FirebaseAnalytics } from "@/components/FirebaseAnalytics";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const instrument = Instrument_Serif({ 
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument" 
});
const jetbrains = JetBrains_Mono({ 
  weight: ["500"],
  subsets: ["latin"],
  variable: "--font-jetbrains" 
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elio-robot.fr"),
  title: "Elio Robotics | Intégrateur multi-marques de robots de service",
  description:
    "Elio sélectionne, intègre et exploite les robots de service adaptés à vos opérations : hospitality, propreté, retail. Modèle RaaS, SAV France, intégration SI.",
  openGraph: {
    title: "Elio Robotics | L'intégrateur multi-marques de robots de service",
    description: "Intégrateur multi-marques de robots de service B2B, avec le SAV en France.",
    url: "https://elio-robot.fr",
    siteName: "Elio Robotics",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "elio-robot.fr",
    title: "Elio Robotics | Intégrateur multi-marques de robots de service",
    description: "Elio sélectionne, intègre et exploite les robots de service adaptés à vos opérations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${instrument.variable} ${jetbrains.variable} font-sans bg-elio-cream text-elio-text selection:bg-elio-coral selection:text-white`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FirebaseAnalytics />
      </body>
    </html>
  );
}
