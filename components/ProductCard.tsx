import Link from "next/link";
import ProductArt from "./ProductArt";
import { RANGES, formatPrice, type Product } from "@/lib/products";

export function RangeBadges({ product, full = false }: { product: Product; full?: boolean }) {
  return (
    <div className="badges">
      <span className={`badge badge-${product.range}`}>{full ? RANGES[product.range].label : RANGES[product.range].badge}</span>
      {product.handmade && <span className="badge badge-rituel">Rituel</span>}
    </div>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/boutique/${product.slug}`} className="card">
      <ProductArt product={product} />
      <div className="card-body">
        <RangeBadges product={product} />
        <span className="card-name">{product.name}</span>
        <span className="card-meta">
          {product.handmade ? "Fait main" : "Sélectionné par Kitsune"}
          {product.personalised ? " · personnalisé" : ""}
          {product.soldOut ? " · épuisé" : ""}
        </span>
        <span className="price">{formatPrice(product.price)}</span>
      </div>
    </Link>
  );
}
