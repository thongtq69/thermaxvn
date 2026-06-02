type InnerHeroProps = {
  title: React.ReactNode;
  ariaTitle?: string;
  description?: string;
  image: string;
  mobileImage?: string;
  breadcrumb?: { label: string; href?: string }[];
  homeLabel?: string;
};

export function InnerHero({
  title,
  ariaTitle,
  description,
  image,
  mobileImage,
  breadcrumb,
  homeLabel = "Home",
}: InnerHeroProps) {
  const a11yTitle = ariaTitle ?? (typeof title === "string" ? title : "");
  return (
    <>
      <section className="inner-banner" aria-label={a11yTitle} data-title={a11yTitle}>
        <picture>
          {mobileImage ? <source srcSet={mobileImage} media="(max-width: 767px)" /> : null}
        <img src={image} alt="" fetchPriority="high" loading="eager" />
        </picture>
        <div className="inner-banner-text">
          <div className="inner-banner-text-inner">
            <h1>{title}</h1>
            {description ? <div className="inner-banner-desc">{description}</div> : null}
          </div>
        </div>
      </section>
      {breadcrumb && breadcrumb.length > 0 ? (
        <nav className="breadcrumb-bar" aria-label="Breadcrumb">
          <a href="/">{homeLabel}</a>
          {breadcrumb.map((bc, i) => (
            <span key={i}>
              <span aria-hidden="true">›</span>
              {bc.href ? <a href={bc.href}>{bc.label}</a> : bc.label}
            </span>
          ))}
        </nav>
      ) : null}
    </>
  );
}
