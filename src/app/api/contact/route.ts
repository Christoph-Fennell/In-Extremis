import { NextRequest, NextResponse } from 'next/server';

/**
 * CONTACT FORM API ROUTE
 *
 * This is a starting point. For production, connect to a transactional email
 * service so the form sends to your Google Workspace inbox.
 *
 * Recommended options:
 *   - Resend (resend.com) — simple, generous free tier
 *   - SendGrid
 *   - AWS SES
 *
 * Example with Resend:
 *   npm install resend
 *   import { Resend } from 'resend';
 *   const resend = new Resend(process.env.RESEND_API_KEY);
 *   await resend.emails.send({ from: ..., to: ..., subject: ..., text: ... });
 */

// Simple in-memory rate limit (resets on cold start — use Upstash Redis in production)
const submissionMap = new Map<string, number>();
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const MAX_SUBMISSIONS = 3;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, message, _gotcha } = body;

    // Honeypot — bot check
    if (_gotcha) {
      return NextResponse.json({ ok: true }); // Silent pass for bots
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

    // ── TODO: Send email ─────────────────────────────────────────────────────
    //
    // Replace this block with your preferred email provider.
    //
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'In Extremis Website <noreply@in-extremis.com>',
    //   to: 'chase@in-extremis.com',
    //   replyTo: email,
    //   subject: `New inquiry from ${name}${company ? ` at ${company}` : ''}`,
    //   text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'N/A'}\n\n${message}`,
    // });
    //
    // ────────────────────────────────────────────────────────────────────────

    // Log in development
    if (process.env.NODE_ENV !== 'production') {
      console.log('[Contact Form]', { name, email, company, message });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[Contact Form Error]', err);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
