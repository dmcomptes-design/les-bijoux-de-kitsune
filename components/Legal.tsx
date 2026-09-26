import PageHead from "./PageHead";

export default function Legal({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="container">
      <PageHead crumb={title} title={title} />
      <div className="prose">
        <p className="note">Page reprise du site actuel, à relire et compléter avant le lancement. Les éléments en rouge sont à renseigner.</p>
        {children}
      </div>
    </div>
  );
}
