import type { Metadata } from 'next';
import styles from './privacy.module.css';

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'Privacy notice for In Extremis Consulting.',
};

export default function PrivacyPage() {
  return (
    <div className={`${styles.page} section-ink`}>
      <div className={`container ${styles.inner}`}>
        <p className="label fade-rise fade-rise-1">Legal</p>
        <h1 className="fade-rise fade-rise-2">Privacy Notice</h1>

        <div className="fade-rise fade-rise-3">
          <p>
            In Extremis Consulting collects only the information you voluntarily submit through
            the contact form on this site (name, email address, company name, and message). This
            information is used solely to respond to your inquiry. It is not sold, rented, or
            shared with third parties.
          </p>
          <p>
            This site uses privacy-respecting analytics that do not store personal data or use
            cookies. No third-party advertising or tracking cookies are set.
          </p>
          <p>
            If you have questions about this notice, contact us at{' '}
            <a href="mailto:welch778@gmail.com">welch778@gmail.com</a>.
          </p>
          <p className={styles.updated}>Last updated: 2026</p>
        </div>
      </div>
    </div>
  );
}
