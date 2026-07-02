import Link from 'next/link';
import styles from './Footer.module.css';

const socialLinks = [
  { label: 'LinkedIn',  href: 'https://linkedin.com',  icon: LinkedInIcon  },
  { label: 'Instagram', href: 'https://instagram.com/in_extremis_consulting', icon: InstagramIcon },
  { label: 'X',         href: 'https://x.com/inextremisbis?s=11',         icon: XIcon         },
  { label: 'YouTube',   href: 'https://youtube.com',   icon: YouTubeIcon   },
  { label: 'Facebook',  href: 'https://facebook.com/inextremisconsulting',   icon: FacebookIcon   }, 
];

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>

        {/* ── Zone 1: Brand + Motto ── */}
        <div className={styles.brand}>
          <div className={styles.swordMark} aria-hidden="true">†</div>
          <div className={styles.wordmark}>
            <span className={styles.wordmarkName}>In Extremis</span>
            <span className={styles.wordmarkSub}>CONSULTING</span>
          </div>
          <p className={styles.motto}>Transfixus sed non mortuus</p>
        </div>

        {/* ── Zone 2: Contact ── */}
        <div className={styles.contact}>
          <h3 className={styles.zoneLabel}>Contact</h3>
          <ul className={styles.contactList}>
            <li>
              <a href="mailto:chase@inextremisconsulting.com" className={styles.contactLink}>
                chase@inextremisconsulting.com
              </a>
            </li>
            {/* Add phone number here when confirmed */}
            {/* <li><a href="tel:+1XXXXXXXXXX" className={styles.contactLink}>+1 (XXX) XXX-XXXX</a></li> */}
            <li className={styles.location}>Afton, Virginia</li>
          </ul>
        </div>

        {/* ── Zone 3: Social + Nav ── */}
        <div className={styles.social}>
          <h3 className={styles.zoneLabel}>Follow</h3>
          <ul className={styles.socialList} aria-label="Social media links">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={label}
                >
                  <Icon />
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
          <nav aria-label="Footer navigation" className={styles.footerNav}>
            <Link href="/"         className={styles.footerNavLink}>Home</Link>
            <Link href="/about"    className={styles.footerNavLink}>About</Link>
            <Link href="/services" className={styles.footerNavLink}>Services</Link>
          </nav>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className={styles.bottom}>
        <span>© 2026 In Extremis Consulting, LLC. All rights reserved.</span>
        <span className={styles.bottomDivider} aria-hidden="true">·</span>
        <Link href="/privacy" className={styles.bottomLink}>Privacy</Link>
      </div>
    </footer>
  );
}

/* ── SVG Icons ── */
function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
    </svg>
  );
}
