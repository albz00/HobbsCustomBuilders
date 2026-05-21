import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { resourceCategories, resourcesDisclaimer } from '../content/resources';
import { LICENSE } from '../content/site';

function linkHost(href: string) {
  try {
    return new URL(href).hostname.replace(/^www\./, '');
  } catch {
    return href;
  }
}

function Resources() {
  return (
    <>
      <PageHero
        eyebrow="Resource index"
        title="West Virginia project links"
        description="A quick-reference index of permits, licensing, codes, financing, and local contacts for homeowners in the Greenbrier Valley."
        image="https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/817e324f-6387-41a0-c5e9-a67a15a65000/public"
        primaryCta={{ label: 'Talk with our crew', to: '/contact' }}
      />

      <section className="relative border-b border-zinc-200 bg-zinc-50 py-14 md:py-18">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-hobbs-gold-dim">Index</p>
            <h2 className="mt-3 font-display text-3xl tracking-[0.02em] text-zinc-900 md:text-4xl">
              Jump to a section
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-zinc-600">
              Links open in a new tab. Use this page like a reference sheet while you plan a custom home, addition,
              deck, or remodel.
            </p>
          </div>

          <nav
            className="mt-10 border border-zinc-200 bg-white p-6 shadow-[0_16px_40px_-32px_rgba(8,25,48,0.35)] md:p-8"
            aria-label="Resource index sections"
          >
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {resourceCategories.map((category) => (
                <li key={category.id}>
                  <a
                    href={`#${category.id}`}
                    className="font-semibold text-[15px] leading-snug text-zinc-900 transition-colors hover:text-hobbs-navy"
                  >
                    {category.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <section className="relative bg-white py-14 md:py-18">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 flex flex-col gap-3 border-b border-zinc-200 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-hobbs-gold-dim">Entries</p>
              <p className="mt-2 text-sm text-zinc-500">
                {resourceCategories.reduce((count, category) => count + category.links.length, 0)} links across{' '}
                {resourceCategories.length} sections
              </p>
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-hobbs-gold-dim">{LICENSE}</p>
          </div>

          <div className="divide-y divide-zinc-200">
            {resourceCategories.map((category) => (
              <section
                key={category.id}
                id={category.id}
                className="scroll-mt-44 py-10 first:pt-0 md:scroll-mt-52"
                aria-labelledby={`${category.id}-heading`}
              >
                <header className="mb-6 max-w-3xl">
                  <h3
                    id={`${category.id}-heading`}
                    className="font-display text-2xl tracking-[0.02em] text-zinc-900 md:text-[1.75rem]"
                  >
                    {category.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-zinc-600">{category.description}</p>
                </header>

                <ul className="border border-zinc-200 bg-zinc-50/70">
                  {category.links.map((link) => (
                    <li
                      key={link.href}
                      className="border-b border-zinc-200 last:border-b-0"
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group grid gap-2 px-4 py-4 transition-colors hover:bg-white md:grid-cols-[minmax(0,16rem)_minmax(0,1fr)_auto] md:items-start md:gap-6 md:px-5 md:py-4"
                      >
                        <span className="font-semibold text-zinc-900 transition-colors group-hover:text-hobbs-navy">
                          {link.title}
                        </span>
                        <span className="text-[15px] leading-relaxed text-zinc-600 md:col-start-2">{link.description}</span>
                        <span className="text-[12px] font-medium tracking-[0.04em] text-zinc-400 transition-colors group-hover:text-hobbs-gold-dim md:text-right">
                          {linkHost(link.href)}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <p className="mt-12 max-w-3xl border-t border-zinc-200 pt-8 text-sm leading-relaxed text-zinc-500">
            {resourcesDisclaimer}
          </p>

          <p className="mt-8 text-sm text-zinc-600">
            Need help sorting through it?{' '}
            <Link
              to="/contact"
              className="font-semibold text-hobbs-navy underline decoration-hobbs-gold/40 underline-offset-2 hover:text-hobbs-gold-dim"
            >
              Contact Hobbs Custom Builders
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

export default Resources;
