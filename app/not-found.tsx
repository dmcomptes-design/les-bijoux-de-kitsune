import Link from "next/link";
export default function NotFound() {
  return (
    <div className="container center stack" style={{ alignItems: "center", padding: "96px 16px" }}>
      <h1>Cette page s'est éclipsée.</h1>
      <p className="lead">Le renard n'a rien trouvé à cette adresse.</p>
      <Link href="/boutique" className="btn btn-primary">Retour à la boutique</Link>
    </div>
  );
}
