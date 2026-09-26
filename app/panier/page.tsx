"use client";

import Link from "next/link";
import { useCart } from "@/components/Cart";
import { formatPrice } from "@/lib/products";

export default function Panier() {
  const { lines, remove } = useCart();
  const total = lines.reduce((s, l) => s + l.price * l.qty, 0);
  return (
    <div className="container" style={{ paddingTop: 48 }}>
      <h1 style={{ marginBottom: 32 }}>Votre panier</h1>
      {lines.length === 0 ? (
        <div className="stack" style={{ alignItems: "flex-start" }}>
          <p className="muted">Votre panier est vide.</p>
          <Link href="/boutique" className="btn btn-primary">Découvrir la boutique</Link>
        </div>
      ) : (
        <div className="stack" style={{ gap: 24, maxWidth: 760 }}>
          <div className="table-wrap">
            <table className="table">
              <thead><tr><th>Bijou</th><th>Quantité</th><th>Prix</th><th><span className="visually-hidden">Action</span></th></tr></thead>
              <tbody>
                {lines.map((l) => (
                  <tr key={l.slug + (l.size ?? "")}>
                    <td><Link href={`/boutique/${l.slug}`}>{l.name}</Link>{l.size && <span className="muted"> · {l.size} cm</span>}</td>
                    <td>{l.qty}</td>
                    <td>{formatPrice(l.price * l.qty)}</td>
                    <td><button type="button" className="pill" onClick={() => remove(l.slug, l.size)}>Retirer</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="row-between">
            <span className="price" style={{ fontSize: 24 }}>Total : {formatPrice(total)}</span>
            <button type="button" className="btn btn-primary" disabled title="Le paiement sera branché sur Shopify">Passer commande</button>
          </div>
          <p className="note">Site en construction : le paiement sera activé une fois la boutique Shopify reliée. Frais de port calculés à l'étape suivante.</p>
        </div>
      )}
    </div>
  );
}
