'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './FounderBio.module.css';

export default function FounderBio() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;

  return (
    <section className={`${styles.section} section-paper`} ref={sectionRef} aria-label="Founder biography">
      <div className={`container ${styles.inner}`}>

        {/* ── Portrait ── */}
        <div className={`reveal ${styles.portrait}`} aria-hidden="true">
          {
            <Image
              src="/images/chase-portrait.jpg"
              alt="Chase Welch, founder of In Extremis Consulting"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top center' }}
            />
          }
        </div>

        {/* ── Bio copy ── */}
        <div className={styles.bio}>
          <p className="label reveal">Founder</p>
          <span className="rule reveal" style={{ transitionDelay: '0.1s', background: '#8A1815' }} />

          <h2 className={`reveal ${styles.name}`} style={{ transitionDelay: '0.15s' }}>
            Chase Welch
          </h2>

          <div className={`reveal ${styles.bodyText}`} style={{ transitionDelay: '0.25s' }}>
            <p>
              In Extremis Consulting was founded to formalize, under a single banner, 
              two decades of cross-domain work in the defense and firearms industries.

            </p>
            <p>
              The firm is led by Chase Welch, a United States Marine Corps combat veteran who 
              served with 1st Battalion, 6th Marines and deployed twice to Afghanistan as an 0311. 
              After leaving active duty, he spent more than a decade as a contractor supporting the 
              Defense Intelligence Agency, Marine Corps Special Operations Command, Naval Special Warfare, 
              the U.S. State Department, Defense Intelligence Agency, and federal and local law enforcement, 
              training operators across domains and specialties.
            </p>
            <p>
              After leaving contracting, Chase grew his expertise in business development, marketing strategy, 
              media production, brand representation, and operational requirements analysis for manufacturers 
              across the defense, firearms, and aerospace sectors. In Extremis Consulting brings that full arc 
              to bear for its clients, from the end user's perspective outward.
            </p>
            <p>
              The belief behind the work is simple. The best decisions come from open exchange and the disciplined comparison 
              of ideas. Clarity of thinking and the willingness to challenge institutional doctrine can be the difference 
              between a company succeeding or failing, or an end user living or dying. That is what the firm offers: 
              a partner focused on the ground truth, who understands the product, the market, and the people who depend on both.

            </p>
          </div>

          <blockquote className={`reveal ${styles.motto}`} style={{ transitionDelay: '0.4s' }}>
            Transfixus sed non mortuus.
          </blockquote>
        </div>

      </div>
    </section>
  );
}
