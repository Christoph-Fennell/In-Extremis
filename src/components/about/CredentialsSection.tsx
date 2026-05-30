'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './CredentialsSection.module.css';

const credentials = [
  {
    label: 'Service',
    items: ['USMC Infantry', '1st Battalion, 6th Marines', 'Two Combat Deployments — Afghanistan'],
  },
  {
    label: 'Instruction',
    items: [
      '13 Years Contract Instructor',
      'Defense Intelligence Agency',
      'MARSOC / NSW / U.S. State Dept.',
      'Federal & Local Law Enforcement',
    ],
  },
  {
    label: 'Industry',
    items: [
      'Federal Firearms Licensee',
      'Type 01 FFL / Class 03 SOT',
      'Defense, Firearms & Aerospace',
    ],
  },
];

export default function CredentialsSection() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;

  return (
    <section className={`${styles.section} section-ink`} ref={sectionRef} aria-label="Credentials">
      <div className="container">
        <p className="label reveal" style={{ transitionDelay: '0s' }}>Credentials</p>
        <span className="rule reveal" style={{ transitionDelay: '0.1s' }} />

        <div className={styles.grid}>
          {credentials.map((col, i) => (
            <div
              key={col.label}
              className={`reveal ${styles.col}`}
              style={{ transitionDelay: `${0.15 + i * 0.12}s` }}
            >
              <h3 className={styles.colLabel}>{col.label}</h3>
              <ul className={styles.itemList}>
                {col.items.map((item) => (
                  <li key={item} className={styles.item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
