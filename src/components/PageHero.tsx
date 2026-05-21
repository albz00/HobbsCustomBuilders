import { Link } from 'react-router-dom';

const heroSealLogoSrc =
  'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/15b92a7a-98ce-4ebe-799a-cb503b70aa00/public';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
};

function PageHero({ eyebrow, title, description, image, primaryCta, secondaryCta }: PageHeroProps) {
  return (
    <section className="relative isolate flex min-h-[min(100svh,54rem)] scroll-mt-40 items-center overflow-hidden border-b border-zinc-200 bg-white py-32 text-zinc-950 md:min-h-[min(92vh,52rem)] md:scroll-mt-48 md:py-36 lg:min-h-[min(88vh,56rem)]">
      <div className="pointer-events-none absolute inset-0 -z-40 bg-gradient-to-br from-white via-zinc-100 to-zinc-200" aria-hidden />
      <div className="absolute inset-y-0 right-0 -z-30 h-full w-full overflow-hidden md:w-[58%] lg:w-[56%]">
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center hobbs-hero-bg-photo opacity-95"
          width={1600}
          height={1200}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/80 via-48% to-white/24" aria-hidden />
      <div
        className="pointer-events-none absolute inset-y-0 left-[38%] right-[32%] -z-10 hidden bg-gradient-to-r from-white via-white/72 to-transparent md:block"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/70 via-white/16 to-white/62" aria-hidden />
      <div
        className="pointer-events-none absolute right-[max(1.25rem,calc((100vw-72rem)/2+1rem))] top-1/2 z-0 hidden w-[clamp(12rem,22vw,22rem)] -translate-y-[43%] lg:block"
        aria-hidden
      >
        <img
          src={heroSealLogoSrc}
          alt=""
          width={520}
          height={520}
          loading="eager"
          decoding="async"
          className="aspect-square w-full rounded-full object-cover opacity-[0.92] shadow-[0_24px_70px_-32px_rgba(8,25,48,0.72)]"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="max-w-[48rem] lg:max-w-[44rem]">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-hobbs-gold-dim">{eyebrow}</p>
          <h1 className="font-display text-[2.5rem] leading-[0.98] tracking-[0.02em] text-zinc-950 sm:text-[3.25rem] md:text-[4rem] xl:text-[4.35rem]">
            {title}
          </h1>
          <div className="hero-measure-line mt-5 max-w-[min(39rem,100%)]" aria-hidden />
          <p className="mb-8 mt-6 max-w-[43rem] text-[1.0625rem] font-medium leading-relaxed text-zinc-700 md:text-[1.125rem]">
            {description}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-wrap gap-3">
              {primaryCta && (
                <Link
                  to={primaryCta.to}
                  className="btn-cut btn-fill-pop inline-flex items-center justify-center px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em]"
                >
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  to={secondaryCta.to}
                  className="btn-cut btn-line-pop inline-flex items-center justify-center px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em]"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="noise-overlay noise-overlay-under-copy" aria-hidden />
    </section>
  );
}

export default PageHero;
