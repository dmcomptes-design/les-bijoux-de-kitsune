import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer dark">
      <div className="container footer-inner">
        <div className="stack" style={{ maxWidth: 320 }}>
          <img src="/logos/les-bijoux-de-kitsune-prune.svg" alt="Les Bijoux de Kitsune" width={150} height={170} />
          <p className="muted" style={{ fontSize: 14 }}>Une maison du Monde de Kitsune.</p>
        </div>
        <div className="footer-cols">
          <div className="stack" style={{ gap: 10 }}>
            <span className="eyebrow">Boutique</span>
            <Link href="/signature">Signature Kitsune</Link>
            <Link href="/essentiels">Les Essentiels</Link>
            <Link href="/selection">La Sélection</Link>
            <Link href="/contact">Bijou sur demande</Link>
          </div>
          <div className="stack" style={{ gap: 10 }}>
            <span className="eyebrow">Informations</span>
            <Link href="/livraison">Livraison</Link>
            <Link href="/retours">Retours et rétractation</Link>
            <Link href="/cgv">Conditions générales de vente</Link>
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/confidentialite">Confidentialité</Link>
          </div>
          <div className="stack" style={{ gap: 10 }}>
            <span className="eyebrow">La maison</span>
            <Link href="/notre-histoire">Notre histoire</Link>
            <Link href="/rituel">Le rituel Kitsune</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Les Bijoux de Kitsune — Tous droits réservés</span>
        <span>Porter ce qui résonne.</span>
      </div>
    </footer>
  );
}
