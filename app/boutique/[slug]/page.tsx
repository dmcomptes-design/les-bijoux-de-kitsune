import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCart from "@/components/AddToCart";
import ProductArt from "@/components/ProductArt";
import ProductCard, { RangeBadges } from "@/components/ProductCard";
import { RANGES, SIGNATURE_DETAILS, bySlug, formatPrice, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = bySlug((await params).slug);
  return p ? { title: p.name, description: `${p.name} — ${RANGES[p.range].label}, ${formatPrice(p.price)}.` } : {};
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = bySlug((await params).slug);
  if (!p) notFound();
  const wearsOnWrist = p.type === "Bracelet" && p.range !== "selection";
  const related = products.filter((x) => x.range === p.range && x.slug !== p.slug).slice(0, 4);
  const intro =
    SIGNATURE_DETAILS[p.slug] ??
    (p.range === "selection"
      ? "Un bijou que j'ai choisi chez un fournisseur de confiance pour compléter l'univers Kitsune."
      : "Une pierre, une intention : un bijou simple, assemblé à la main dans mon atelier.");

  return (
    <div className="container">
      <nav className="crumbs" aria-label="Fil d'Ariane" style={{ padding: "32px 0" }}>
        <Link href="/">Accueil</Link><span>/</span><Link href="/boutique">Boutique</Link><span>/</span>
        <Link href={RANGES[p.range].path}>{RANGES[p.range].label}</Link><span>/</span><span>{p.name}</span>
      </nav>
      <div className="product">
        <div className="stack">
          <ProductArt product={p} large />
          <p className="muted" style={{ fontSize: 13 }}>Photo à venir : illustration provisoire.</p>
        </div>
        <div className="stack" style={{ gap: 20 }}>
          <RangeBadges product={p} full />
          <h1 style={{ fontSize: 44, lineHeight: 1.15 }}>{p.name}</h1>
          <div className="price">{formatPrice(p.price)}</div>
          <p className="muted" style={{ fontSize: 17, lineHeight: "28px" }}>{intro}</p>
          <AddToCart slug={p.slug} name={p.name} price={p.price} withSize={wearsOnWrist} soldOut={p.soldOut} />
          {p.personalised && <Link href="/contact" className="btn">Me confier mes informations</Link>}
          <ul className="reassure-list">
            {p.handmade ? (
              <>
                <li>Fait main en France{p.personalised ? ", assemblé pour vous en 48 à 72 heures" : ""}</li>
                <li>Passé par le rituel Kitsune avant l'envoi</li>
                <li>{p.personalised ? "Pièce personnalisée : sans droit de rétractation" : "14 jours pour changer d'avis"}</li>
              </>
            ) : (
              <>
                <li>Choisi et vérifié par Kitsune sur échantillon</li>
                <li>Expédié par notre partenaire sous <span className="todo">[délai]</span></li>
                <li>14 jours pour changer d'avis</li>
              </>
            )}
          </ul>
          <div>
            <details className="acc" open>
              <summary>Les pierres</summary>
              <div>
                <p><span className="todo">[Pierre : naturelle, teintée, traitée ou reconstituée.]</span></p>
                {p.handmade
                  ? <p>Chaque pierre étant naturelle, sa teinte et ses veines varient légèrement d'une pièce à l'autre.</p>
                  : <p>Métal : <span className="todo">[acier inoxydable, laiton doré…]</span>, <span className="todo">[sans nickel]</span>.</p>}
              </div>
            </details>
            {p.handmade && (
              <details className="acc">
                <summary>Le rituel Kitsune</summary>
                <div><p>Avant l'envoi, je prends un moment de calme avec chaque pièce et j'y dépose une intention. C'est un geste personnel, qui fait de ce bijou un rappel porté au poignet.</p></div>
              </details>
            )}
            <details className="acc">
              <summary>Entretien</summary>
              <div><p>Retirez votre bijou pour la douche, la baignade et le sport. Rangez-le à plat, à l'abri de la lumière directe.</p></div>
            </details>
            <details className="acc">
              <summary>Livraison et retours</summary>
              <div>
                {p.handmade
                  ? <p>Expédié depuis la France sous <span className="todo">[délai]</span>.</p>
                  : <p>Expédié directement par notre partenaire, sous <span className="todo">[délai]</span>.</p>}
                <p>{p.personalised ? "Les pièces personnalisées sont fabriquées pour vous : le droit de rétractation ne s'applique pas." : "Vous disposez de 14 jours après réception pour changer d'avis."}</p>
                <Link href="/retours">Retours et rétractation</Link>
              </div>
            </details>
          </div>
          {p.name.toLowerCase().includes("enfant") && (
            <p className="note">Petites perles : ne convient pas aux enfants de moins de 3 ans. À porter sous la surveillance d'un adulte.</p>
          )}
        </div>
      </div>
      {related.length > 0 && (
        <section className="stack" style={{ gap: 32 }}>
          <h2>Vous aimerez <em>aussi</em></h2>
          <div className="grid grid-4">{related.map((x) => <ProductCard key={x.slug} product={x} />)}</div>
        </section>
      )}
    </div>
  );
}
