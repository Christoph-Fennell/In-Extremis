import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={`${styles.page} section-ink`}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.cross} aria-hidden="true">†</span>
        <h1 className={styles.code}>404</h1>
        <p className={styles.message}>This page is not here.</p>
        <Link href="/" className="btn-primary">
          Return Home →
        </Link>
      </div>
    </div>
  );
}
