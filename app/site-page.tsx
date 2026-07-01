import Image from "next/image";
import { SiteContent } from "./site-content";

export default function SitePage({ content }: { content: SiteContent }) {
  const ids =
    content.locale === "tr"
      ? {
          about: "hakkimizda",
          questions: "sorular",
          stages: "asamalar",
          method: "yontem",
          team: "ekip",
          contact: "iletisim",
        }
      : {
          about: "about",
          questions: "questions",
          stages: "stages",
          method: "method",
          team: "team",
          contact: "contact",
        };

  return (
    <main className={content.dir === "rtl" ? "rtl" : ""}>
      <nav className="site-nav" aria-label="Main menu">
        <a className="brand" href="#hero">
          <span>{content.heroTitle}</span>
          <small>{content.brandSubtitle}</small>
        </a>
        <div className="nav-links">
          {content.navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <section id="hero" className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="kicker">{content.kicker}</p>
          <h1>{content.heroTitle}</h1>
          <p className="hero-subtitle">{content.heroSubtitle}</p>
          <div className="translation-links" aria-label="Language options">
            {content.translationLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="hero-actions">
            <a className="primary-action" href={`#${ids.about}`}>
              {content.primaryAction}
            </a>
            <a className="secondary-action" href={`#${ids.stages}`}>
              {content.secondaryAction}
            </a>
          </div>
        </div>
        <div className="hero-stats" aria-label="Project summary">
          {content.stats.map((item) => (
            <div key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id={ids.about} className="section light-section">
        <SectionTitle eyebrow="◆" title={content.sectionTitles.about} />
        <div className="text-grid">
          {content.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section id={ids.questions} className="section questions-section">
        <SectionTitle eyebrow="◆" title={content.sectionTitles.questions} tone="dark" />
        <div className="question-grid">
          {content.coreQuestions.map((question, index) => (
            <article className="numbered-card" key={question}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{question}</p>
            </article>
          ))}
        </div>
      </section>

      <section id={ids.stages} className="section light-section">
        <SectionTitle eyebrow="◆" title={content.sectionTitles.stages} />
        <div className="stage-grid">
          {content.projectStages.map((stage, index) => (
            <article className="stage-card" key={stage.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{stage.title}</h3>
              <p>{stage.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id={ids.method} className="section method-section">
        <SectionTitle eyebrow="◆" title={content.sectionTitles.method} tone="dark" />
        <div className="method-grid">
          <article>
            <h3>{content.method.firstTitle}</h3>
            <p>{content.method.firstText}</p>
          </article>
          <article>
            <h3>{content.method.secondTitle}</h3>
            <p>{content.method.secondText}</p>
          </article>
        </div>
      </section>

      <section className="section goals-section">
        <SectionTitle eyebrow="◆" title={content.sectionTitles.goals} />
        <div className="goal-list">
          {content.goals.map((goal, index) => (
            <div key={goal} className="goal-row">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{goal}</p>
            </div>
          ))}
        </div>
      </section>

      <section id={ids.team} className="section dark-section final-section">
        <SectionTitle eyebrow="◆" title={content.sectionTitles.team} tone="dark" />
        <p className="team-intro">{content.teamIntro}</p>
        <div className="team-sections">
          {content.teamSections.map((section) => (
            <section key={section.title} className="team-section-block">
              <div className="team-section-header">
                <span>{section.title}</span>
                <p>{section.description}</p>
              </div>
              <div className="team-grid">
                {section.members.map((member) => (
                  <article key={member.name} className="team-member-card">
                    <div className="team-member-media">
                      {member.image ? (
                        <Image src={member.image} alt={member.name} width={720} height={840} />
                      ) : (
                        <div className="team-member-fallback" aria-hidden="true">
                          {member.name
                            .split(" ")
                            .slice(0, 2)
                            .map((part) => part[0])
                            .join("")}
                        </div>
                      )}
                    </div>
                    <div className="team-member-copy">
                      <p className="team-member-role">{member.role}</p>
                      <h3>{member.name}</h3>
                      {member.affiliation ? (
                        <p className="team-member-affiliation">{member.affiliation}</p>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section id={ids.contact} className="section light-section contact-section">
        <SectionTitle eyebrow="◆" title={content.sectionTitles.contact} />
        <div className="contact-card">
          <div className="contact-row">
            <span>{content.contact.phoneLabel}</span>
            <a href="tel:+902167774764">{content.contact.phoneValue}</a>
          </div>
          <div className="contact-row">
            <span>{content.contact.addressLabel}</span>
            <a href={content.contact.addressHref}>{content.contact.addressValue}</a>
          </div>
          <div className="contact-row">
            <span>{content.contact.emailLabel}</span>
            <a href={`mailto:${content.contact.emailValue}`}>{content.contact.emailValue}</a>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionTitle({
  eyebrow,
  title,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className={`section-title ${tone === "dark" ? "section-title-dark" : ""}`}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
}
