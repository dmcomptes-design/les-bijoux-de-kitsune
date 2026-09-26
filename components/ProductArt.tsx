import { stoneColor, type Product } from "@/lib/products";

/** Illustration provisoire (perles) en attendant les vraies photos. */
export default function ProductArt({ product, large = false, children }: { product: Product; large?: boolean; children?: React.ReactNode }) {
  const c = stoneColor(product);
  const n = product.type === "Collier" ? 9 : 11;
  const beads = Array.from({ length: n }, (_, i) => {
    const a = Math.PI * (0.15 + (0.7 * i) / (n - 1));
    const x = 100 - 70 * Math.cos(a);
    const y = 40 + 55 * Math.sin(a);
    const mid = i === Math.floor(n / 2);
    return { x, y, r: mid ? 11 : 7, mid };
  });
  return (
    <div className="art" style={large ? { aspectRatio: "4 / 5" } : undefined}>
      {children}
      <svg viewBox="0 0 200 120" role="img" aria-label={`Illustration provisoire : ${product.name}`}>
        {beads.map((b, i) => (
          <circle key={i} cx={b.x} cy={b.y} r={b.r} fill={b.mid ? "#d5b66a" : c} stroke="#2d1f2e" strokeWidth="1" />
        ))}
      </svg>
    </div>
  );
}
