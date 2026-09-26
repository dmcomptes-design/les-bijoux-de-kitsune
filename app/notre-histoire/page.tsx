import type { Metadata } from "next";
import PageHead from "@/components/PageHead";

export const metadata: Metadata = { title: "Notre histoire", description: "Denis, créateur des Bijoux de Kitsune, et le sens du renard kitsune." };

export default function Histoire() {
  return (
    <div className="container">
      <PageHead crumb="Notre histoire" title={<>Je m'appelle Denis. <em>Et je crois que les pierres ont quelque chose à raconter.</em></>} />
      <div className="prose">
        <p className="lead">Les Bijoux de Kitsune sont nés d'une envie simple : créer des objets qui accompagnent, sans compliquer ce qui est beau. <span className="todo">[Une ou deux phrases sur ton parcours.]</span></p>
        <p>J'assemble mes créations à la main, dans mon atelier près de Clermont-Ferrand. Je choisis chaque pierre pour sa couleur, sa matière et ce qu'elle évoque. Et parce qu'un univers se construit aussi par des rencontres, je propose à côté de mes créations une sélection de bijoux choisis chez des fournisseurs de confiance.</p>
        <h2>Pourquoi Kitsune</h2>
        <p>Dans les légendes japonaises, le kitsune est un renard messager, associé à l'intuition et à la transformation. Il guide sans s'imposer. C'est l'esprit de cette maison : des bijoux qui accompagnent, discrètement.</p>
        <p className="eyebrow lav">Messager · Gardien · Sage</p>
        <h2>Ce qui me guide</h2>
        <ul>
          <li><strong>L'intuition</strong> — Chaque création personnalisée est pensée pour une personne, jamais produite en série.</li>
          <li><strong>La simplicité</strong> — Des matériaux naturels, rien de superflu.</li>
          <li><strong>L'honnêteté</strong> — Chaque pierre est nommée telle qu'elle est, et chaque fiche indique si le bijou est fait main ou sélectionné.</li>
          <li><strong>La bienveillance</strong> — Un accompagnement doux, sans dogme ni jugement.</li>
        </ul>
        <h2>Ce que vous recevez avec une création faite main</h2>
        <ul>
          <li>Le bijou, assemblé à la main</li>
          <li>Une carte d'intention qui présente ses pierres</li>
          <li>Un petit rituel à faire chez vous</li>
          <li>Une pochette naturelle</li>
        </ul>
      </div>
    </div>
  );
}
