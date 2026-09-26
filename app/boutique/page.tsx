import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { RANGES, aisle, products, type Range } from "@/lib/products";

export const metadata: Metadata = { title: "La boutique", description: "Toutes les créations faites main et la Sélection Kitsune." };

const TYPES = ["Bracelets", "Colliers et pendentifs", "Boucles d'oreilles", "Bagues", "Porte-clés", "Coffrets et accessoires"];

export default async function Boutique({ searchParams }: { searchParams: Promise<{ gamme?: string; type?: string }> }) {
  const sp = await searchParams;
  const gamme = (["signature", "essentiels", "selection"].includes(sp.gamme ?? "") ? sp.gamme : undefined) as Range | undefined;
  const type = TYPES.includes(sp.type ?? "") ? sp.type : undefined;
  const list = products.filter((p) => (!gamme || p.range === gamme) && (!type || aisle(p) === type));
  const href = (g?: string, t?: string) => {
    const q = new URLSearchParams();
    if (g) q.set("gamme", g);
    if (t) q.set("type", t);
    const s = q.toString();
    return s ? `/boutique?${s}` : "/boutique";
  };

  return (
    <div className="container">
      <div className="page-head">
        <nav className="crumbs" aria-label="Fil d'Ariane"><Link href="/">Accueil</Link><span>/</span><span>Boutique</span></nav>
        <h1>La boutique</h1>
        <p className="lead">Mes créations faites main et la Sélection Kitsune. Chaque fiche indique la gamme, la pierre et son origine.</p>
      </div>
      <div className="stack" style={{ gap: 12, marginBottom: 32 }}>
        <div className="pills" aria-label="Filtrer par gamme">
          <Link className="pill" href={href(undefined, type)} aria-current={!gamme ? "page" : undefined}>Toutes les gammes</Link>
          {(Object.keys(RANGES) as Range[]).map((r) => (
            <Link key={r} className="pill" href={href(r, type)} aria-current={gamme === r ? "page" : undefined}>{RANGES[r].label}</Link>
          ))}
        </div>
        <div className="pills" aria-label="Filtrer par type">
          <Link className="pill" href={href(gamme)} aria-current={!type ? "page" : undefined}>Tous les bijoux</Link>
          {TYPES.map((t) => (
            <Link key={t} className="pill" href={href(gamme, t)} aria-current={type === t ? "page" : undefined}>{t}</Link>
          ))}
        </div>
        <span className="muted" style={{ fontSize: 14 }}>{list.length} {list.length > 1 ? "bijoux" : "bijou"}</span>
      </div>
      {gamme === "selection" && (
        <p className="note" style={{ marginBottom: 32 }}>La Sélection Kitsune réunit des bijoux que je choisis chez des fournisseurs de confiance. Ils ne sont pas faits main et partent directement de chez eux : le délai de livraison est indiqué sur chaque fiche.</p>
      )}
      {list.length ? (
        <div className="grid grid-4">{list.map((p) => <ProductCard key={p.slug} product={p} />)}</div>
      ) : (
        <p className="muted">Aucun bijou dans cette combinaison. <Link href="/boutique">Voir toute la boutique</Link></p>
      )}
    </div>
  );
}
