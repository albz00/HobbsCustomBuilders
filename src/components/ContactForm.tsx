type ContactFormProps = {
  id?: string;
  heading?: string;
  className?: string;
};

function ContactForm({
  id = 'quote-form',
  heading = 'Request a project conversation',
  className = ''
}: ContactFormProps) {
  return (
    <div className={`relative border border-zinc-200 bg-zinc-50 p-6 shadow-[14px_-12px_0_0_rgb(17,40,74)] md:p-9 lg:p-10 ${className}`}>
      <h3 className="font-display mb-7 text-3xl tracking-wide text-zinc-900 md:text-[2.1rem]">{heading}</h3>
      <form id={id} className="space-y-5" onSubmit={(event) => event.preventDefault()}>
        <div className="grid gap-5 md:grid-cols-2">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            autoComplete="name"
            className="w-full border border-zinc-200 bg-white px-4 py-3.5 text-[15px] text-zinc-900 placeholder:text-zinc-400 focus:border-hobbs-navy focus:outline-none focus:ring-1 focus:ring-hobbs-navy"
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            autoComplete="email"
            className="w-full border border-zinc-200 bg-white px-4 py-3.5 text-[15px] text-zinc-900 placeholder:text-zinc-400 focus:border-hobbs-navy focus:outline-none focus:ring-1 focus:ring-hobbs-navy"
          />
        </div>
        <input
          type="tel"
          name="phone"
          placeholder="Phone number"
          autoComplete="tel"
          className="w-full border border-zinc-200 bg-white px-4 py-3.5 text-[15px] text-zinc-900 placeholder:text-zinc-400 focus:border-hobbs-navy focus:outline-none focus:ring-1 focus:ring-hobbs-navy"
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us about your custom home, addition, deck, specialty space, or finish work"
          className="w-full resize-none border border-zinc-200 bg-white px-4 py-3.5 text-[15px] text-zinc-900 placeholder:text-zinc-400 focus:border-hobbs-navy focus:outline-none focus:ring-1 focus:ring-hobbs-navy"
        />
        <button type="submit" className="btn-cut btn-fill-pop w-full py-3.5 text-[15px] font-semibold tracking-wide">
          Submit. We will follow up about your build
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
