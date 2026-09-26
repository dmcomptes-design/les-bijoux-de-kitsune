import Legal from "@/components/Legal";
export const metadata = { title: "Mentions légales" };
export default function P() {
  return (
    <Legal title="Mentions légales">
      <h2>Éditeur</h2>
      <p><span className="todo">[Nom de l'entité, forme juridique, SIRET, adresse, directeur de la publication, e-mail, téléphone]</span></p>
      <h2>Hébergement</h2>
      <p>Netlify, Inc. <span className="todo">[adresse de l'hébergeur]</span></p>
      <h2>Propriété intellectuelle</h2>
      <p>Le logo, les textes et les photographies du site appartiennent aux Bijoux de Kitsune. Toute reproduction sans accord est interdite.</p>
    </Legal>
  );
}
