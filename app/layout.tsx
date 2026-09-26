import type { Metadata, Viewport } from "next";
import "@fontsource/cormorant-garamond/300.css";
import "@fontsource/cormorant-garamond/300-italic.css";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/jost/300.css";
import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/Cart";

export const metadata: Metadata = {
  metadataBase: new URL("https://lesbijouxdekitsune.netlify.app"),
  title: { default: "Les Bijoux de Kitsune — bijoux en pierres naturelles, créations faites main et sélection", template: "%s · Les Bijoux de Kitsune" },
  description: "Bracelets en pierres naturelles faits main en France, créations personnalisées selon votre thème astral, et une sélection de bijoux choisis avec soin.",
  // Site de développement : à passer à true au lancement.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = { themeColor: "#1a1219" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
