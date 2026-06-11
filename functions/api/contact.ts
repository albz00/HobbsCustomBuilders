interface Env {
  turnstile_secret_key: string;
  resend_api_key: string;
}

type PagesFunction<Bindings = unknown> = (context: {
  request: Request;
  env: Bindings;
}) => Response | Promise<Response>;

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  turnstileToken?: string;
};

const BUSINESS_EMAIL = 'johnhobbs691@gmail.com';
const SENDER_EMAIL = 'info@hostverna.co';
const SENDER_NAME = 'Hobbs Custom Builders';

function jsonResponse(body: Record<string, unknown>, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function verifyTurnstile(token: string, secret: string, remoteIp: string) {
  const body = new URLSearchParams();
  body.set('secret', secret);
  body.set('response', token);
  if (remoteIp) body.set('remoteip', remoteIp);

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body
  });

  const result = (await response.json()) as { success?: boolean };
  return Boolean(result.success);
}

async function sendEmail(
  apiKey: string,
  payload: {
    from: string;
    to: string[];
    subject: string;
    html: string;
    replyTo?: string;
  }
) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend error: ${response.status} ${errorText}`);
  }
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  if (!env.turnstile_secret_key || !env.resend_api_key) {
    return jsonResponse({ error: 'Email service is not configured.' }, 500);
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return jsonResponse({ error: 'Invalid request body.' }, 400);
  }

  const name = payload.name?.trim() ?? '';
  const email = payload.email?.trim() ?? '';
  const phone = payload.phone?.trim() ?? '';
  const subject = payload.subject?.trim() ?? '';
  const message = payload.message?.trim() ?? '';
  const turnstileToken = payload.turnstileToken?.trim() ?? '';

  if (!name || !email || !subject || !message) {
    return jsonResponse({ error: 'Please fill in all required fields.' }, 400);
  }

  if (!isValidEmail(email)) {
    return jsonResponse({ error: 'Please enter a valid email address.' }, 400);
  }

  if (!turnstileToken) {
    return jsonResponse({ error: 'Please complete the verification check.' }, 400);
  }

  const remoteIp = request.headers.get('CF-Connecting-IP') ?? '';
  const verified = await verifyTurnstile(turnstileToken, env.turnstile_secret_key, remoteIp);

  if (!verified) {
    return jsonResponse({ error: 'Verification failed. Please try again.' }, 403);
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || 'Not provided');
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

  try {
    await sendEmail(env.resend_api_key, {
      from: `${SENDER_NAME} <${SENDER_EMAIL}>`,
      to: [BUSINESS_EMAIL],
      replyTo: email,
      subject: `New contact form: ${subject}`,
      html: `
        <h2>New project inquiry</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `
    });

    await sendEmail(env.resend_api_key, {
      from: `${SENDER_NAME} <${SENDER_EMAIL}>`,
      to: [email],
      replyTo: BUSINESS_EMAIL,
      subject: 'We received your message — Hobbs Custom Builders',
      html: `
        <p>Hi ${safeName},</p>
        <p>Thanks for reaching out to Hobbs Custom Builders. We received your message and will follow up soon.</p>
        <p><strong>Your subject:</strong> ${safeSubject}</p>
        <p><strong>Your message:</strong></p>
        <p>${safeMessage}</p>
        <p>If you need to talk sooner, call us at 304-667-9343.</p>
        <p>— Hobbs Custom Builders</p>
      `
    });

    return jsonResponse({ ok: true }, 200);
  } catch {
    return jsonResponse({ error: 'Unable to send your message right now. Please try again or call us.' }, 500);
  }
};
