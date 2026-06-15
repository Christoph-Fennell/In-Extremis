'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './ServiceCards.module.css';

const services = [
  {
    number: '01',
    title: 'Go-to-Market Strategy',
    body: 'Market analysis, positioning, and the practical plan to capture it — from product launch sequencing to channel and pricing strategy, grounded in how the defense and firearms markets actually function.',
    icon: '⊕',
  },
  {
    number: '02',
    title: 'Brand Positioning & Messaging',
    body: "The architecture of how a company is understood: its position, its message, and the narrative that makes the right buyers choose it. Built on what is real and shows a company's value. Truth, not Hype.",
    icon: '◈',
  },
  {
    number: '03',
    title: 'Media Production & Content',
    body: 'Logistics and Planning support for photography, video, and content strategy and production that meets the standard this industry expects. Managed and art-directed end to end, collaborating with trusted production partners.',
    icon: '▣',
  },
  {
    number: '04',
    title: 'Partnerships & Industry Access',
    body: 'Introductions, collaborations, program development, and credentialed access to specialized products, programs, and the people who are behind them. Access to a pre-established network across the defense, firearms, and aerospace sectors.',
    icon: '⊞',
  },
  {
    number: '05',
    title: 'Operational Requirements & Advisory',
    body: "Product and market insight from the end user's perspective, program requirements translation, and strategic counsel for companies building for law enforcement, the civilian defense industry, and the warfighter.",
    icon: '⊟',
  },
  {
    number: '06',
    title: 'SME Brand Representation',
    body: "On-camera brand representation, providing subject-matter expert insights and/or hosting for client brands, for all types of media and content.",
    icon: '√',
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
