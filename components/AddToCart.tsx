"use client";

import { useState } from "react";
import { useCart } from "./Cart";

const SIZES = ["15", "16", "17", "18", "19"];

export default function AddToCart({ slug, name, price, withSize, soldOut }: { slug: string; name: string; price: number; withSize: boolean; soldOut: boolean }) {
  const { add } = useCart();
  const [size, setSize] = useState("17");
  const [added, setAdded] = useState(false);
  return (
    <div className="stack">
      {withSize && (
        <div className="stack" style={{ gap: 12 }}>
          <span style={{ fontSize: 14, fontWeight: 500 }}>Tour de poignet : {size} cm</span>
          <div className="pills" role="group" aria-label="Tour de poignet">
            {SIZES.map((s) => (
              <button key={s} type="button" className="pill" aria-pressed={s === size} onClick={() => setSize(s)} style={{ minWidth: 60, justifyContent: "center" }}>
                {s}
              </button>
            ))}
          </div>
        </div>
      )}
      <button
        type="button"
        className="btn btn-primary"
        style={{ minHeight: 56 }}
        disabled={soldOut}
        onClick={() => { add({ slug, name, price, size: withSize ? size : undefined }); setAdded(true); }}
      >
        {soldOut ? "Épuisé" : "Ajouter au panier"}
      </button>
      <p role="status" className="muted" style={{ fontSize: 14, minHeight: 22 }}>{added ? "Ajouté à votre panier." : ""}</p>
    </div>
  );
}
