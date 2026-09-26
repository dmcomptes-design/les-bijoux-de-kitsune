import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";

export const metadata: Metadata = { title: "Le rituel Kitsune", description: "Les trois gestes par lesquels passe chaque création faite main avant de vous rejoindre." };

export default function Rituel() {
  return (
    <div className="container">
      <PageHead crumb="Le rituel Kitsune" eyebrow="Le rituel Kitsune" title="Avant de vous rejoindre, chaque création passe entre mes mains." lead="Le rituel Kitsune, c'est le temps que je prends pour chaque bijou fait main. Trois gestes simples, toujours les mêmes." />
      <div className="band" style={{ marginBottom: 64 }}>
        <ol className="steps">
          <li><span className="step-n">1</span><h3>Je choisis la pierre</h3><p className="muted">Pour sa couleur, sa matière et ce qu'elle évoque dans la tradition de la lithothérapie. Chaque pierre est nommée telle qu'elle est : naturelle, teintée ou traitée.</p></li>
          <li><span className="step-n">2</span><h3>Je la purifie et j'assemble le bijou</h3><p className="muted">Encens, eau, sel ou son, puis l'assemblage à la main, perle après perle.</p></li>
          <li><span className="step-n">3</span><h3>J'y dépose une intention</h3><p className="muted">Un moment de calme avant l'envoi. C'est un geste personnel, qui fait de ce bijou un rappel porté au poignet.</p></li>
        </ol>
      </div>
      <div className="prose">
        <h2>Ce que vous recevez</h2>
        <ul>
          <li>Votre bijou, dans sa pochette naturelle</li>
          <li>Une carte d'intention qui présente ses pierres et leur place dans la lithothérapie</li>
          <li>Un petit rituel à faire chez vous pour accueillir le bijou</li>
        </ul>
        <h2>À savoir</h2>
        <p className="muted">La lithothérapie est une tradition, pas une médecine. Mes bijoux accompagnent une intention ; ils ne remplacent ni un avis médical, ni un traitement.</p>
        <p className="muted">La Sélection Kitsune ne passe pas par ce rituel : ces bijoux partent directement de chez nos fournisseurs.</p>
        <div className="btn-row" style={{ marginTop: 16 }}>
          <Link href="/signature" className="btn btn-primary">Découvrir les créations faites main</Link>
          <Link href="/essentiels" className="btn">Les Essentiels</Link>
        </div>
      </div>
    </div>
  );
}
