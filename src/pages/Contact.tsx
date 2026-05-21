import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import PageHero from '../components/PageHero';
import { ADDRESS_LINES, EMAIL, LICENSE, PHONE, PHONE_TEL } from '../content/site';

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Tell us what you want to build"
        description="Bring the dream, the rough sketch, or the problem you need solved. Call, email, or send the form and we will help turn it into a clear plan."
        image="https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/f158aff5-83e7-45cc-9f3e-05530b11cf00/public"
      />

      <section className="relative overflow-hidden bg-white py-16 md:py-24">
        <div className="pointer-events-none absolute -bottom-36 -right-20 h-[28rem] w-[28rem] rounded-full bg-hobbs-gold/[0.08] blur-[100px]" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start">
            <div>
              <h2 className="font-display text-3xl tracking-[0.02em] text-zinc-900 md:text-4xl">Reach the crew directly</h2>
              <p className="mt-4 max-w-lg leading-relaxed text-zinc-600">
                Prefer a conversation first? Call or email and we will walk through scope, timing, and what makes sense for your property.
              </p>

              <div className="mt-10 space-y-8 border-l-4 border-hobbs-gold/70 pl-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-hobbs-gold-dim">Phone</p>
                  <a href={`tel:${PHONE_TEL}`} className="mt-2 block font-display text-3xl tracking-wide text-zinc-900 transition-colors hover:text-hobbs-navy">
                    {PHONE}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-hobbs-gold-dim">Email</p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="mt-2 block text-lg font-semibold text-zinc-900 transition-colors hover:text-hobbs-navy"
                  >
                    {EMAIL}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-hobbs-gold-dim">Mailing address</p>
                  <address className="mt-2 not-italic leading-relaxed text-zinc-600">
                    {ADDRESS_LINES[0]}
                    <br />
                    {ADDRESS_LINES[1]}
                  </address>
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-hobbs-gold-dim">{LICENSE}</p>
              </div>

              <p className="mt-10 text-sm text-zinc-500">
                Looking for examples first?{' '}
                <Link to="/builds" className="font-semibold text-hobbs-navy underline decoration-hobbs-gold/40 underline-offset-2 hover:text-hobbs-gold-dim">
                  Browse our builds
                </Link>
              </p>
            </div>

            <ContactForm heading="Send your project details" />
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50 py-14 md:py-18">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-3xl tracking-[0.02em] text-zinc-900">What to include in your message</h2>
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              'What you want built or changed, even if it is still rough',
              'Your location and any timing goals you have in mind',
              'Photos, sketches, or inspiration links if you already have them'
            ].map((item) => (
              <li
                key={item}
                className="border border-zinc-200 bg-white p-6 text-[15px] leading-relaxed text-zinc-600 shadow-[0_16px_40px_-32px_rgba(8,25,48,0.35)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Contact;
