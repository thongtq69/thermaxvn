type IntroBlockProps = {
  headline: React.ReactNode;
  body: React.ReactNode;
  stats?: { value: string; label: string }[];
};

export function IntroBlock({ headline, body, stats }: IntroBlockProps) {
  return (
    <section className="inner-intro" data-section="intro">
      <div className="inner-intro-grid" data-reveal>
        <h2>{headline}</h2>
        <div>{body}</div>
      </div>
      {stats && stats.length > 0 ? (
        <div className="inner-intro-stats" data-reveal>
          {stats.map((s) => (
            <div className="inner-intro-stats-item" key={s.label}>
              <strong>{s.value}</strong>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}
