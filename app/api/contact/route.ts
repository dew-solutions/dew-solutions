import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const data = await req.json();

  await resend.emails.send({
    from: 'DEW Solutions <no-reply@dew-solutions.com>',
    to: ['you@example.com'],
    subject: 'New Contact Form Submission',
    html: `<pre>${JSON.stringify(data, null, 2)}</pre>`,
  });

  return new Response('OK');
}