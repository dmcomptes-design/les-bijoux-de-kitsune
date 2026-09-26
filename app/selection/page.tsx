import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import ProductCard from "@/components/ProductCard";
import { aisle, inRange } from "@/lib/products";

export const metadata: Metadata = { title: "La Sélection", description: "Colliers, bagues, boucles d'oreilles et bracelets choisis chez des fournisseurs de confiance." };

const AISLES = ["Colliers et pendentifs", "Bracelets", "Boucles d'oreilles", "Bagues", "Coffrets et accessoires"];

export default function Selection() {
  const all = inRange("selection");
  return (
    <div className="container">
      <PageHead crumb="La Sélection" eyebrow="Sélection Kitsune" title={<>La Sélection Kitsune, <em>des bijoux choisis pour vous.</em></>} lead="À côté de mes créations, je sélectionne des bijoux chez des fournisseurs de confiance : colliers, bagues, boucles d'oreilles et bracelets qui prolongent l'univers Kitsune. Ils ne sont pas faits main par moi et partent directement de chez nos partenaires." />
      <div className="panel" style={{ marginBottom: 48 }}>
        <ul className="reassure-list" style={{ border: 0, padding: 0 }}>
          <li><span><strong>Chaque modèle est choisi</strong> et vérifié sur échantillon avant d'entrer dans la Sélection.</span></li>
          <li><span><strong>Une description honnête</strong> : la pierre (naturelle, teintée, reconstituée ou synthétique) et le métal sont indiqués sur chaque fiche.</span></li>
          <li><span><strong>Un délai clair</strong> : expédié par notre partenaire sous <span className="todo">[délai]</span>.</span></li>
          <li><span><strong>Les mêmes droits</strong> : 14 jours pour changer d'avis, garantie légale de conformité de 2 ans. C'est moi qui vous réponds.</span></li>
        </ul>
      </div>
      {AISLES.map((a) => {
        const list = all.filter((p) => aisle(p) === a);
        return list.length ? (
          <section key={a} className="stack" style={{ gap: 24, paddingBottom: 64 }}>
            <h2>{a} <span className="muted" style={{ fontSize: 18 }}>· {list.length}</span></h2>
            <div className="grid grid-4">{list.map((p) => <ProductCard key={p.slug} product={p} />)}</div>
          </section>
        ) : null;
      })}
    </div>
  );
}
