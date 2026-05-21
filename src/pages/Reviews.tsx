import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { testimonials } from '../content/site';

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

function Reviews() {
  const [expandedReviews, setExpandedReviews] = useState<Record<string, boolean>>({});

  const previewReview = (text: string, expanded: boolean) => {
    if (expanded || text.length <= 145) return text;
    return `${text.slice(0, 145).trim()}...`;
  };

  return (
    <>
      <PageHero
        eyebrow="Homeowner feedback"
        title="What homeowners say"
        description="Real reviews from families we have worked with on porches, interior updates, roofing, and full custom builds."
        image="https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/9d516828-ef70-495f-1f5b-80fe6f65c900/public"
        primaryCta={{ label: 'Start your build', to: '/contact' }}
      />

      <section className="relative border-b border-zinc-200 bg-zinc-50 py-16 md:py-24">
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mb-10 flex justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm" aria-hidden>
              <GoogleLogo />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="border border-zinc-200 bg-white p-8 shadow-[0_18px_50px_-34px_rgba(8,25,48,0.38)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-hobbs-gold/45 hover:shadow-[0_24px_60px_-34px_rgba(8,25,48,0.48)] md:p-10"
              >
                <figcaption className="mb-6 flex flex-wrap items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-50" aria-hidden>
                    <GoogleLogo className="h-5 w-5" />
                  </span>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                    Google {testimonial.ratingLabel}
                  </p>
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

          <div className="mt-14 text-center">
            <p className="text-zinc-600">Want the same steady crew on your project?</p>
            <Link
              to="/contact"
              className="btn-cut btn-fill-pop mt-5 inline-flex items-center justify-center px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em]"
            >
              Request a quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Reviews;
