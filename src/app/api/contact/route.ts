import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limit
const submissionMap = new Map<string, number>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const MAX_SUBMISSIONS = 3;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, message, _gotcha } = body;

    // Honeypot — silent pass for bots
    if (_gotcha) {
      return NextResponse.json({ ok: true });
    }

    // Rate limiting by IP
    const ip = req.headers.get('x-forwarded-for') ?? 'unknown';
    const now = Date.now();
    const lastSubmission = submissionMap.get(ip) ?? 0;

    if (now - lastSubmission < RATE_LIMIT_WINDOW_MS / MAX_SUBMISSIONS) {
      return NextResponse.json({ error: 'Too many requests.' }, { status: 429 });
    }
    submissionMap.set(ip, now);

    // Validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email.' }, { status: 400 });
    }

    // Send email via Resend
    await resend.emails.send({
      from: 'In Extremis Consulting <noreply@inextremisconsulting.com>',
      to: process.env.CONTACT_EMAIL ?? 'chase@inextremisconsulting.com',
      replyTo: email,
      subject: `New inquiry from ${name}${company ? ` at ${company}` : ''}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 2rem; background: #0C0C0D; color: #ECE6D8;">
          <h2 style="font-size: 1.5rem; margin-bottom: 1.5rem; color: #ECE6D8;">New Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 0.5rem 0; color: #8A1815; font-family: monospace; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; width: 100px;">Name</td>
              <td style="padding: 0.5rem 0; color: #ECE6D8;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 0.5rem 0; color: #8A1815; font-family: monospace; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em;">Email</td>
              <td style="padding: 0.5rem 0; color: #ECE6D8;"><a href="mailto:${email}" style="color: #8A1815;">${email}</a></td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 0.5rem 0; color: #8A1815; font-family: monospace; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em;">Company</td>
              <td style="padding: 0.5rem 0; color: #ECE6D8;">${company}</td>
            </tr>` : ''}
          </table>
          <hr style="border: none; border-top: 1px solid rgba(236,230,216,0.1); margin: 1.5rem 0;" />
          <p style="color: #8A1815; font-family: monospace; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.75rem;">Message</p>
          <p style="color: #ECE6D8; line-height: 1.7; white-space: pre-wrap;">${message}</p>
          <hr style="border: none; border-top: 1px solid rgba(236,230,216,0.1); margin: 1.5rem 0;" />
          <p style="color: #ECE6D8; opacity: 0.3; font-family: monospace; font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.1em;">Sent via inextremisconsulting.com</p>
        </div>
      `,
      text: `New inquiry from ${name}${company ? ` at ${company}` : ''}\n\nName: ${name}\nEmail: ${email}${company ? `\nCompany: ${company}` : ''}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ ok: true });

  } catch (err) {
    console.error('[Contact Form Error]', err);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
