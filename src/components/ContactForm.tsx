import { FormEvent, useState } from 'react';
import { contactSubjects } from '../content/site';
import TurnstileWidget, { getTurnstileToken, resetTurnstileWidget } from './TurnstileWidget';

type ContactFormProps = {
  id?: string;
  heading?: string;
  className?: string;
};

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

function ContactForm({
  id = 'quote-form',
  heading = 'Request a project conversation',
  className = ''
}: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const fieldClassName =
    'w-full border border-zinc-200 bg-white px-4 py-3.5 text-[15px] text-zinc-900 placeholder:text-zinc-400 focus:border-hobbs-navy focus:outline-none focus:ring-1 focus:ring-hobbs-navy';

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const turnstileToken = getTurnstileToken();

    if (!turnstileToken) {
      setStatus('error');
      setErrorMessage('Please complete the verification check.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          subject: formData.get('subject'),
          message: formData.get('message'),
          turnstileToken
        })
      });

      const result = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.error ?? 'Unable to send your message.');
      }

      form.reset();
      resetTurnstileWidget();
      setStatus('success');
    } catch (error) {
      resetTurnstileWidget();
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Unable to send your message.');
    }
  };

  return (
    <div className={`relative border border-zinc-200 bg-zinc-50 p-6 shadow-[14px_-12px_0_0_rgb(17,40,74)] md:p-9 lg:p-10 ${className}`}>
      <h3 className="font-display mb-7 text-3xl tracking-wide text-zinc-900 md:text-[2.1rem]">{heading}</h3>

      {status === 'success' ? (
        <div className="rounded-sm border border-emerald-200 bg-emerald-50 px-5 py-6 text-[15px] leading-relaxed text-emerald-900">
          <p className="font-semibold">Thanks — we got your message.</p>
          <p className="mt-2">We will follow up about your build soon.</p>
        </div>
      ) : (
        <form id={id} className="space-y-5" onSubmit={handleSubmit}>
          <div className="grid gap-5 md:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              autoComplete="name"
              required
              className={fieldClassName}
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              autoComplete="email"
              required
              className={fieldClassName}
            />
          </div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            autoComplete="tel"
            className={fieldClassName}
          />
          <select
            name="subject"
            defaultValue=""
            required
            aria-label="Subject"
            className={`${fieldClassName} appearance-none bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat pr-10 text-zinc-900 [background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none' stroke='%23525252' stroke-width='1.75' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 8 4 4 4-4'/%3E%3C/svg%3E")]`}
          >
            <option value="" disabled>
              Select a service...
            </option>
            {contactSubjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Tell us about your custom home, addition, deck, specialty space, or finish work"
            className={`${fieldClassName} resize-none`}
          />
          <TurnstileWidget
            onExpire={() => {
              if (status === 'error') return;
              setErrorMessage('Verification expired. Please verify again.');
            }}
            onError={() => {
              setStatus('error');
              setErrorMessage('Verification failed. Please refresh and try again.');
            }}
          />
          {status === 'error' && errorMessage ? (
            <p className="text-sm text-red-700" role="alert">
              {errorMessage}
            </p>
          ) : null}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="btn-cut btn-fill-pop w-full py-3.5 text-[15px] font-semibold tracking-wide disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === 'submitting' ? 'Sending...' : 'Submit. We will follow up about your build'}
          </button>
        </form>
      )}
    </div>
  );
}

export default ContactForm;
