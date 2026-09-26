import Link from "next/link";

export default function PageHead({ crumb, title, lead, eyebrow }: { crumb: string; title: React.ReactNode; lead?: string; eyebrow?: string }) {
  return (
    <div className="page-head">
      <nav className="crumbs" aria-label="Fil d'Ariane"><Link href="/">Accueil</Link><span>/</span><span>{crumb}</span></nav>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h1>{title}</h1>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}
