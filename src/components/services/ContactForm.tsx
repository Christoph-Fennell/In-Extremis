'use client';

import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './ContactForm.module.css';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

/**
 * FORM BACKEND NOTES:
 * - This form currently posts to /api/contact (Next.js API route below)
 * - For production, connect to your Google Workspace email address
 * - Spam protection: honeypot field (_gotcha) + rate limiting in the API route
 * - Optionally add hCaptcha or Cloudflare Turnstile for heavier protection
 */
export default function ContactForm() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;

  const [formState, setFormState] = useState<FormState>('idle');
  const [fields, setFields] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    _gotcha: '', // Honeypot — never shown, must be empty
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!fields.name.trim())    newErrors.name    = 'Name is required.';
    if (!fields.email.trim())   newErrors.email   = 'Email is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) newErrors.email = 'Enter a valid email.';
    if (!fields.message.trim()) newErrors.message = 'A message is required.';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check (client-side fast path)
    if (fields._gotcha) return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setFormState('submitting');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });

      if (res.ok) {
        setFormState('success');
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  return (
    <section
      id="contact"
      className={`${styles.section} section-ink`}
      ref={sectionRef}
      aria-label="Start a conversation"
    >
      <div className={`container ${styles.inner}`}>

        <div className={`reveal ${styles.heading}`}>
          <p className="label">Contact</p>
          <span className="rule" />
          <h2 className={styles.title}>Start a Conversation</h2>
          <p className={styles.sub}>
            Tell us what you are working on. We respond to every serious inquiry.
          </p>
        </div>

        {formState === 'success' ? (
          <div className={`reveal ${styles.successState}`}>
            <span className={styles.successIcon} aria-hidden="true">†</span>
            <h3 className={styles.successTitle}>Message received.</h3>
            <p className={styles.successBody}>
              We will be in touch.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={`reveal ${styles.form}`}
            noValidate
            aria-label="Contact form"
          >
            {/* ── Honeypot (hidden from real users) ── */}
            <div className={styles.honeypot} aria-hidden="true">
              <input
                type="text"
                name="_gotcha"
                value={fields._gotcha}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* ── Row: Name + Email ── */}
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="name" className={styles.fieldLabel}>
                  Name <span className={styles.required} aria-hidden="true">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={fields.name}
                  onChange={handleChange}
                  className={[styles.input, errors.name ? styles.inputError : ''].join(' ')}
                  autoComplete="name"
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <span id="name-error" className={styles.errorMsg} role="alert">{errors.name}</span>
                )}
              </div>

              <div className={styles.field}>
                <label htmlFor="email" className={styles.fieldLabel}>
                  Email <span className={styles.required} aria-hidden="true">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={fields.email}
                  onChange={handleChange}
                  className={[styles.input, errors.email ? styles.inputError : ''].join(' ')}
                  autoComplete="email"
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <span id="email-error" className={styles.errorMsg} role="alert">{errors.email}</span>
                )}
              </div>
            </div>

            {/* ── Company (optional) ── */}
            <div className={styles.field}>
              <label htmlFor="company" className={styles.fieldLabel}>
                Company <span className={styles.optional}>(optional)</span>
              </label>
              <input
                id="company"
                type="text"
                name="company"
                value={fields.company}
                onChange={handleChange}
                className={styles.input}
                autoComplete="organization"
              />
            </div>

            {/* ── Message ── */}
            <div className={styles.field}>
              <label htmlFor="message" className={styles.fieldLabel}>
                Message <span className={styles.required} aria-hidden="true">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={fields.message}
                onChange={handleChange}
                rows={6}
                className={[styles.textarea, errors.message ? styles.inputError : ''].join(' ')}
                aria-describedby={errors.message ? 'message-error' : undefined}
                aria-invalid={!!errors.message}
              />
              {errors.message && (
                <span id="message-error" className={styles.errorMsg} role="alert">{errors.message}</span>
              )}
            </div>

            {/* ── Submit ── */}
            {formState === 'error' && (
              <p className={styles.globalError} role="alert">
                Something went wrong. Please try again or email{' '}
                <a href="mailto:welch778@gmail.com">welch778@gmail.com</a>.
              </p>
            )}

            <button
              type="submit"
              className="btn-primary"
              disabled={formState === 'submitting'}
              aria-busy={formState === 'submitting'}
            >
              {formState === 'submitting' ? 'Sending…' : 'Send →'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
