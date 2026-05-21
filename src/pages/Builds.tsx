import { Link } from 'react-router-dom';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import PageHero from '../components/PageHero';
import { featuredProject, services } from '../content/site';

const galleryPlaceholders = Array.from({ length: 4 }, (_, index) => index);

function Builds() {
  return (
    <>
      <PageHero
        eyebrow="Our builds"
        title="What we build and how it comes together"
        description="From the first sketch to the last trim board, here are the kinds of homes, additions, decks, and signature spaces we shape for families across West Virginia."
        image="https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/817e324f-6387-41a0-c5e9-a67a15a65000/public"
        primaryCta={{ label: 'Start your project', to: '/contact' }}
        secondaryCta={{ label: 'See homeowner reviews', to: '/reviews' }}
      />

      <section id="build-types" className="relative overflow-hidden border-b border-zinc-200 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <header className="mb-12 max-w-2xl md:mb-16">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-hobbs-gold-dim">Build types</p>
            <h2 className="font-display text-4xl tracking-[0.02em] text-zinc-900 md:text-5xl">Four build categories, one careful crew</h2>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600">
              Whether you are dreaming up a full custom home or refreshing the front of the house, the same steady team shows up to the work.
            </p>
          </header>

          <div className="flex flex-col gap-8 md:gap-10 lg:gap-12">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`group relative grid overflow-hidden border border-zinc-200 bg-zinc-50/95 shadow-[12px_16px_0_0_rgb(229,229,231)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-hobbs-gold/50 hover:shadow-[16px_20px_0_0_rgb(229,229,231)] md:grid-cols-[minmax(0,0.74fr)_minmax(16rem,0.54fr)] ${
                  index % 2 === 1 ? 'md:ml-auto md:mr-[3%] md:max-w-[54rem]' : 'md:max-w-[56rem] md:-translate-x-[2%] md:rotate-[0.25deg]'
                }`}
              >
                <div className="p-8 md:p-10">
                  <h3 className="font-display text-[1.875rem] tracking-wide text-zinc-950 md:text-[2.125rem]">{service.title}</h3>
                  <p className="mt-5 text-[15px] leading-relaxed text-zinc-600">{service.description}</p>
                </div>
                <div className="relative min-h-[13rem] border-t border-zinc-200 md:min-h-full md:border-l md:border-t-0">
                  <img
                    src={service.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover grayscale-[20%] transition-transform duration-700 group-hover:scale-[1.045]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-hobbs-navy-deep/55 via-transparent to-white/20" aria-hidden />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="featured" className="border-b border-zinc-200 bg-zinc-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <header className="mb-10 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-hobbs-gold-dim">Featured build</p>
            <h2 className="font-display text-4xl tracking-[0.02em] text-zinc-900 md:text-5xl">A recent project we love.</h2>
          </header>
          <article className="group">
            <div className="relative aspect-[16/10] overflow-hidden border border-zinc-200 shadow-[14px_14px_0_0_rgb(212,212,216)] transition-transform duration-500 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1 md:aspect-[21/10]">
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 via-zinc-950/40 to-transparent opacity-95" />
              <div className="absolute inset-x-0 bottom-0 p-7 pb-10 md:p-9 md:pb-12">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-hobbs-gold-bright">{featuredProject.category}</p>
                <h3 className="mt-3 font-display text-3xl text-white md:text-4xl">{featuredProject.title}</h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">{featuredProject.description}</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="gallery" className="border-b border-zinc-200 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <header className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-hobbs-gold-dim">Project gallery</p>
            <h2 className="font-display text-4xl tracking-[0.02em] text-zinc-900 md:text-5xl">Spaces we have shaped recently</h2>
          </header>
          <div className="grid gap-6 sm:grid-cols-2">
            {galleryPlaceholders.map((index) => (
              <article
                key={index}
                className="overflow-hidden border border-zinc-200 bg-white shadow-[0_18px_50px_-34px_rgba(8,25,48,0.38)]"
              >
                <div className="flex aspect-[4/3] items-center justify-center bg-zinc-300 px-6">
                  <p className="text-center text-sm font-medium uppercase tracking-[0.12em] text-zinc-500">
                    Placeholder area for projects in this gallery
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="before-after" className="border-b border-zinc-200 bg-zinc-100 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <header className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-hobbs-gold-dim">Before and after</p>
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

      <section className="bg-hobbs-navy-deep py-14 text-white md:py-18">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-3xl tracking-[0.02em] md:text-4xl">Have a project in mind?</h2>
            <p className="mt-3 max-w-lg text-white/75">Tell us what you are picturing and we will help map the next step.</p>
          </div>
          <Link
            to="/contact"
            className="btn-cut btn-fill-pop inline-flex items-center justify-center px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em]"
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}

export default Builds;
