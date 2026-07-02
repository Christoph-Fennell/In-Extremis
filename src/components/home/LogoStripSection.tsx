'use client';

import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './LogoStripSection.module.css';

type LogoItem = {
  name: string;
  src: string;
  width: number;
  height: number;
};

// ── EDIT THIS ARRAY ─────────────────────────────────────────
const logos: LogoItem[] = [
  { name: 'Client 1', src: '/images/logos/Colt_idEnFdjWdE_0.png', width: 200, height: 90 },
  { name: 'Client 2', src: '/images/logos/Agilite Logo.png', width: 200, height: 90 },
  { name: 'Client 3', src: '/images/logos/hesco_logo.jpg', width: 200, height: 90 },
  { name: 'Client 4', src: '/images/logos/GBRS_Group_idXGaZ4sM6_2.jpeg', width: 200, height: 90 },
  { name: 'Client 5', src: '/images/logos/Midwest_Industries_idHkRLSHMW_0.jpeg', width: 200, height: 90 },
  { name: 'Client 6', src: '/images/logos/Aimpoint_idNEOQKb_j_0.png', width: 200, height: 90 },
  { name: 'Client 7', src: '/images/logos/Genesis_Arms_idUm8MTAPu_1.png', width: 200, height: 90 },
  { name: 'Client 8', src: '/images/logos/idJb1-CMvA_logos.png', width: 200, height: 90 },
  { name: 'Client 9', src: '/images/logos/idqHfeLLxT_logos.png', width: 200, height: 90 },
  { name: 'Client 10', src: '/images/logos/Globe_Text_B3_raster.png', width: 200, height: 90 },
];
// ────────────────────────────────────────────────────────────

export default function LogoStripSection() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;

  // Duplicate for seamless infinite scroll
  const loopedLogos = [...logos, ...logos];

  return (
    <section
      className={`${styles.section} section-ink`}
      ref={sectionRef}
      aria-label="Trusted clients"
    >
      <div className="container">
        <p className={`label reveal ${styles.label}`}>
          Trusted Across the Industry
        </p>

        <div className={`reveal ${styles.carouselWrapper}`}>
          <div className={styles.trackViewport}>
            <div className={styles.track} role="list" aria-label="Client logos">
              {loopedLogos.map((logo, i) => (
                <div
                  key={`${logo.name}-${i}`}
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}