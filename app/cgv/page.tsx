import Legal from "@/components/Legal";
export const metadata = { title: "Conditions générales de vente" };
export default function P() {
  return (
    <Legal title="Conditions générales de vente">
      <h2>Vendeur</h2>
      <p>Les Bijoux de Kitsune, marque de <span className="todo">[entité juridique : micro-entreprise actuelle ou future holding]</span>, SIRET <span className="todo">[à confirmer]</span>, Cébazat (63), France.</p>
      <h2>Prix</h2>
      <p>Prix en euros, toutes taxes comprises. TVA non applicable, article 293 B du CGI <span className="todo">[à confirmer selon le statut]</span>.</p>
      <h2>Paiement</h2>
      <p>Carte bancaire <span className="todo">[et autres moyens selon Shopify]</span>, sur une page de paiement sécurisée.</p>
      <h2>Produits</h2>
      <p>Chaque fiche indique si le bijou est fait main (Signature Kitsune, Les Essentiels) ou sélectionné auprès d'un fournisseur (La Sélection), ainsi que la nature de la pierre. Les pierres naturelles présentent des variations de teinte. Les bijoux ne sont pas des dispositifs médicaux : la lithothérapie est présentée comme une tradition.</p>
      <h2>Livraison, rétractation, garanties</h2>
      <p>Voir les pages Livraison et Retours. Garantie légale de conformité de 2 ans et garantie des vices cachés.</p>
      <h2>Litiges</h2>
      <p>Droit français. Médiateur de la consommation : <span className="todo">[nom et coordonnées]</span>.</p>
    </Legal>
  );
}
