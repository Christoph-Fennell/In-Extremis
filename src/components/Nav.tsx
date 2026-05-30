'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Nav.module.css';

export default function Nav() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const pathname = usePathname();
  const isHome   = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navClass = [
    styles.nav,
    (!isHome || scrolled) ? styles.solid : styles.transparent,
    menuOpen ? styles.menuActive : '',
  ].join(' ');

  const links = [
    { href: '/',         label: 'Home'     },
    { href: '/about',    label: 'About'    },
    { href: '/services', label: 'Services' },
  ];

  return (
    <>
      <nav className={navClass} role="navigation" aria-label="Main navigation">
        <div className={styles.inner}>
          {/* ── Logo ── */}
          <Link href="/" className={styles.logoLink} aria-label="In Extremis Consulting — Home">
            <WordmarkSVG />
          </Link>

          {/* ── Desktop links ── */}
          <ul className={styles.desktopLinks}>
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={[
                    styles.navLink,
                    pathname === href ? styles.active : '',
                  ].join(' ')}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── Hamburger ── */}
          <button
            className={styles.hamburger}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </div>
      </nav>

      {/* ── Mobile Overlay ── */}
      <div
        className={[styles.overlay, menuOpen ? styles.overlayOpen : ''].join(' ')}
        aria-hidden={!menuOpen}
      >
        <ul className={styles.overlayLinks}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={styles.overlayLink}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.overlaySub}>
          <span className={styles.overlayMotto}>Transfixus sed non mortuus</span>
        </div>
      </div>
    </>
  );
}

/* ── Inline wordmark (text-based stand-in; replace SVG artwork when brand kit is available) ── */
function WordmarkSVG() {
  return (
    <span className={styles.wordmark}>
      <span className={styles.wordmarkCross}>†</span>
      In Extremis
      <span className={styles.wordmarkSub}>CONSULTING</span>
    </span>
  );
}
