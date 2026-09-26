"use client";

import { useState } from "react";

export default function ContactForm() {
  const [objet, setObjet] = useState("Question sur une commande");
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [err, setErr] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (!String(fd.get("nom")).trim() || !String(fd.get("email")).includes("@") || !String(fd.get("message")).trim()) {
      setErr("Indiquez votre nom, une adresse e-mail valide et votre message.");
      return;
    }
    setErr("");
    setState("sending");
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(fd as unknown as Record<string, string>).toString(),
      });
      setState(res.ok ? "sent" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "sent") return <p className="panel" role="status">Merci, votre message est bien arrivé. Je vous réponds très vite.</p>;

  return (
    <form name="contact" onSubmit={onSubmit} className="stack" style={{ gap: 20, maxWidth: 640 }} noValidate>
      <input type="hidden" name="form-name" value="contact" />
      <p hidden><label>Ne pas remplir <input name="bot-field" /></label></p>
      <div className="field"><label htmlFor="nom">Prénom et nom</label><input id="nom" name="nom" className="input" autoComplete="name" required /></div>
      <div className="field"><label htmlFor="email">E-mail</label><input id="email" name="email" type="email" className="input" autoComplete="email" required /></div>
      <div className="field">
        <label htmlFor="objet">Objet</label>
        <select id="objet" name="objet" className="select" value={objet} onChange={(e) => setObjet(e.target.value)}>
          <option>Question sur une commande</option><option>Bijou sur demande</option><option>Autre</option>
        </select>
      </div>
      {objet === "Bijou sur demande" && (
        <div className="field">
          <label htmlFor="projet">Votre projet</label>
          <textarea id="projet" name="projet" className="textarea" placeholder="Pour qui, l'occasion, les couleurs ou pierres qui vous parlent, votre budget" />
        </div>
      )}
      <div className="field"><label htmlFor="message">Message</label><textarea id="message" name="message" className="textarea" required /></div>
      {err && <p role="alert" style={{ color: "var(--erreur)", fontSize: 14 }}>{err}</p>}
      {state === "error" && <p role="alert" style={{ color: "var(--erreur)", fontSize: 14 }}>L'envoi n'a pas abouti. Réessayez, ou écrivez-moi directement par e-mail.</p>}
      <button type="submit" className="btn btn-primary" style={{ alignSelf: "flex-start" }} disabled={state === "sending"}>{state === "sending" ? "Envoi…" : "Envoyer"}</button>
    </form>
  );
}
