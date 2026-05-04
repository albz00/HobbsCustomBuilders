import { useEffect, useState } from 'react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

function GoogleLogo({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="#4285F4" d="M21.8 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.5c-.2 1.3-1 2.4-2.1 3.1v2.6h3.4c2-1.8 3-4.5 3-7.6z" />
      <path fill="#34A853" d="M12 22c2.8 0 5.2-.9 6.9-2.5l-3.4-2.6c-.9.6-2.1 1-3.5 1-2.7 0-5-1.8-5.8-4.3H2.7v2.7C4.4 19.7 7.9 22 12 22z" />
      <path fill="#FBBC05" d="M6.2 13.6c-.2-.6-.3-1.2-.3-1.9s.1-1.3.3-1.9V7.1H2.7C2 8.5 1.6 10.1 1.6 11.8S2 15 2.7 16.3l3.5-2.7z" />
      <path fill="#EA4335" d="M12 5.8c1.5 0 2.9.5 3.9 1.5l2.9-2.9C17.1 2.8 14.8 2 12 2 7.9 2 4.4 4.3 2.7 7.1l3.5 2.7C7 7.6 9.3 5.8 12 5.8z" />
    </svg>
  );
}

const heroImages = [
  'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/f158aff5-83e7-45cc-9f3e-05530b11cf00/public',
  'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/160df607-b778-4d99-4b7b-fcb2215a6200/public',
  'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/817e324f-6387-41a0-c5e9-a67a15a65000/public',
  'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/9d516828-ef70-495f-1f5b-80fe6f65c900/public',
  'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/f2b383bf-e22b-48f8-4d97-30d1c1995100/public'
];

function Home() {
  const [expandedReviews, setExpandedReviews] = useState<Record<string, boolean>>({});
  const [currentHeroImageIndex, setCurrentHeroImageIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentHeroImageIndex((current) => (current + 1) % heroImages.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, []);

  const heroSealLogoSrc =
    'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/15b92a7a-98ce-4ebe-799a-cb503b70aa00/public';

  const services = [
    {
      title: 'Custom homes',
      description:
        'We combine your vision with our field experience to shape a home that feels personal, practical, and built for daily life.',
      image:
        'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/160df607-b778-4d99-4b7b-fcb2215a6200/public'
    },
    {
      title: 'Additions',
      description:
        'More room should feel like it belonged there from the start. We plan the tie ins, structure, finishes, and flow with that in mind.',
      image:
        'https://images.ctfassets.net/s4ybdu2ld1ox/13AAMHkMXK7m2qDVl6gwoM/c29decfe0b2d33ce80eeee97900a7457/home-additions.jpeg?w=1060&h=795&fl=progressive&q=70&fm=jpg&bg=transparent'
    },
    {
      title: 'Decks and porches',
      description:
        'Front porches, back decks, stairs, rails, and outdoor spaces built for mountain weather and everyday use.',
      image:
        'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/cd0ffdbe-ac03-40d3-5654-209da823be00/public'
    },
    {
      title: 'Signature custom projects',
      description:
        'Distinctive finish work, specialty spaces, and one-of-one details that make a custom home feel considered from end to end.',
      image:
        'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/329ed413-b576-445e-5faf-3c8e09bca000/public'
    }
  ];

  const stats = [
    { number: 'WV', label: 'Licensed contractor' },
    { number: '5★', label: 'Customer reviewed' },
    { number: 'Custom', label: 'Homes and additions' },
    { number: 'Local', label: 'White Sulphur Springs' }
  ];

  const projects = [
    {
      title: 'Porches with real curb appeal',
      category: 'Front porch',
      image:
        'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/817e324f-6387-41a0-c5e9-a67a15a65000/public'
    },
    {
      title: 'Fresh rooms without a full move',
      category: 'Addition',
      image:
        'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/9d516828-ef70-495f-1f5b-80fe6f65c900/public'
    },
    {
      title: 'Decks made for the view',
      category: 'Decks',
      image:
        'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/f2b383bf-e22b-48f8-4d97-30d1c1995100/public'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Yates',
      role: 'Homeowner',
      ratingLabel: '5 out of 5',
      text: 'They built a beautiful front porch for us, put in a handicap shower, and laid flooring in our home. The crew was always respectful and highly knowledgeable in every job. I highly recommended them and will be using them always in the future.'
    },
    {
      name: 'Debbie Totten',
      role: 'Homeowner',
      ratingLabel: '5 out of 5',
      text: 'This group is excellent. They worked sunrise to sunset, rain and shine, not to mention hot hot weather and never complained. So friendly and did an excellent job!!! Our roof looks beautiful! Very pleased!'
    }
  ];

  const previewReview = (text: string, expanded: boolean) => {
    if (expanded || text.length <= 145) return text;
    return `${text.slice(0, 145).trim()}...`;
  };

  const crewShotSrc =
    'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/f2b383bf-e22b-48f8-4d97-30d1c1995100/public';

  return (
    <>
      {/* Hero — split: copy left, image right */}
      <section className="relative isolate flex min-h-[100svh] scroll-mt-40 items-center overflow-hidden border-b border-zinc-200 bg-white py-32 text-zinc-950 md:scroll-mt-48 md:py-40 lg:min-h-screen">
        <div className="pointer-events-none absolute inset-0 -z-40 bg-gradient-to-br from-white via-zinc-100 to-zinc-200" aria-hidden />
        <div className="absolute inset-y-0 right-0 -z-30 h-full w-full overflow-hidden md:w-[58%] lg:w-[56%]">
          {heroImages.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={index === currentHeroImageIndex ? 'Hobbs Custom Builders project work' : ''}
              className={`absolute inset-0 h-full w-full object-cover object-center hobbs-hero-bg-photo transition-[opacity,transform] duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                index === currentHeroImageIndex ? 'opacity-95 scale-100' : 'opacity-0 scale-[1.035]'
              }`}
              width={1600}
              height={1200}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/80 via-48% to-white/24" aria-hidden />
        <div className="pointer-events-none absolute inset-y-0 left-[38%] right-[32%] -z-10 hidden bg-gradient-to-r from-white via-white/72 to-transparent md:block" aria-hidden />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/70 via-white/16 to-white/62" aria-hidden />
        <div className="pointer-events-none absolute right-[max(1.25rem,calc((100vw-72rem)/2+1rem))] top-1/2 z-0 hidden w-[clamp(15rem,28vw,27rem)] -translate-y-[43%] hobbs-animate-hero-seal lg:block" aria-hidden>
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
          <div className="max-w-[48rem] hobbs-animate-hero-copy lg:max-w-[44rem]">
            <h1 className="font-display text-[2.875rem] leading-[0.98] tracking-[0.02em] text-zinc-950 sm:text-[3.65rem] md:text-[4.45rem] xl:text-[4.85rem]">
              Custom dream builds
              <span className="mt-2 block text-hobbs-navy">brought to life with steady hands.</span>
            </h1>
            <div className="hero-measure-line mt-5 max-w-[min(39rem,100%)] hobbs-animate-measure" aria-hidden />
            <p className="mb-8 mt-6 max-w-[43rem] text-[1.125rem] font-medium leading-relaxed text-zinc-700">
              We combine your vision with our expertise to bring custom homes, additions, decks, showers, flooring, and more to life.
            </p>
            <p className="mb-10 hidden max-w-[42rem] text-sm leading-relaxed text-hobbs-gold-dim sm:block">
              WV license #WV061746. Based in White Sulphur Springs and serving families who want the work done right.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="btn-cut btn-fill-pop inline-flex items-center justify-center px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em]"
              >
                Start your build
              </a>
              <a
                href="#projects"
                className="btn-cut btn-line-pop inline-flex items-center justify-center px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em]"
              >
                See the work
              </a>
            </div>
          </div>
        </div>

        <div className="noise-overlay noise-overlay-under-copy" aria-hidden />
      </section>

      {/* Stats proof band */}
      <section className="hobbs-reveal relative z-20 overflow-hidden border-y border-hobbs-navy-deep bg-hobbs-navy-deep px-0 py-16 shadow-[0_-18px_44px_-28px_rgba(8,25,48,0.75)] md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(201,164,61,0.16),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent_42%)]" aria-hidden />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-hobbs-gold-bright/80 to-transparent" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6">
          <h2 className="mx-auto max-w-3xl text-center font-display text-[clamp(2.25rem,5vw,3.7rem)] uppercase leading-[0.98] tracking-[0.035em] text-white">
            Built around your vision.
          </h2>

          <div className="mx-auto mt-10 grid overflow-hidden rounded-sm border border-white/16 bg-white/[0.075] shadow-[0_24px_70px_-44px_rgba(0,0,0,0.8)] sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="relative border-b border-white/10 px-6 py-8 text-center last:border-b-0 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0 lg:px-5 lg:py-10">
                <span className="block font-display text-[clamp(3rem,6vw,4rem)] leading-none tracking-[0.01em] text-hobbs-gold-bright tabular-nums">
                  {stat.number}
                </span>
                <span className="mt-3 block text-[12px] font-bold uppercase leading-snug tracking-[0.18em] text-white">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offset services with image backed cards */}
      <section id="services" className="hobbs-reveal relative scroll-mt-40 overflow-hidden border-b border-zinc-200 bg-white py-20 md:scroll-mt-48 md:py-28 lg:overflow-visible">
        <div className="pointer-events-none absolute right-0 top-1/4 hidden h-64 w-32 -translate-y-12 border-y border-r border-hobbs-gold/25 lg:block" aria-hidden />

        <div className="mx-auto max-w-6xl px-6">
          <header className="mb-14 ml-2 max-w-2xl md:mb-18 md:-translate-x-4 lg:-translate-x-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-hobbs-gold-dim">Custom builds</p>
            <h2 className="mb-5 font-display text-4xl tracking-[0.02em] text-zinc-900 md:text-6xl">What we bring to life</h2>
            <p className="text-lg leading-relaxed text-zinc-600">
              Custom homes, additions, decks, specialty spaces, and signature details shaped with the same care as the structure around them.
            </p>
          </header>

          <div className="flex flex-col gap-8 md:gap-10 lg:gap-12">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`hobbs-reveal-card group relative grid overflow-hidden border border-zinc-200 bg-zinc-50/95 shadow-[12px_16px_0_0_rgb(229,229,231)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-hobbs-gold/50 hover:shadow-[16px_20px_0_0_rgb(229,229,231)] md:grid-cols-[minmax(0,0.74fr)_minmax(16rem,0.54fr)] ${
                  index % 2 === 1 ? 'md:ml-auto md:mr-[3%] md:max-w-[54rem]' : 'md:max-w-[56rem] md:-translate-x-[2%] md:rotate-[0.25deg]'
                }`}
              >
                <div className="p-8 md:p-10">
                  <h3 className="font-display text-[1.875rem] tracking-wide text-zinc-950 md:text-[2.125rem]">
                    {service.title}
                  </h3>
                  <p className="mt-5 text-[15px] leading-relaxed text-zinc-600">{service.description}</p>
                </div>
                <div className="relative min-h-[13rem] border-t border-zinc-200 md:min-h-full md:border-l md:border-t-0">
                  <img
                    src={service.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover grayscale-[20%] transition-transform duration-700 group-hover:scale-[1.045]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-hobbs-navy-deep/55 via-transparent to-white/20" aria-hidden />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Crew band overlaps services slightly */}
      <section className="relative z-10 -mt-8 border-y border-zinc-200 bg-hobbs-navy-deep pb-14 pt-14 text-white md:-mt-10 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)] md:gap-14">
          <div className="group relative min-h-[15rem] overflow-hidden rounded-sm border border-white/15 shadow-[24px_-18px_0_0_rgb(30,58,95)] md:min-h-[19rem]">
            <img
              src={crewShotSrc}
              alt="Builders reviewing plans on site"
              className="absolute inset-0 h-full w-full object-cover grayscale-[35%] transition-transform duration-700 group-hover:scale-[1.04] hobbs-crew-photo"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-hobbs-navy-deep via-transparent to-transparent opacity-95" aria-hidden />
          </div>
          <div>
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.34em] text-hobbs-gold-bright">Behind the build</p>
            <h2 className="mt-5 font-display text-4xl leading-[0.95] tracking-[0.02em] md:text-5xl">Your vision gets the attention.</h2>
            <p className="mt-6 leading-relaxed text-white/82">
              We listen first, then bring the right crew, materials, and plan to the job. The goal is simple. Build something that feels like it was always meant for your home.
            </p>
          </div>
        </div>
      </section>

      {/* Before and after tactile comparison */}
      <section className="hobbs-reveal border-b border-zinc-200 bg-zinc-100 py-16 md:py-24 lg:overflow-visible">
        <div className="mx-auto max-w-5xl px-6 lg:relative lg:z-10 lg:-translate-y-12 lg:bg-zinc-100 lg:p-12 lg:pb-14 lg:shadow-xl">
          <header className="mb-12 max-w-2xl lg:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-hobbs-gold-dim mb-3">Before and after</p>
            <h2 className="font-display text-4xl tracking-[0.02em] text-zinc-900 md:text-[3.125rem]">See the difference a careful build makes.</h2>
            <p className="mt-4 leading-relaxed text-zinc-600">
              Drag the splitter to compare a rough starting point with a cleaner finished look.
            </p>
          </header>
          <BeforeAfterSlider
            beforeSrc="https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/88fedb2a-7251-47eb-ee6e-2be8ea62d600/public"
            afterSrc="https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/fdeba03a-3927-4814-49ae-800e44fc7f00/public"
            beforeLabel="Before"
            afterLabel="After exterior and porch"
            caption="Drag the grip or tap around the photo to compare the stripped exterior with the finished siding, trim, door, and porch rail."
          />
        </div>
      </section>

      {/* Projects broken grid */}
      <section id="projects" className="hobbs-reveal scroll-mt-40 overflow-hidden bg-white py-20 md:scroll-mt-48 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between md:mb-20">
            <header className="max-w-xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-hobbs-gold-dim">Project range</p>
              <h2 className="font-display text-4xl tracking-[0.02em] md:text-6xl">Homes, additions, decks, and more</h2>
              <p className="mt-4 text-zinc-600">
                A glimpse at the kind of spaces we help shape, from curb appeal to everyday comfort.
              </p>
            </header>
            <a
              href="#contact"
            className="btn-cut btn-ghost-pop inline-flex self-start px-5 py-2.5 text-[15px] font-semibold transition-[transform,box-shadow,border-color,background-color] duration-300 ease-out sm:self-end md:mb-7"
            >
              Ask about your project
            </a>
          </div>

          <div className="relative grid gap-8 md:grid-cols-12 md:items-start md:gap-7">
            <article className="group cursor-pointer md:col-span-7 md:self-start">
              <div className="relative aspect-[16/11] overflow-hidden border border-zinc-200 shadow-[14px_14px_0_0_rgb(212,212,216)] transition-transform md:aspect-[18/11] md:duration-500 md:ease-out md:group-hover:-translate-x-1 md:group-hover:-translate-y-1 lg:aspect-[21/11]">
                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 via-zinc-950/40 to-transparent opacity-95" />
                <div className="absolute inset-x-0 bottom-0 p-7 pb-10">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-hobbs-gold-bright">{projects[0].category}</p>
                  <h3 className="mt-3 font-display text-3xl text-white">{projects[0].title}</h3>
                </div>
              </div>
            </article>

            <article className="group cursor-pointer md:col-span-5 md:z-10 md:mt-16 md:self-end md:border-l-[8px] md:border-hobbs-gold/45 md:bg-white md:py-8 md:pl-8">
              <div className="relative aspect-[4/3] overflow-hidden border border-zinc-300 shadow-[14px_-12px_0_0_rgb(17,40,74)] lg:aspect-[5/4]">
                <img
                  src={projects[1].image}
                  alt={projects[1].title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/55 to-transparent p-6 pb-12">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-hobbs-gold-bright">{projects[1].category}</p>
                  <h3 className="mt-3 font-display text-3xl tracking-wide text-white">{projects[1].title}</h3>
                </div>
              </div>
            </article>

            <article className="group cursor-pointer md:col-span-10 md:col-start-2 md:-mt-10 lg:-mt-16">
              <div className="relative aspect-[16/9] overflow-visible">
                <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-sm border-2 border-hobbs-navy-deep/30 bg-white shadow-[0_18px_38px_-28px_rgba(8,25,48,0.6)] transition-transform duration-500 ease-out group-hover:translate-x-5 group-hover:translate-y-5" aria-hidden />
                <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-sm border-2 border-hobbs-gold/35 bg-white transition-transform duration-500 ease-out group-hover:translate-x-3 group-hover:translate-y-3" aria-hidden />
                <div className="relative h-full overflow-hidden rounded-sm border-2 border-hobbs-navy-deep/85 shadow-xl transition-transform duration-500 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1">
                <img
                  src={projects[2].image}
                  alt={projects[2].title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 pb-14">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-hobbs-gold-bright">{projects[2].category}</p>
                  <h3 className="font-display text-3xl md:text-[2.375rem] text-white">{projects[2].title}</h3>
                </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="reviews" className="hobbs-reveal relative border-y border-zinc-200 bg-zinc-50 py-18 md:py-24">
        <div className="relative mx-auto max-w-6xl px-6">
          <header className="mx-auto mb-10 flex max-w-3xl flex-col items-center text-center md:mb-12">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm" aria-hidden>
              <GoogleLogo />
            </div>
            <h2 className="font-display text-4xl tracking-[0.02em] md:text-6xl">What homeowners say</h2>
          </header>

          <div className="relative grid gap-6 md:grid-cols-2 md:gap-8">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="border border-zinc-200 bg-white p-8 shadow-[0_18px_50px_-34px_rgba(8,25,48,0.38)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-hobbs-gold/45 hover:shadow-[0_24px_60px_-34px_rgba(8,25,48,0.48)] md:p-10"
              >
                <figcaption className="mb-6 flex flex-wrap items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-50" aria-hidden>
                    <GoogleLogo className="h-5 w-5" />
                  </span>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">Google {testimonial.ratingLabel}</p>
                  <p className="w-full text-[18px] leading-none tracking-[0.12em] text-hobbs-gold-bright" aria-label={testimonial.ratingLabel}>
                    ★★★★★
                  </p>
                </figcaption>
                <blockquote className="flex-1 border-l-2 border-hobbs-gold/70 pl-5 text-[17px] leading-relaxed text-zinc-700">
                  {previewReview(testimonial.text, Boolean(expandedReviews[testimonial.name]))}
                </blockquote>
                {testimonial.text.length > 145 && (
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedReviews((current) => ({
                        ...current,
                        [testimonial.name]: !current[testimonial.name]
                      }))
                    }
                    className="mt-5 text-sm font-bold uppercase tracking-[0.12em] text-hobbs-navy transition-colors hover:text-hobbs-gold-dim"
                  >
                    {expandedReviews[testimonial.name] ? 'Read less' : 'Read more'}
                  </button>
                )}
                <div className="mt-8 border-t border-zinc-100 pt-7">
                  <p className="font-semibold text-zinc-900">{testimonial.name}</p>
                  <p className="mt-0.5 text-sm text-zinc-500">{testimonial.role}</p>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="hobbs-reveal relative scroll-mt-40 overflow-hidden bg-white py-20 md:scroll-mt-48 md:py-24">
        <div className="pointer-events-none absolute -bottom-36 -right-20 h-[28rem] w-[28rem] rounded-full bg-hobbs-gold/[0.08] blur-[100px]" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start">
            <div className="lg:sticky lg:top-32">
              <h2 className="font-display text-4xl tracking-[0.02em] md:text-6xl">Tell us what you want to build</h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-600">
                Bring the dream, the rough sketch, or the problem you need solved. We will help turn it into a clear plan.
              </p>
              <div className="mt-8 space-y-5 border-l-4 border-hobbs-gold/70 pl-6">
                <a href="tel:+13046679343" className="block font-display text-3xl tracking-wide text-zinc-900 transition-colors hover:text-hobbs-navy">
                  304-667-9343
                </a>
                <address className="not-italic leading-relaxed text-zinc-600">
                  PO Box 46<br />
                  White Sulphur Springs, WV 24986
                </address>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-hobbs-gold-dim">
                  WV license #WV061746
                </p>
              </div>
            </div>

            <div className="relative border border-zinc-200 bg-zinc-50 p-6 shadow-[14px_-12px_0_0_rgb(17,40,74)] md:p-9 lg:p-10">
              <h3 className="font-display mb-7 text-3xl tracking-wide text-zinc-900 md:text-[2.1rem]">Request a project conversation</h3>
              <form className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Your name"
                    autoComplete="name"
                    className="w-full border border-zinc-200 bg-white px-4 py-3.5 text-[15px] text-zinc-900 placeholder:text-zinc-400 focus:border-hobbs-navy focus:outline-none focus:ring-1 focus:ring-hobbs-navy"
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    autoComplete="email"
                    className="w-full border border-zinc-200 bg-white px-4 py-3.5 text-[15px] text-zinc-900 placeholder:text-zinc-400 focus:border-hobbs-navy focus:outline-none focus:ring-1 focus:ring-hobbs-navy"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone number"
                  autoComplete="tel"
                  className="w-full border border-zinc-200 bg-white px-4 py-3.5 text-[15px] text-zinc-900 placeholder:text-zinc-400 focus:border-hobbs-navy focus:outline-none focus:ring-1 focus:ring-hobbs-navy"
                />
                <textarea
                  rows={5}
                  placeholder="Tell us about your custom home, addition, deck, specialty space, or finish work"
                  className="w-full resize-none border border-zinc-200 bg-white px-4 py-3.5 text-[15px] text-zinc-900 placeholder:text-zinc-400 focus:border-hobbs-navy focus:outline-none focus:ring-1 focus:ring-hobbs-navy"
                />
                <button type="submit" className="btn-cut btn-fill-pop w-full py-3.5 text-[15px] font-semibold tracking-wide">
                  Submit. We will follow up about your build
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
