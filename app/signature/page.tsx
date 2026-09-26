import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import ProductCard from "@/components/ProductCard";
import { inRange } from "@/lib/products";

export const metadata: Metadata = { title: "Signature Kitsune", description: "Des pièces faites main et personnalisées selon votre thème astral, votre chemin de vie ou votre intention." };

export default function Signature() {
  return (
    <div className="container">
      <PageHead crumb="Signature Kitsune" eyebrow="Fait main · personnalisé" title={<>Signature Kitsune, <em>plus qu'un bijou, un rituel.</em></>} lead="Des pièces uniques, assemblées à la main pour une personne. Votre thème astral, votre chemin de vie ou simplement ce que vous traversez : je pars de vous pour choisir les pierres." />
      <div className="grid grid-4">{inRange("signature").map((p) => <ProductCard key={p.slug} product={p} />)}</div>
      <section className="section" style={{ display: "grid", gap: 48, gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))" }}>
        <div className="stack">
          <h2>Comment se passe une commande</h2>
          <ol className="prose" style={{ paddingLeft: 22, margin: 0 }}>
            <li><strong>Vous me confiez</strong> votre date, heure et lieu de naissance, votre intention, ou simplement quelques mots.</li>
            <li><strong>Je choisis les pierres</strong> et je vous explique mon choix.</li>
            <li><strong>J'assemble votre bijou à la main</strong>, en 48 à 72 heures après réception de vos informations.</li>
            <li><strong>Le rituel Kitsune</strong>, puis l'envoi avec votre carte d'intention et sa pochette.</li>
          </ol>
          <Link href="/contact" className="btn btn-outline" style={{ alignSelf: "flex-start" }}>Me raconter votre projet</Link>
        </div>
        <div className="panel stack frame">
          <h3>Bon à savoir</h3>
          <ul className="prose" style={{ margin: 0 }}>
            <li>Taille standard adulte : 17 à 18 cm de tour de poignet. Autres tailles sur demande.</li>
            <li>Les pièces personnalisées sont fabriquées pour vous : le droit de rétractation ne s'applique pas (article L221-28 du Code de la consommation).</li>
            <li>Bracelets enfant : petites perles, ne conviennent pas aux enfants de moins de 3 ans. À porter sous la surveillance d'un adulte.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
