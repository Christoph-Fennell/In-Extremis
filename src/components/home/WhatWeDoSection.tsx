'use client';

import Image from 'next/image';
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
            Position.<br />Identify.<br />Win.
          </h2>

          <div className={`reveal ${styles.body}`} style={{ transitionDelay: '0.25s' }}>
            <p>
              In Extremis Consulting helps companies in the defense, firearms, and aerospace 
              industries find their optimal brand position and dominate their space.
            </p>
            <p>
              We bring strategic business development, marketing, go-to-market strategy, brand positioning, 
              media logistics, research and design, and credentialed access to specialized products, 
              programs, and partnerships to our clients. The work is cross-domain by design: 
              same engagement might move from market analysis to messaging or marketing, to a manufacturer introduction, 
              or new product design. This is how the industry works, because that is how real positioning is built.
            </p>
            <p>
              We are not a large agency, and we do not pretend to be. We are focused, dedicated to the mission, 
              and are always working to improve the end users' knowledge, lethality, and mission success rate. 
              This builds trust in the brands we partner with by building trust, ground up, with their end users. 
            </p>
          </div>
        </div>

        {/* ── Right: media ── */}
        <div className={`reveal ${styles.mediaBlock}`} style={{ transitionDelay: '0.35s' }} aria-hidden="true">
          {
            <Image
              src="/images/what-we-do.jpg"
              alt="In Extremis Consulting field work"
              fill
              style={{ objectFit: 'cover' }}
            />

          }
        </div>

      </div>
    </section>
  );
}
