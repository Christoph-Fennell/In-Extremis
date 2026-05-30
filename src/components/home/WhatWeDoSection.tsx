'use client';

import { useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './WhatWeDoSection.module.css';

/**
 * MEDIA NOTES:
 * - Place a supporting image at /public/images/what-we-do.jpg (landscape, high-quality)
 * - Or a secondary video at /public/video/secondary.mp4
 * - Replace the placeholder div in .mediaBlock with your <Image /> or <video> tag
 */
export default function WhatWeDoSection() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;

  return (
    <section className={`${styles.section} section-paper`} ref={sectionRef} aria-label="What We Do">
      <div className={`container ${styles.inner}`}>

        {/* ── Left: copy ── */}
        <div className={styles.copy}>
          <p className="label reveal">What We Do</p>
          <span className="rule reveal" style={{ transitionDelay: '0.1s' }} />

          <h2 className={`reveal ${styles.heading}`} style={{ transitionDelay: '0.15s' }}>
            Position.<br />Win.
          </h2>

          <div className={`reveal ${styles.body}`} style={{ transitionDelay: '0.25s' }}>
            <p>
              In Extremis Consulting helps companies in the defense, firearms, and aerospace
              industries find their position and win it.
            </p>
            <p>
              We bring go-to-market strategy, brand positioning, media production, and credentialed
              access to specialized products and partnerships under a single banner. The work is
              cross-domain by design: the same engagement might move from market analysis to
              messaging to a manufacturer introduction, because that is how real positioning is built.
            </p>
            <p>
              We are not a large agency, and we do not pretend to be. We are a focused practice led
              by someone who has lived in this industry from the end user outward.
            </p>
          </div>
        </div>

        {/* ── Right: media ── */}
        <div className={`reveal ${styles.mediaBlock}`} style={{ transitionDelay: '0.35s' }} aria-hidden="true">
          {/*
            REPLACE with your image:
            <Image
              src="/images/what-we-do.jpg"
              alt="In Extremis Consulting field work"
              fill
              style={{ objectFit: 'cover' }}
            />

            Or secondary video:
            <video src="/video/secondary.mp4" autoPlay muted loop playsInline />
          */}
          <div className={styles.mediaPlaceholder}>
            <span className={styles.mediaPlaceholderText}>Media — replace with image or video</span>
          </div>
        </div>

      </div>
    </section>
  );
}
