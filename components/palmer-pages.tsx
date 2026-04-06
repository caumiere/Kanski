import Link from "next/link";
import { AkioHeroSection } from "@/components/akio-hero";
import { StackedScrollCards, type StackedScrollCardItem } from "@/components/stacked-scroll-cards";
import type { FaqEntry, PortfolioEntry } from "@/components/site-data";
import { contactEmail, faqEntries, featuredEntries, galleryEntries, portfolioEntries } from "@/components/site-data";

function DocumentLinks() {
  return (
    <div className="document-links">
      <a className="document-link" href="/documents/kandon-fears-resume.pdf" target="_blank" rel="noreferrer">
        Resume PDF
      </a>
      <a
        className="document-link"
        href="/documents/kandon-fears-cover-letter.docx"
        target="_blank"
        rel="noreferrer"
      >
        Cover Letter DOCX
      </a>
    </div>
  );
}

function SiteRail() {
  return (
    <nav className="site-dock" aria-label="Primary">
      <Link className="dock-avatar" href="/">
        <span>KF</span>
      </Link>

      <div className="dock-links">
        <Link className="dock-link" href="/">
          Home
        </Link>
        <Link className="dock-link" href="/work">
          Projects
        </Link>
        <Link className="dock-link" href="/archive">
          Journal
        </Link>
        <Link className="dock-link" href="/gallery">
          Gallery
        </Link>
      </div>

      <Link className="dock-cta" href="/contact">
        <span>Contact</span>
        <span aria-hidden="true">+</span>
      </Link>
    </nav>
  );
}

function SectionTag({
  left,
  center,
  right,
}: {
  left: string;
  center: string;
  right: string;
}) {
  return (
    <div className="section-tag">
      <span>{left}</span>
      <span>{center}</span>
      <span>{right}</span>
    </div>
  );
}

function toStackedCard(entry: PortfolioEntry): StackedScrollCardItem {
  return {
    id: String(Number.parseInt(entry.order, 10)),
    category: entry.category,
    title: entry.title,
    image: entry.thumbnailUrl,
    href: `/work/${entry.slug}`,
    alt: `${entry.title} preview`,
    blurb: entry.blurb,
  };
}

function MediaSurface({ entry }: { entry: PortfolioEntry }) {
  if (entry.kind === "video" && entry.thumbnailUrl) {
    return (
      <div
        className="media-surface media-surface--image"
        style={{ backgroundImage: `linear-gradient(180deg, rgba(8,8,8,.18), rgba(8,8,8,.62)), url(${entry.thumbnailUrl})` }}
      />
    );
  }

  return (
    <div className="media-surface media-surface--article">
      <span>{entry.clientLabel}</span>
      <strong>{entry.category}</strong>
      <p>{entry.dateLabel}</p>
    </div>
  );
}

function WorkCard({ entry }: { entry: PortfolioEntry }) {
  return (
    <Link className="work-card" href={`/work/${entry.slug}`}>
      <MediaSurface entry={entry} />
      <div className="work-card__meta">
        <div className="work-card__headline">
          <h3>{entry.title}</h3>
          <span>({entry.order})</span>
        </div>
        <p>{entry.category}</p>
      </div>
    </Link>
  );
}

function WorkList({ entries }: { entries: PortfolioEntry[] }) {
  return (
    <div className="work-list">
      {entries.map((entry) => (
        <Link className="work-row" href={`/work/${entry.slug}`} key={entry.slug}>
          <div className="work-row__copy">
            <div className="work-row__title">
              <span>{entry.title}</span>
              <span>{entry.title}</span>
              <span>{entry.title}</span>
            </div>
            <div className="work-row__meta">
              <span>({entry.order})</span>
              <span>{entry.category}</span>
            </div>
          </div>
          <div className="work-row__preview">
            <MediaSurface entry={entry} />
          </div>
        </Link>
      ))}
    </div>
  );
}

function FaqSection({ entries = faqEntries }: { entries?: FaqEntry[] }) {
  return (
    <section className="faq-block">
      <SectionTag left="© Help Center" center="(KJF® — 01)" right="Clarifications" />
      <div className="faq-heading">
        <div className="faq-heading__media" />
        <div>
          <h2>FAQ.</h2>
          <p>Answers about my reporting, hosting, and how this portfolio is organized.</p>
        </div>
      </div>
      <div className="faq-list">
        {entries.map((entry) => (
          <details className="faq-item" key={entry.id}>
            <summary>
              <span>{entry.id}</span>
              <span>{entry.question}</span>
            </summary>
            <p>{entry.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function ClosingSection() {
  return (
    <section className="closing-block closing-block--minimal">
      <div className="closing-footer">
        <span>Ready to connect?</span>
        <a className="closing-cta" href={`mailto:${contactEmail}`}>
          Email Me
        </a>
      </div>
    </section>
  );
}

function PageShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="palmer-shell">
      <SiteRail />
      <div className="page-column">{children}</div>
    </div>
  );
}

export function PalmerHomePage() {
  return (
    <PageShell>
      <AkioHeroSection />

      <section className="feature-block">
        <SectionTag left="© Selected Works" center="(KJF® — 02)" right="Featured Archive" />
        <StackedScrollCards cards={featuredEntries.slice(0, 4).map(toStackedCard)} />
      </section>

      <FaqSection />
      <ClosingSection />
    </PageShell>
  );
}

export function PalmerWorkIndexPage() {
  return (
    <PageShell>
      <section className="title-block">
        <div className="title-stack">
          <h1>All</h1>
          <h1>Works</h1>
        </div>
        <div className="title-meta">
          <h2>All Works</h2>
          <p>({portfolioEntries.length})</p>
        </div>
      </section>

      <WorkList entries={portfolioEntries} />
      <FaqSection />
      <ClosingSection />
    </PageShell>
  );
}

export function PalmerGalleryPage() {
  return (
    <PageShell>
      <section className="title-block">
        <div className="title-stack">
          <h1>Gallery</h1>
          <h1>View</h1>
        </div>
        <div className="title-meta">
          <h2>Featured Frames</h2>
          <p>(08)</p>
        </div>
      </section>

      <div className="card-grid">
        {galleryEntries.map((entry) => (
          <WorkCard entry={entry} key={entry.slug} />
        ))}
      </div>

      <ClosingSection />
    </PageShell>
  );
}

export function PalmerContactPage() {
  return (
    <PageShell>
      <section className="hero-block">
        <SectionTag left="© Contact" center="(KJF® — 09)" right="Reach Out" />
        <div className="hero-block__inner">
          <div className="hero-title">
            <h1>Contact</h1>
            <h1>Kandon</h1>
          </div>
          <div className="hero-copy">
            <p>
              If you want to talk about internship opportunities, reporting collaborations, or my
              portfolio, use the links below.
            </p>
            <DocumentLinks />
            <div className="contact-links">
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
              <a href="https://www.thefamuanonline.com/page/1/?s=Kandon+Fears" target="_blank" rel="noreferrer">
                The FAMUAN Archive
              </a>
            </div>
          </div>
        </div>
      </section>

      <FaqSection />
      <ClosingSection />
    </PageShell>
  );
}

export function PalmerWorkDetailPage({ entry }: { entry: PortfolioEntry }) {
  return (
    <PageShell>
      <section className="detail-block">
        <div className="detail-title">
          <h1>{entry.title} /</h1>
        </div>
        <div className="detail-summary-block">
          <p>{entry.dateLabel}</p>
          <p>{entry.blurb}</p>
          <dl className="detail-specs">
            <div>
              <dt>Category:</dt>
              <dd>{entry.category}</dd>
            </div>
            <div>
              <dt>Client:</dt>
              <dd>{entry.clientLabel}</dd>
            </div>
            <div>
              <dt>Duration:</dt>
              <dd>{entry.durationLabel}</dd>
            </div>
            <div>
              <dt>Location:</dt>
              <dd>{entry.locationLabel}</dd>
            </div>
          </dl>
          <a className="detail-live-link" href={entry.sourceUrl} target="_blank" rel="noreferrer">
            {entry.kind === "video" ? "Live Website" : "Read Article"}
          </a>
        </div>
      </section>

      <section className="detail-media-section">
        {entry.kind === "video" && entry.videoId && entry.startAt !== undefined ? (
          <div className="detail-embed">
            <iframe
              title={entry.title}
              src={`https://www.youtube-nocookie.com/embed/${entry.videoId}?start=${entry.startAt}&rel=0`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="detail-article-surface">
            <span>{entry.clientLabel}</span>
            <h2>{entry.title}</h2>
            <p>{entry.blurb}</p>
          </div>
        )}
      </section>

      <section className="more-works-block">
        <SectionTag left="© Selected Works" center="(KJF® — 02)" right="More Works" />
        <div className="card-grid">
          {portfolioEntries
            .filter((item) => item.slug !== entry.slug)
            .slice(0, 4)
            .map((item) => (
              <WorkCard entry={item} key={item.slug} />
            ))}
        </div>
      </section>

      <FaqSection />
      <ClosingSection />
    </PageShell>
  );
}
