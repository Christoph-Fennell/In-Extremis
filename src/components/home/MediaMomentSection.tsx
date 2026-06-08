'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './MediaMomentSection.module.css';

/**
 * MEDIA NOTES:
 * - Full-bleed image: /public/images/media-moment.jpg
 * - Or video: /public/video/media-moment.mp4
 * - Replace the placeholder with your <Image fill /> or <video> tag
 */
export default function MediaMomentSection() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;

  return (
    <section className={styles.section} ref={sectionRef} aria-label="Built from inside the industry">
      {/* ── Background media ── */}
      <div className={styles.media} aria-hidden="true">
        {
          <Image
            src="/images/bottom_banner.jpg"
            alt=""
            fill
            priority={false}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        }
      </div>

      {/* ── Overlay ── */}
      <div className={styles.overlay} aria-hidden="true" />

      {/* ── Single line of copy ── */}
      <div className={`container ${styles.content}`}>
        <h2 className={`reveal ${styles.line}`}>
          Built from inside<br />the industry it serves.
        </h2>
        <div className={`reveal ${styles.rule}`} style={{ transitionDelay: '0.2s' }} />
      </div>
    </section>
  );
}
