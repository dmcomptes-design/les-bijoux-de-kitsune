import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { RANGES, products, type Range } from "@/lib/products";

const FEATURED = ["trio-celeste", "bracelet-chemin-de-vie-bijou-energetique-personnalise", "essence-stellaire-poissons-amethyste-et-bois", "flocons-de-neige-edition-limitee-d-hiver"];

export default function Home() {
  const featured = FEATURED.map((s) => products.find((p) => p.slug === s)).filter(Boolean) as typeof products;
  const selection = products.filter((p) => p.range === "selection" && p.type === "Collier").slice(0, 4);

  return (
    <>
      <section className="hero dark">
        <div className="container hero-inner">
          <div className="stack" style={{ gap: 28 }}>
            <span className="eyebrow">Pierres naturelles · créations et sélection</span>
            <h1 className="hero-title">Chaque pierre porte une intention.<br /><em>Chaque bijou, la vôtre.</em></h1>
            <p className="lead">Des bijoux en pierres naturelles : mes créations, assemblées à la main, et une sélection de pièces que j'ai choisies pour vous.</p>
            <div className="btn-row" style={{ marginTop: 8 }}>
              <Link href="/boutique" className="btn btn-primary">Entrer dans la boutique</Link>
              <Link href="/contact" className="btn">Créer mon bijou sur demande</Link>
            </div>
          </div>
          <div className="hero-art">
            <img src="/logos/les-bijoux-de-kitsune-prune.svg" alt="Les Bijoux de Kitsune : un renard doré assis sur un croissant de lune" width={400} height={453} />
          </div>
        </div>
      </section>

      <ul className="reassurance dark prune">
        <li><strong>Fait main en France</strong><span>Pour Signature Kitsune et Les Essentiels</span></li>
        <li><strong>Pierres nommées honnêtement</strong><span>Naturelle, teintée ou traitée : c'est écrit sur la fiche</span></li>
        <li><strong>Le rituel Kitsune</strong><span>Chaque création faite main passe entre mes mains avant l'envoi</span></li>
        <li><strong>14 jours pour changer d'avis</strong><span>Et une réponse personnelle à chaque question</span></li>
      </ul>

      <section className="section dark">
        <div className="container ritual">
          <div className="stack" style={{ gap: 20 }}>
            <span className="eyebrow">La promesse Kitsune</span>
            <h2>Vous n'avez pas besoin d'un bijou de plus. <em>Vous avez besoin de celui-là.</em></h2>
            <p className="muted">Il y a des moments où l'on cherche quelque chose à ancrer. Un rappel doux, porté au poignet. Mes créations sont pensées et assemblées à la main, pour accompagner ce que vous vivez, pas seulement ce que vous portez.</p>
            <Link href="/rituel" className="btn btn-primary" style={{ alignSelf: "flex-start", marginTop: 8 }}>Découvrir le rituel</Link>
          </div>
          <ol className="steps">
            <li><span className="step-n">i.</span><h3>Je choisis la pierre</h3><p className="muted">Pour sa couleur, sa matière et ce qu'elle évoque. Chaque pierre est nommée telle qu'elle est.</p></li>
            <li><span className="step-n">ii.</span><h3>J'assemble à la main</h3><p className="muted">Perle après perle, dans mon atelier près de Clermont-Ferrand.</p></li>
            <li><span className="step-n">iii.</span><h3>J'y dépose une intention</h3><p className="muted">Un moment de calme avant l'envoi : un rappel doux, porté au poignet.</p></li>
          </ol>
        </div>
      </section>

      <section className="section creme">
        <div className="container stack" style={{ gap: 48 }}>
          <div className="stack center" style={{ gap: 12, alignItems: "center" }}>
            <span className="eyebrow">Nos univers</span>
            <h2>Par où souhaitez-vous <em>commencer votre voyage ?</em></h2>
          </div>
          <div className="ranges">
            {(Object.keys(RANGES) as Range[]).map((r) => (
              <Link key={r} href={RANGES[r].path} className="range-card">
                <span className={`badge badge-${r}`}>{RANGES[r].badge}</span>
                <h3>{RANGES[r].label}</h3>
                <p className="muted" style={{ flexGrow: 1, fontSize: 14 }}>{RANGES[r].short}</p>
                <span className="link-arrow">Voir la gamme</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section container stack" style={{ gap: 40 }}>
        <div className="row-between">
          <h2>Nos créations <em>les plus aimées</em></h2>
          <Link href="/boutique" className="link-arrow">Voir toute la boutique</Link>
        </div>
        <div className="grid grid-4">{featured.map((p) => <ProductCard key={p.slug} product={p} />)}</div>
      </section>

      <section className="section dark quote-band">
        <div className="container">
          <blockquote>
            <p>« Ce n'est pas le bracelet qu'elles portent. C'est ce qu'il leur rappelle chaque matin. »</p>
            <footer>Denis, créateur des Bijoux de Kitsune</footer>
            <Link href="/contact" className="btn btn-outline">Créer mon bijou sur demande</Link>
          </blockquote>
        </div>
      </section>

      <section className="section container stack" style={{ gap: 40 }}>
        <div className="row-between">
          <div className="stack" style={{ gap: 12 }}>
            <span className="eyebrow">La Sélection Kitsune</span>
            <h2>Des bijoux <em>choisis pour vous</em></h2>
          </div>
          <Link href="/selection" className="link-arrow">Voir la Sélection</Link>
        </div>
        <div className="grid grid-4">{selection.map((p) => <ProductCard key={p.slug} product={p} />)}</div>
      </section>
    </>
  );
}
