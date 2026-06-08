import Image from 'next/image';
import Link from 'next/link';
import styles from './AboutHero.module.css';

/**
 * MEDIA NOTES:
 * - Portrait/field image: /public/images/about-hero.jpg
 * - Replace the placeholder div with:
 *   <Image src="/images/about-hero.jpg" alt="Chase Welch" fill style={{ objectFit: 'cover', objectPosition: 'top center' }} priority />
 */
export default function AboutHero() {
  return (
    <section className={styles.hero} aria-label="About">
      {/* ── Full-bleed image ── */}
      <div className={styles.media} aria-hidden="true">
        {
          <Image
            src="/images/services-banner.jpeg"
            alt="Chase Welch — In Extremis Consulting"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'top center' }}
          />
        }
      </div>
      <div className={styles.overlay} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <p className="label fade-rise fade-rise-1">In Extremis Consulting</p>
        <h1 className={`fade-rise fade-rise-2 ${styles.title}`}>About</h1>
      </div>
    </section>
  );
}
