'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './HeroSection.module.css';

/**
 * MEDIA NOTES:
 * - Hero video: place your looping mp4 at /public/video/hero.mp4
 *   and a poster image at /public/images/hero-poster.jpg
 * - A static fallback at /public/images/hero-still.jpg is shown on mobile
 * - The overlay keeps text legible over any dark media
 */
export default function HeroSection() {
  return (
    <section className={styles.hero} aria-label="Hero">
      {/* ── Media layer ── */}
      <div className={styles.media} aria-hidden="true">
        {
          <Image
            src="/images/Screenshot 2026-06-15 at 3.08.45 PM.png"
            alt=""
            fill
            priority
            className={styles.videoFill}
            style={{ objectFit: 'cover' }}
          />
        }
      </div>

      {/* ── Gradient overlay ── */}
      <div className={styles.overlay} aria-hidden="true" />

      {/* ── Content ── */}
      <div className={styles.content}>
        <p className={`label fade-rise fade-rise-1 ${styles.eyebrow}`}>
          In Extremis Consulting
        </p>

        <h1 className={`fade-rise fade-rise-2 ${styles.headline}`}>
        Dedication to the mission,<br />unto death.
        </h1>

        <p className={`fade-rise fade-rise-3 ${styles.subhead}`}>
          Strategic advisory and business development for the defense, firearms, and aerospace industries. Two decades of hard-won experience, applied to the problems that decide the future of the industry. 
        </p>

        <div className={`fade-rise fade-rise-4 ${styles.cta}`}>
          <Link href="/services" className="btn-primary">
            Work With Us <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className={`fade-rise fade-rise-4 ${styles.scrollHint}`} aria-hidden="true">
        <span className={styles.scrollLine} />
        <span className={styles.scrollLabel}>Scroll</span>
      </div>
    </section>
  );
}
