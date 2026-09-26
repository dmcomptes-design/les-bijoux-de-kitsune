import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { RANGES, products, type Range } from "@/lib/products";

const FEATURED = ["trio-celeste", "bracelet-chemin-de-vie-bijou-energetique-personnalise", "essence-stellaire-poissons-amethyste-et-bois", "essence-stellaire-cancer-quartz-rose-et-bois"];

export default function Home() {
  const featured = FEATURED.map((s) => products.find((p) => p.slug === s)).filter(Boolean) as typeof products;
  const selection = products.filter((p) => p.range === "selection" && p.type === "Collier").slice(0, 4);

  return (
    <>
      <section className="container hero">
        <div className="stack hero-text">
          <span className="eyebrow lav">Pierres naturelles · créations et sélection</span>
          <h1 className="hero-title">Chaque pierre porte une intention.</h1>
          <p className="lead">Des bijoux en pierres naturelles : mes créations, assemblées à la main, et une sélection de pièces que j'ai choisies pour vous.</p>
          <div className="btn-row" style={{ marginTop: 8 }}>
            <Link href="/boutique" className="btn btn-primary">Découvrir la boutique</Link>
            <Link href="/contact" className="btn btn-outline">Créer mon bijou sur demande</Link>
          </div>
        </div>
        <div className="hero-art">
          <img src="/logos/les-bijoux-de-kitsune-nuit.svg" alt="Les Bijoux de Kitsune : un renard doré assis sur un croissant de lune" width={420} height={476} />
        </div>
      </section>

      <section className="section" style={{ background: "var(--nuit-raised)" }}>
        <div className="container stack" style={{ gap: 40 }}>
          <div className="stack" style={{ gap: 12 }}>
            <span className="eyebrow">Trois façons d'entrer dans l'univers</span>
            <h2>Par où souhaitez-vous commencer ?</h2>
          </div>
          <div className="ranges">
            {(Object.keys(RANGES) as Range[]).map((r) => (
              <Link key={r} href={RANGES[r].path} className="range-card">
                <span className={`badge badge-${r}`} style={{ alignSelf: "flex-start" }}>{RANGES[r].badge}</span>
                <h3 style={{ fontSize: 26, lineHeight: "32px", fontWeight: 400 }}>{RANGES[r].label}</h3>
                <p className="muted" style={{ flexGrow: 1 }}>{RANGES[r].short}</p>
                <span style={{ fontWeight: 600, color: "var(--or)" }}>Voir la gamme</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section container stack" style={{ gap: 32 }}>
        <div className="row-between">
          <div className="stack" style={{ gap: 12 }}>
            <span className="eyebrow">Créations faites main</span>
            <h2>Les pièces les plus aimées</h2>
          </div>
          <Link href="/boutique">Voir toute la boutique</Link>
        </div>
        <div className="grid grid-4">{featured.map((p) => <ProductCard key={p.slug} product={p} />)}</div>
      </section>

      <section className="container">
        <div className="band ritual">
          <div className="stack" style={{ gap: 16, maxWidth: 420 }}>
            <span className="eyebrow lav">Le rituel Kitsune</span>
            <h2>Avant de vous rejoindre, chaque création passe entre mes mains.</h2>
            <Link href="/rituel" style={{ fontWeight: 600 }}>Découvrir le rituel</Link>
          </div>
          <ol className="steps">
            <li><span className="step-n">1</span><h3>Je choisis la pierre</h3><p className="muted">Pour sa couleur, sa matière et ce qu'elle évoque. Chaque pierre est nommée telle qu'elle est.</p></li>
            <li><span className="step-n">2</span><h3>J'assemble à la main</h3><p className="muted">Perle après perle, dans mon atelier près de Clermont-Ferrand.</p></li>
            <li><span className="step-n">3</span><h3>J'y dépose une intention</h3><p className="muted">Un moment de calme avant l'envoi : un rappel doux, porté au poignet.</p></li>
          </ol>
        </div>
      </section>

      <section className="section container stack" style={{ gap: 32 }}>
        <div className="row-between">
          <div className="stack" style={{ gap: 12 }}>
            <span className="eyebrow">La Sélection Kitsune</span>
            <h2>Des bijoux choisis pour vous</h2>
          </div>
          <Link href="/selection">Voir la Sélection</Link>
        </div>
        <div className="grid grid-4">{selection.map((p) => <ProductCard key={p.slug} product={p} />)}</div>
      </section>

      <section className="container quote">
        <blockquote>
          <p>« Vous n'avez pas besoin d'un bijou de plus. Vous avez besoin de celui-là. »</p>
          <footer className="muted">Denis, créateur des Bijoux de Kitsune</footer>
        </blockquote>
      </section>

      <section className="section container center stack" style={{ alignItems: "center", gap: 24 }}>
        <h2 style={{ maxWidth: 760 }}>Un lien, une date, une émotion ? Je crée le bijou qui la portera.</h2>
        <p className="lead">Racontez-moi la personne et le moment : je vous propose des pierres, puis j'assemble le bijou qui les portera.</p>
        <Link href="/contact" className="btn btn-outline">Me raconter votre projet</Link>
      </section>

      <section className="container">
        <ul className="reassurance">
          <li>Paiement sécurisé</li>
          <li>Livraison en France métropolitaine</li>
          <li>14 jours pour changer d'avis</li>
          <li>Une question ? Je réponds personnellement</li>
        </ul>
      </section>
    </>
  );
}
