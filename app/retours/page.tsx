import Legal from "@/components/Legal";
export const metadata = { title: "Retours et rétractation" };
export default function P() {
  return (
    <Legal title="Retours et rétractation">
      <h2>Droit de rétractation</h2>
      <p>Vous disposez de 14 jours calendaires à compter de la réception pour changer d'avis, sans avoir à vous justifier.</p>
      <h2>Comment faire</h2>
      <ol>
        <li>Écrivez-moi à <span className="todo">[adresse e-mail]</span> avec votre numéro de commande.</li>
        <li>Renvoyez le bijou non porté, dans son emballage d'origine, à : <span className="todo">[adresse de retour complète]</span>.</li>
        <li>Les frais de retour sont à votre charge.</li>
      </ol>
      <h2>Remboursement</h2>
      <p>Sous 14 jours maximum après réception et vérification du retour, sur le moyen de paiement utilisé.</p>
      <h2>Exceptions</h2>
      <p>Les pièces personnalisées (Signature Kitsune) sont fabriquées pour vous : le droit de rétractation ne s'applique pas (article L221-28 du Code de la consommation).</p>
      <h2>Produit défectueux</h2>
      <p>Les frais de retour sont à ma charge et je vous propose un remplacement ou un remboursement complet. Tous les bijoux, faits main ou sélectionnés, bénéficient de la garantie légale de conformité de 2 ans.</p>
    </Legal>
  );
}
