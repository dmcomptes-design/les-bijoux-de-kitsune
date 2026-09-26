"use client";

import Link from "next/link";
import { createContext, useContext, useEffect, useState } from "react";

type Line = { slug: string; name: string; price: number; qty: number; size?: string };
type Cart = { lines: Line[]; add: (l: Omit<Line, "qty">) => void; remove: (slug: string, size?: string) => void; count: number };

const Ctx = createContext<Cart | null>(null);
const KEY = "kitsune-panier";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<Line[]>([]);
  useEffect(() => {
    try { const raw = localStorage.getItem(KEY); if (raw) setLines(JSON.parse(raw)); } catch {}
  }, []);
  const save = (next: Line[]) => {
    setLines(next);
    try { localStorage.setItem(KEY, JSON.stringify(next)); } catch {}
  };
  const add: Cart["add"] = (l) => {
    const i = lines.findIndex((x) => x.slug === l.slug && x.size === l.size);
    if (i >= 0) save(lines.map((x, j) => (j === i ? { ...x, qty: x.qty + 1 } : x)));
    else save([...lines, { ...l, qty: 1 }]);
  };
  const remove: Cart["remove"] = (slug, size) => save(lines.filter((x) => !(x.slug === slug && x.size === size)));
  const count = lines.reduce((s, l) => s + l.qty, 0);
  return <Ctx.Provider value={{ lines, add, remove, count }}>{children}</Ctx.Provider>;
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("CartProvider manquant");
  return c;
}

export function CartLink() {
  const { count } = useCart();
  return (
    <Link href="/panier" className="icon-btn" aria-label={`Panier, ${count} article${count > 1 ? "s" : ""}`}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 7h12l-1 13H7L6 7z" /><path d="M9 7a3 3 0 0 1 6 0" />
      </svg>
      {count > 0 && <span className="cart-count">{count}</span>}
    </Link>
  );
}
