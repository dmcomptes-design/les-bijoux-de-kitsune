import Legal from "@/components/Legal";
export const metadata = { title: "Confidentialité" };
export default function P() {
  return (
    <Legal title="Confidentialité">
      <h2>Données collectées</h2>
      <p>Nom, e-mail et adresse de livraison pour traiter vos commandes ; les informations de naissance que vous me confiez pour une pièce personnalisée, utilisées uniquement pour choisir vos pierres.</p>
      <h2>Durée de conservation</h2>
      <p><span className="todo">[durées]</span></p>
      <h2>Vos droits</h2>
      <p>Accès, rectification et suppression de vos données : écrivez à <span className="todo">[adresse e-mail]</span>.</p>
      <h2>Cookies</h2>
      <p>Le panier est enregistré dans votre navigateur. <span className="todo">[Mesure d'audience éventuelle]</span></p>
    </Legal>
  );
}
