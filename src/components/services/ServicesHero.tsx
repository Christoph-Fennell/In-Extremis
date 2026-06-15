import Image from 'next/image';
import Link from 'next/link';
import styles from './ServicesHero.module.css';

/**
 * MEDIA NOTES:
 * - Place your image at /public/images/services-hero.jpg
 * - Landscape orientation works best — something wide and dramatic
 * - Replace the mediaPlaceholder div with the Image tag below
 */

export default function ServicesHero() {
  return (
    <section className={styles.hero} aria-label="Services">

      {/* ── Background image ── */}
      <div className={styles.media} aria-hidden="true">
        {
          <Image
            src="/images/untitled-16.jpg"
            alt=""
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        }
      </div>

      {/* ── Overlay ── */}
      <div className={styles.overlay} aria-hidden="true" />

      {/* ── Content ── */}
      <div className={`container ${styles.inner}`}>
        <p className="label fade-rise fade-rise-1">What We Offer</p>
        <h1 className={`fade-rise fade-rise-2 ${styles.title}`}>Services</h1>
        <p className={`fade-rise fade-rise-3 ${styles.intro}`}>
          In Extremis Consulting supports industry clients with go-to-market strategy, brand
          positioning, and credentialed access to specialized products and partnerships.
          Engagements are scoped to the problem, not to a template. What follows is the core
          of what we do.
        </p>
      </div>

    </section>
  );
}
