import Legal from "@/components/Legal";
export const metadata = { title: "Livraison" };
export default function P() {
  return (
    <Legal title="Livraison">
      <h2>Zones</h2>
      <p>France métropolitaine. Livraison internationale sur demande.</p>
      <h2>Créations faites main</h2>
      <p>Préparation en 2 à 5 jours ouvrés après le paiement (48 à 72 heures pour les pièces personnalisées, après réception de vos informations), puis expédition par <span className="todo">[transporteur]</span>. Comptez 4 à 10 jours ouvrés au total.</p>
      <h2>La Sélection</h2>
      <p>Expédiée directement par notre partenaire sous <span className="todo">[délai]</span>, livrée en <span className="todo">[délai]</span>.</p>
      <h2>Frais de port</h2>
      <p>Calculés au moment de la commande : <span className="todo">[grille tarifaire]</span>.</p>
      <h2>Colis abîmé ou perdu</h2>
      <p>Signalez-le dans les 7 jours suivant la date de livraison estimée : je m'occupe de la réclamation auprès du transporteur et vous propose un remplacement ou un remboursement.</p>
    </Legal>
  );
}
