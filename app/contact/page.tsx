import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHead from "@/components/PageHead";

export const metadata: Metadata = { title: "Contact et bijou sur demande", description: "Une question, une idée de création ? Écrivez-moi." };

export default function Contact() {
  return (
    <div className="container">
      <PageHead crumb="Contact" title={<>Parlons de <em>votre bijou.</em></>} lead="Une question sur une commande, une pierre, une taille ? Une idée de création pour vous ou pour quelqu'un que vous aimez ? Écrivez-moi : je vous réponds personnellement." />
      <div style={{ display: "grid", gap: 48, gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", alignItems: "start" }}>
        <ContactForm />
        <div className="panel stack">
          <h3>Coordonnées</h3>
          <p className="muted">E-mail : <span className="todo">[adresse unique à définir]</span></p>
          <p className="muted">Instagram : <span className="todo">[lien]</span></p>
          <p className="muted">Délai de réponse : <span className="todo">[par exemple 48 heures]</span></p>
        </div>
      </div>
    </div>
  );
}
