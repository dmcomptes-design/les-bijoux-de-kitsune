import Link from "next/link";
import { CartLink } from "./Cart";

export const NAV = [
  { href: "/signature", label: "Signature" },
  { href: "/essentiels", label: "Les Essentiels" },
  { href: "/selection", label: "La Sélection" },
  { href: "/rituel", label: "Le rituel" },
  { href: "/notre-histoire", label: "Notre histoire" },
];

export default function Header() {
  return (
    <header className="site-header dark">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Les Bijoux de Kitsune, accueil">
          <img src="/logos/kitsune-lune-prune.svg" alt="" width={62} height={56} />
          <span>Les Bijoux de Kitsune</span>
        </Link>
        <nav className="nav-desktop" aria-label="Navigation principale">
          {NAV.map((n) => <Link key={n.href} href={n.href}>{n.label}</Link>)}
        </nav>
        <div className="header-actions">
          <Link href="/boutique" className="icon-btn" aria-label="Toute la boutique">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="10" cy="10" r="7" /><path d="M21 21l-6-6" /></svg>
          </Link>
          <CartLink />
          <details className="nav-mobile">
            <summary className="icon-btn" aria-label="Menu">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
            </summary>
            <nav aria-label="Navigation mobile">
              <Link href="/boutique">Toute la boutique</Link>
              {NAV.map((n) => <Link key={n.href} href={n.href}>{n.label}</Link>)}
              <Link href="/contact">Contact</Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
