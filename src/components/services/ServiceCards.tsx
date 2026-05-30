'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './ServiceCards.module.css';

const services = [
  {
    number: '01',
    title: 'Go-to-Market Strategy',
    body: 'Market analysis, positioning, and the practical plan to capture it — from product launch sequencing to channel and pricing strategy, grounded in how the defense and firearms markets actually move.',
    icon: '⊕',
  },
  {
    number: '02',
    title: 'Brand Positioning & Messaging',
    body: 'The architecture of how a company is understood: its position, its message, and the narrative that makes the right buyers choose it. Built on what is real and defensible, not borrowed gloss.',
    icon: '◈',
  },
  {
    number: '03',
    title: 'Media Production & Content',
    body: 'Photography, video, and content strategy that meets the standard this audience expects. Managed and art-directed end to end, drawing on trusted production partners.',
    icon: '▣',
  },
  {
    number: '04',
    title: 'Partnerships & Industry Access',
    body: 'Introductions, collaborations, and credentialed access to specialized products and the people who make them. A network across the defense, firearms, and aerospace sectors, put to work for the client.',
    icon: '⊞',
  },
  {
    number: '05',
    title: 'Operational Requirements & Advisory',
    body: 'Product-market insight from the end user\'s perspective, requirements translation, and strategic counsel for companies building for operators, law enforcement, and the warfighter.',
    icon: '⊟',
  },
];

export default function ServiceCards() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;

  return (
    <section className={`${styles.section} section-paper`} ref={sectionRef} aria-label="Service areas">
      <div className="container">
        <div className={styles.grid}>
          {services.map((service, i) => (
            <article
              key={service.number}
              className={`reveal ${styles.card}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className={styles.cardTop}>
                <span className={styles.number}>{service.number}</span>
                <span className={styles.cardLine} aria-hidden="true" />
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardBody}>{service.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
