import Link from "next/link";
import type { FaqEntry, PortfolioEntry } from "@/components/site-data";
import { faqEntries, featuredEntries, galleryEntries, portfolioEntries } from "@/components/site-data";

function RollingLink({ href, label }: { href: string; label: string }) {
  return (
    <Link className="rolling-link" href={href}>
      <span>{label}</span>
      <span aria-hidden="true">{label}</span>
    </Link>
  );
}

function SiteRail() {
  return (
    <aside className="site-rail">
      <Link className="brand-mark" href="/">
        Kandon®
      </Link>

      <div className="rail-group">
        <p className="rail-label">Quick Links</p>
        <nav className="rail-nav">
          <RollingLink href="/" label="Home" />
          <RollingLink href="/gallery" label="Gallery" />
          <RollingLink href="/work" label="Work" />
          <RollingLink href="/contact" label="Contact" />
        </nav>
      </div>

      <div className="rail-meta">
        <p>Based in Tallahassee, Florida</p>
        <p>Broadcast Journalism Scholar + Multimedia Host</p>
      </div>
    </aside>
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
      <SectionTag left="© Help Center ヘルプ" center="(WDX® — 01)" right="Clarifications" />
      <div className="faq-heading">
        <div className="faq-heading__media" />
        <div>
          <h2>FAQ.</h2>
          <p>Clarifying the reporting, hosting, and portfolio structure with direct answers.</p>
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
    <section className="closing-block">
      <SectionTag left="© Final Section クロージング" center="(WDX® — 12)" right="Studio Wrap" />
      <div className="closing-grid">
        {galleryEntries.slice(0, 7).map((entry) => (
          <div className="closing-tile" key={entry.slug}>
            <MediaSurface entry={entry} />
          </div>
        ))}
      </div>
      <div className="closing-copy">
        <div className="closing-copy__kicker">
          <span>Independent</span>
          <span>Overview</span>
          <span>Multidisciplinary</span>
          <span>Focused</span>
        </div>
        <p>
          Kandon Fears is a Florida A&amp;M University broadcast journalism scholar with a portfolio
          spanning on-camera work, segment production, and published reporting.
        </p>
        <a className="closing-cta" href="mailto:kandon@example.com">
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
      <section className="hero-block">
        <SectionTag left="© Kandon Fears アーカイブ" center="(WDX® — 00)" right="Broadcast Portfolio" />
        <div className="hero-block__inner">
          <div className="hero-title">
            <h1>Kandon Fears</h1>
            <h1>Portfolio</h1>
          </div>
          <div className="hero-copy">
            <p>
              Broadcast journalism scholar at Florida A&amp;M University with published work from
              The FAMUAN and on-camera samples from Word Around Campus and Venom Affairs.
            </p>
            <RollingLink href="/work" label="View Work" />
          </div>
        </div>
      </section>

      <section className="feature-block">
        <SectionTag left="© Selected Works こんにちは" center="(WDX® — 02)" right="Featured Archive" />
        <div className="card-grid">
          {featuredEntries.map((entry) => (
            <WorkCard entry={entry} key={entry.slug} />
          ))}
        </div>
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
        <SectionTag left="© Contact セクション" center="(WDX® — 09)" right="Reach Out" />
        <div className="hero-block__inner">
          <div className="hero-title">
            <h1>Contact</h1>
            <h1>Kandon</h1>
          </div>
          <div className="hero-copy">
            <p>
              For internship opportunities, reporting collaborations, or portfolio inquiries, use
              the contact links below.
            </p>
            <div className="contact-links">
              <a href="mailto:kandon@example.com">kandon@example.com</a>
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
        <SectionTag left="© Selected Works こんにちは" center="(WDX® — 02)" right="More Works" />
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
