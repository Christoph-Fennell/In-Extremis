'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './LogoStripSection.module.css';

/**
 * LOGO NOTES:
 * - Add client logo files (SVG preferred) to /public/images/logos/
 * - Replace the placeholder array below with your actual client data:
 *   { name: 'Client Name', src: '/images/logos/client.svg', width: 120, height: 40 }
 * - Grayscale by default, color on hover (handled in CSS via filter)
 * - The grid gracefully accommodates 3–8 logos
 */

type LogoItem = {
  name: string;
  src?: string;       // Path to logo file — add when available
  width?: number;
  height?: number;
};

// ── EDIT THIS ARRAY to add real client logos ───────────────
const logos: LogoItem[] = [
  { name: 'Client 1' },
  { name: 'Client 2' },
  { name: 'Client 3' },
  { name: 'Client 4' },
  { name: 'Client 5' },
  { name: 'Client 6' },
];
// ──────────────────────────────────────────────────────────

export default function LogoStripSection() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;

  return (
    <section className={`${styles.section} section-ink`} ref={sectionRef} aria-label="Trusted clients">
      <div className="container">
        <p className={`label reveal ${styles.label}`}>
          Trusted Across the Industry
        </p>

        <div className={styles.grid} role="list" aria-label="Client logos">
          {logos.map((logo, i) => (
            <div
              key={logo.name}
              className={`reveal ${styles.logoBox}`}
              style={{ transitionDelay: `${i * 0.07}s` }}
              role="listitem"
              aria-label={logo.name}
            >
              {logo.src ? (
                /* Replace div with: */
                /* <Image src={logo.src} alt={logo.name} width={logo.width ?? 140} height={logo.height ?? 48} /> */
                <div className={styles.logoPlaceholder}>{logo.name}</div>
              ) : (
                <div className={styles.logoPlaceholder}>{logo.name}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
