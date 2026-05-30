import styles from './ServicesHero.module.css';

export default function ServicesHero() {
  return (
    <section className={`${styles.hero} section-ink`} aria-label="Services">
      <div className={`container ${styles.inner}`}>
        <p className="label fade-rise fade-rise-1">What We Offer</p>
        <h1 className={`fade-rise fade-rise-2 ${styles.title}`}>Services</h1>
        <p className={`fade-rise fade-rise-3 ${styles.intro}`}>
          In Extremis Consulting supports industry clients with go-to-market strategy, brand
          positioning, and credentialed access to specialized products and partnerships.
          Engagements are scoped to the problem, not to a template. What follows is the core
          of what we do.
        </p>
      </div>
    </section>
  );
}
