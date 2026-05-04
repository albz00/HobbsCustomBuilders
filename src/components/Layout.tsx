import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const logoSrc =
  'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/176c6257-0778-4226-e518-009db2acaf00/public';

const navItems = [
  { href: '#services', label: 'Builds' },
  { href: '#projects', label: 'Work' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Quote' }
];

function MaterialIcon({ name, className = '' }: { name: string; className?: string }) {
  return (
    <span className={`material-symbols-rounded ${className}`} aria-hidden>
      {name}
    </span>
  );
}

function BrandIcon({ brand }: { brand: 'facebook' | 'youtube' | 'google' }) {
  if (brand === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.19 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.24 0-1.63.77-1.63 1.56v1.91h2.77l-.44 2.91h-2.33V22C18.34 21.25 22 17.08 22 12.06z"
        />
      </svg>
    );
  }

  if (brand === 'youtube') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42a2.5 2.5 0 0 0-1.76 1.77C2 8.77 2 12.06 2 12.06s0 3.29.42 4.87a2.5 2.5 0 0 0 1.76 1.74C5.75 19.09 12 19.09 12 19.09s6.25 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.74c.42-1.58.42-4.87.42-4.87s0-3.29-.42-4.87zM10 15.03V9.09l5.2 2.97L10 15.03z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <path fill="#4285F4" d="M21.8 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.5c-.2 1.3-1 2.4-2.1 3.1v2.6h3.4c2-1.8 3-4.5 3-7.6z" />
      <path fill="#34A853" d="M12 22c2.8 0 5.2-.9 6.9-2.5l-3.4-2.6c-.9.6-2.1 1-3.5 1-2.7 0-5-1.8-5.8-4.3H2.7v2.7C4.4 19.7 7.9 22 12 22z" />
      <path fill="#FBBC05" d="M6.2 13.6c-.2-.6-.3-1.2-.3-1.9s.1-1.3.3-1.9V7.1H2.7C2 8.5 1.6 10.1 1.6 11.8S2 15 2.7 16.3l3.5-2.7z" />
      <path fill="#EA4335" d="M12 5.8c1.5 0 2.9.5 3.9 1.5l2.9-2.9C17.1 2.8 14.8 2 12 2 7.9 2 4.4 4.3 2.7 7.1l3.5 2.7C7 7.6 9.3 5.8 12 5.8z" />
    </svg>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSocialsOpen, setIsSocialsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [hasClearedHero, setHasClearedHero] = useState(false);

  const copyWebsite = async () => {
    await navigator.clipboard.writeText(window.location.origin);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setHasClearedHero(window.scrollY > window.innerHeight * 0.82);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const navLink =
    'relative inline-flex items-center pb-2 text-[14px] font-bold uppercase tracking-[0.14em] text-hobbs-navy/75 transition-colors duration-200 after:pointer-events-none after:absolute after:inset-x-0 after:-bottom-[1px] after:h-[3px] after:origin-left after:scale-x-0 after:rounded-sm after:bg-gradient-to-r after:from-hobbs-gold after:to-hobbs-gold-bright after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] after:content-[""] hover:text-hobbs-navy hover:after:scale-x-100 motion-reduce:after:transition-none';

  const navChrome = isScrolled
    ? 'shadow-[0_18px_48px_-16px_rgba(8,25,48,0.34)] translate-y-px'
    : 'shadow-[0_22px_52px_-16px_rgba(17,40,74,0.32)]';

  const navPadding = isScrolled ? 'py-2.5 md:py-3' : 'py-3 md:py-3.5';

  return (
    <div className="min-h-screen bg-white">
      <nav className="pointer-events-none fixed left-0 right-0 top-0 z-50">
        <div className="pointer-events-auto px-4 pt-4 sm:px-6 md:pt-5">
          <div
            className={`relative mx-auto max-w-6xl overflow-hidden rounded-sm bg-white transition-[box-shadow,transform] duration-300 ${navChrome}`}
          >
            <div className="h-1 w-full shrink-0 bg-gradient-to-r from-hobbs-gold via-hobbs-gold-bright to-hobbs-gold" aria-hidden />
            <div
              className={`relative grid grid-cols-[1fr_auto] items-center gap-5 bg-gradient-to-b from-hobbs-navy/[0.04] via-white to-white px-5 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:px-7 ${navPadding}`}
            >
              <Link
                to="/"
                className="group flex flex-shrink-0 items-center justify-self-start rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-hobbs-gold/55 focus-visible:ring-offset-2"
              >
                <img
                  src={logoSrc}
                  alt="Hobbs Custom Builders"
                  width={560}
                  height={160}
                  className="h-9 w-auto max-w-[min(58vw,16rem)] object-contain object-left transition-[opacity,transform] duration-300 group-hover:-translate-y-0.5 group-hover:opacity-90 sm:h-10 sm:max-w-[min(62vw,18rem)] md:h-11 md:max-w-none"
                  loading="eager"
                  decoding="async"
                />
              </Link>

              <div className="hidden items-center justify-center gap-7 justify-self-center md:flex xl:gap-9">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className={navLink}>
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="flex flex-shrink-0 items-center justify-end gap-3 justify-self-end">
                <a
                  href="tel:+13046679343"
                  className="btn-cut btn-fill-pop hidden items-center justify-center whitespace-nowrap px-5 py-2.5 text-[14px] font-bold uppercase tracking-[0.14em] md:inline-flex md:px-6"
                >
                  304-667-9343
                </a>

                <div className="flex items-center gap-3 md:hidden">
                  <a
                    href="tel:+13046679343"
                    className="whitespace-nowrap text-[14px] font-bold uppercase tracking-[0.14em] text-hobbs-navy"
                  >
                    Call
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="btn-cut btn-soft-pop -mr-1 p-2 text-zinc-800 hover:text-hobbs-navy"
                    aria-label="Open menu"
                  >
                    <MaterialIcon name="menu" className="text-[1.55rem] leading-none" />
                  </button>
                </div>
              </div>
            </div>
            <div
              className="pointer-events-none absolute bottom-1 left-0 top-0 z-[35] w-1 shrink-0 bg-gradient-to-b from-hobbs-gold via-hobbs-gold-bright to-hobbs-gold"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-0 right-0 top-1 z-[35] w-1 shrink-0 bg-gradient-to-t from-hobbs-navy-deep via-hobbs-navy to-hobbs-navy/50"
              aria-hidden
            />
            <div className="h-1 w-full shrink-0 bg-gradient-to-r from-hobbs-navy-deep via-hobbs-navy to-hobbs-navy-deep" aria-hidden />
            <div className="noise-overlay rounded-sm" aria-hidden />
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-[55] bg-zinc-900/45 backdrop-blur-[2px] md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed right-0 top-0 z-[60] h-full w-[min(88vw,20rem)] border-l border-zinc-200 bg-white/97 shadow-[-12px_0_40px_-8px_rgba(0,0,0,0.12)] backdrop-blur-xl md:hidden">
            <div className="p-6 pt-8">
              <div className="mb-10 flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-cut btn-soft-pop p-2 text-zinc-700 hover:text-hobbs-navy"
                  aria-label="Close menu"
                >
                  <MaterialIcon name="close" className="text-[1.35rem] leading-none" />
                </button>
              </div>
              <nav className="space-y-1">
                {navItems.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block border-l-2 border-transparent px-4 py-3 text-[14px] font-bold uppercase tracking-[0.13em] text-zinc-500 transition-[background-color,border-color,color,transform] duration-200 hover:translate-x-1 hover:border-hobbs-gold hover:bg-zinc-50/80 hover:text-zinc-900"
                  >
                    {label}
                  </a>
                ))}
              </nav>
              <a
                href="tel:+13046679343"
                className="btn-cut btn-fill-pop mt-10 block py-3.5 text-center text-[14px] font-bold uppercase tracking-[0.14em]"
              >
                304-667-9343
              </a>
            </div>
          </div>
        </>
      )}

      <main>{children}</main>

      <footer className="relative overflow-hidden border-t border-hobbs-navy-deep bg-hobbs-navy-deep px-6 py-14 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(201,164,61,0.18),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent_42%)]" aria-hidden />
        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)_minmax(0,0.8fr)] md:items-start">
            <div>
              <Link to="/" className="inline-flex rounded-sm bg-white px-4 py-3">
                <img
                  src={logoSrc}
                  alt="Hobbs Custom Builders"
                  width={560}
                  height={160}
                  className="h-10 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </Link>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-white/72">
                Custom homes, additions, decks, specialty spaces, and signature details. We combine your vision with our expertise to bring dream builds to life.
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-display text-2xl tracking-wide text-white">On this page</h4>
              <ul className="space-y-2 text-sm text-white/72">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="transition-colors hover:text-hobbs-gold-bright">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-display text-2xl tracking-wide text-white">Contact</h4>
              <div className="space-y-3 text-sm text-white/72">
                <a href="tel:+13046679343" className="block transition-colors hover:text-hobbs-gold-bright">
                  304-667-9343
                </a>
                <a href="mailto:info@hobbscustombuilders.com" className="block transition-colors hover:text-hobbs-gold-bright">
                  info@hobbscustombuilders.com
                </a>
                <p>
                  PO Box 46<br />
                  White Sulphur Springs, WV 24986
                </p>
                <p>WV license #WV061746</p>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/12 pt-6 text-sm text-white/55">
            <p>Copyright 2026 Hobbs Custom Builders. All rights reserved.</p>
            <p className="mt-3">
              Demo made by{' '}
              <a
                href="https://hostverna.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/72 underline decoration-white/25 underline-offset-2 transition-colors hover:text-hobbs-gold-bright"
              >
                HostVerna
              </a>
            </p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 z-50">
        {isSocialsOpen && (
          <div className="mb-4 max-h-[min(calc(100vh-11rem),34rem)] w-[min(20rem,calc(100vw-3rem))] overflow-y-auto overflow-x-hidden rounded-lg border border-zinc-200 bg-white shadow-2xl animate-in slide-in-from-bottom-4">
            <div className="flex items-center justify-between bg-gradient-to-r from-hobbs-navy to-hobbs-navy-deep p-4 text-white">
              <h3 className="text-lg font-bold">Connect With Us</h3>
              <button
                type="button"
                onClick={() => setIsSocialsOpen(false)}
                className="btn-cut p-1.5 text-white transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-white/20"
                aria-label="Close social links"
              >
                <MaterialIcon name="close" className="text-[1.35rem] leading-none" />
              </button>
            </div>
            <div className="space-y-3 p-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-lg border border-transparent p-3 transition-[background-color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-hobbs-gold/25 hover:bg-zinc-50"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white transition-transform group-hover:scale-105">
                  <BrandIcon brand="facebook" />
                </span>
                <span className="font-medium text-zinc-700">Facebook</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-lg border border-transparent p-3 transition-[background-color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-hobbs-gold/25 hover:bg-zinc-50"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-500 text-white transition-transform group-hover:scale-105">
                  <BrandIcon brand="youtube" />
                </span>
                <span className="font-medium text-zinc-700">YouTube</span>
              </a>
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-lg border border-transparent p-3 transition-[background-color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-hobbs-gold/25 hover:bg-zinc-50"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-zinc-200 transition-transform group-hover:scale-105">
                  <BrandIcon brand="google" />
                </span>
                <span className="font-medium text-zinc-700">Google</span>
              </a>
              <button
                type="button"
                onClick={copyWebsite}
                className="btn-cut btn-soft-pop group flex w-full items-center gap-3 p-3 text-left"
              >
                <div className="rounded-lg bg-zinc-700 p-2 text-white transition-transform group-hover:scale-110">
                  <MaterialIcon name={copied ? 'check' : 'content_copy'} className="text-[1.25rem] leading-none" />
                </div>
                <span className="font-medium text-zinc-700">
                  {copied ? 'Copied!' : 'Copy Website Link'}
                </span>
              </button>
              <div className="mt-3 space-y-3 border-t border-zinc-200 pt-3">
                <a
                  href="mailto:info@hobbscustombuilders.com"
                  className="group flex items-center gap-3 rounded-lg border border-transparent p-3 transition-[background-color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-hobbs-gold/25 hover:bg-zinc-50"
                >
                  <div className="rounded-lg bg-gradient-to-br from-hobbs-navy to-hobbs-navy-deep p-2 text-white transition-transform group-hover:scale-110">
                    <MaterialIcon name="mail" className="text-[1.25rem] leading-none" />
                  </div>
                  <span className="text-sm font-medium text-zinc-700">info@hobbscustombuilders.com</span>
                </a>
                <a
                  href="tel:+13046679343"
                  className="group flex items-center gap-3 rounded-lg border border-transparent p-3 transition-[background-color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-hobbs-gold/25 hover:bg-zinc-50"
                >
                  <div className="rounded-lg bg-gradient-to-br from-hobbs-navy to-hobbs-navy-deep p-2 text-white transition-transform group-hover:scale-110">
                    <MaterialIcon name="call" className="text-[1.25rem] leading-none" />
                  </div>
                  <span className="font-medium text-zinc-700">304-667-9343</span>
                </a>
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-col items-end gap-3">
          {hasClearedHero && (
            <button
              type="button"
              onClick={scrollToTop}
              className="btn-cut btn-line-pop inline-flex h-14 w-14 shrink-0 items-center justify-center shadow-xl active:translate-y-0"
              aria-label="Scroll to top"
            >
              <MaterialIcon name="keyboard_arrow_up" className="text-[2rem] leading-none" />
            </button>
          )}
          <button
            type="button"
            onClick={() => setIsSocialsOpen(!isSocialsOpen)}
            className="btn-cut btn-fill-pop inline-flex h-14 w-14 shrink-0 items-center justify-center shadow-2xl active:translate-y-0"
            aria-label="Open social links"
          >
            <MaterialIcon name="share" className="text-[1.5rem] leading-none" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Layout;
