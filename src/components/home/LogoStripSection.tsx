'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './LogoStripSection.module.css';

/**
 * LOGO NOTES:
 * - Place logo image files in /public/images/logos/
 * - SVG is preferred (scales perfectly at any size)
 * - PNG with transparent background also works well
 * - Recommended size: at least 300px wide, transparent background
 * - Update the logos array below with your actual client data
 */

type LogoItem = {
  name: string;
  src: string;        // Path to logo file e.g. '/images/logos/client.svg'
  width: number;
  height: number;
};

// ── EDIT THIS ARRAY to add real client logos ───────────────
const logos: LogoItem[] = [
  { name: 'Client 1', src: '/images/logos/Colt_idmLsNB0xV_3.jpeg', width: 160, height: 48 },
  { name: 'Client 2', src: '/images/logos/Agilite Logo.png', width: 160, height: 48 },
  { name: 'Client 3', src: '/images/logos/hesco_logo.jpg', width: 160, height: 48 },
  { name: 'Client 4', src: '/images/logos/GBRS_Group_idgdVDrzmQ_0.png', width: 160, height: 48 },
  { name: 'Client 5', src: '/images/logos/client-5.svg', width: 160, height: 48 },
  { name: 'Client 6', src: '/images/logos/client-6.svg', width: 160, height: 48 },
];
// ──────────────────────────────────────────────────────────

const VISIBLE_COUNT = 4;    // How many logos show at once on desktop
const INTERVAL_MS  = 3000; // How fast it rotates (milliseconds)

export default function LogoStripSection() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused,    setIsPaused]    = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const total = logos.length;

  const next = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % total);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, total]);

  const prev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + total) % total);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, total]);

  // Auto-rotate
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  // Build the visible logo indices (wrapping around the array)
  const visibleIndices = Array.from(
    { length: VISIBLE_COUNT },
    (_, i) => (activeIndex + i) % total
  );

  return (
    <section
      className={`${styles.section} section-ink`}
      ref={sectionRef}
      aria-label="Trusted clients"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container">
        <p className={`label reveal ${styles.label}`}>
          Trusted Across the Industry
        </p>

        <div className={`reveal ${styles.carouselWrapper}`}>

          {/* ── Prev button ── */}
          <button
            className={styles.navBtn}
            onClick={prev}
            aria-label="Previous clients"
          >
            ←
          </button>

          {/* ── Logo track ── */}
          <div className={styles.track} role="list" aria-label="Client logos">
            {visibleIndices.map((logoIndex, position) => {
              const logo = logos[logoIndex];
              return (
                <div
                  key={`${logoIndex}-${position}`}
                  className={styles.logoBox}
                  role="listitem"
                  aria-label={logo.name}
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={logo.width}
                    height={logo.height}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              );
            })}
          </div>

          {/* ── Next button ── */}
          <button
            className={styles.navBtn}
            onClick={next}
            aria-label="Next clients"
          >
            →
          </button>

        </div>

        {/* ── Dot indicators ── */}
        <div className={styles.dots} aria-label="Carousel position">
          {logos.map((_, i) => (
            <button
              key={i}
              className={[styles.dot, i === activeIndex ? styles.dotActive : ''].join(' ')}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to client ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
