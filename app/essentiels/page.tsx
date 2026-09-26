import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import ProductCard from "@/components/ProductCard";
import { inRange } from "@/lib/products";

export const metadata: Metadata = { title: "Les Essentiels", description: "Une pierre, une intention : les Essences Stellaires et leurs porte-clés, faits main à prix doux." };

const SIGNS: [string, string][] = [
  ["Bélier", "Jaspe rouge · cornaline"], ["Taureau", "Émeraude"], ["Gémeaux", "Citrine"], ["Cancer", "Quartz rose"],
  ["Lion", "Œil de tigre · pierre de soleil"], ["Vierge", "Amazonite"], ["Balance", "Pierre de lune · lapis-lazuli"], ["Scorpion", "Obsidienne noire"],
  ["Sagittaire", "Lapis-lazuli · sodalite"], ["Capricorne", "Quartz fumé"], ["Verseau", "Fluorite · sodalite"], ["Poissons", "Améthyste · aigue-marine"],
];

export default function Essentiels() {
  const all = inRange("essentiels");
  const groups = ["Essences Stellaires", "Porte-clés en pierre", "Éditions spéciales"];
  return (
    <div className="container">
      <PageHead crumb="Les Essentiels" eyebrow="Fait main" title={<>Les Essentiels, <em>une pierre, une intention.</em></>} lead="Des bijoux simples, faits main, pour entrer dans l'univers Kitsune. Chacun est centré sur une pierre, choisie pour ce qu'elle évoque dans la tradition de la lithothérapie, et passe par le rituel Kitsune avant l'envoi." />
      {groups.map((g) => (
        <section key={g} className="stack" style={{ gap: 24, paddingBottom: 64 }}>
          <h2>{g}</h2>
          {g === "Essences Stellaires" && (
            <>
              <p className="muted" style={{ maxWidth: 720 }}>12 signes, 12 pierres. Dans l'astrologie et la lithothérapie, chaque signe du zodiaque est associé à une pierre. Je l'assemble avec des perles de bois, en bracelet ou en porte-clés. Votre ciel intérieur, à votre poignet.</p>
              <div className="table-wrap panel" style={{ padding: "8px 16px" }}>
                <table className="table">
                  <thead><tr><th>Signe</th><th>Pierre</th></tr></thead>
                  <tbody>{SIGNS.map(([s, st]) => <tr key={s}><td>{s}</td><td className="muted">{st}</td></tr>)}</tbody>
                </table>
              </div>
            </>
          )}
          <div className="grid grid-4">{all.filter((p) => p.subCollection === g).map((p) => <ProductCard key={p.slug} product={p} />)}</div>
        </section>
      ))}
      <p className="note">La lithothérapie est une tradition, pas une médecine. Mes bijoux accompagnent une intention ; ils ne remplacent ni un avis médical, ni un traitement.</p>
    </div>
  );
}
