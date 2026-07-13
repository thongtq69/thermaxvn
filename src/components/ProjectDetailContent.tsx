import Link from "next/link";
import type { Locale } from "../lib/i18n";
import type { ProjectDetail } from "../lib/projectDetails";

export function ProjectDetailContent({ project, locale }: { project: ProjectDetail; locale: Locale }) {
  const labels = locale === "vi"
    ? {
        facts: "Thông tin chính",
        source: "Xem nội dung gốc trên Thermax Global",
        contact: "Trao đổi về dự án",
        back: "Xem các dự án khác",
      }
    : {
        facts: "Project facts",
        source: "View original content on Thermax Global",
        contact: "Discuss your project",
        back: "Explore other projects",
      };

  return (
    <article className="project-detail">
      <section className="project-detail-intro" data-reveal>
        <div className="project-detail-intro-copy">
          <p className="project-detail-eyebrow">{project.eyebrow[locale]}</p>
          <h2>{project.title[locale]}</h2>
          <p>{project.summary[locale]}</p>
        </div>
        <aside className="project-detail-facts" aria-label={labels.facts}>
          {project.facts.map((fact) => (
            <div key={fact.label.en}>
              <span>{fact.label[locale]}</span>
              <strong>{fact.value[locale]}</strong>
            </div>
          ))}
        </aside>
      </section>

      <div className="project-detail-sections">
        {project.sections.map((section, index) => (
          <section className="project-detail-section" key={section.title.en} data-reveal>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div className="project-detail-section-copy">
              <h2>{section.title[locale]}</h2>
              {section.paragraphs?.map((paragraph) => <p key={paragraph.en}>{paragraph[locale]}</p>)}
              {section.bullets ? (
                <ul>
                  {section.bullets.map((bullet) => <li key={bullet.en}>{bullet[locale]}</li>)}
                </ul>
              ) : null}
            </div>
            <figure className="project-detail-section-media">
              <img
                src={section.image}
                alt={section.imageAlt[locale]}
                width="860"
                height="550"
                loading="lazy"
              />
            </figure>
          </section>
        ))}
      </div>

      <section className="project-detail-actions" data-reveal>
        <div>
          <p>{locale === "vi" ? "Cần một giải pháp được thiết kế theo yêu cầu?" : "Need an engineered solution for your project?"}</p>
          <h2>{locale === "vi" ? "Kết nối với Thermax Vietnam" : "Connect with Thermax Vietnam"}</h2>
        </div>
        <div className="project-detail-action-links">
          <Link className="project-detail-primary-link" href="/contact-us">{labels.contact}</Link>
          <Link href="/business-portfolio/industrial-infrastructure#solutions">{labels.back}</Link>
          <a href={project.sourceUrl} target="_blank" rel="noreferrer">{labels.source}</a>
        </div>
      </section>
    </article>
  );
}
