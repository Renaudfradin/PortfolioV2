"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const urlLink = "https://www.linkedin.com/in/renaudfradin/";
  const urlGit = "https://github.com/Renaudfradin";

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={styles.header}>
      <div className={styles.topBar}>
        <Link className={styles.nav1} href="/" onClick={closeMenu}>
          <img className={styles.nav3} style={{ width: "100%" }} src="/logo.svg" alt="Logo" />
        </Link>
        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}>
        <Link className={`${styles.nav} ${pathname === "/" ? styles.activeClass : ""}`} href="/" onClick={closeMenu}>
          <i className="fas fa-home"></i>
        </Link>
        <Link className={`${styles.nav} ${pathname === "/about" ? styles.activeClass : ""}`} href="/about" onClick={closeMenu}>
          <i className="far fa-user"></i>
        </Link>
        <Link className={`${styles.nav} ${pathname === "/skills" ? styles.activeClass : ""}`} href="/skills" onClick={closeMenu}>
          <i className="fas fa-cog"></i>
        </Link>
        <Link className={`${styles.nav} ${pathname === "/project" ? styles.activeClass : ""}`} href="/project" onClick={closeMenu}>
          <i className="far fa-eye"></i>
        </Link>
        <Link className={`${styles.nav} ${pathname === "/contact" ? styles.activeClass : ""}`} href="/contact" onClick={closeMenu}>
          <i className="far fa-envelope"></i>
        </Link>
      </div>
      <div className={`${styles.socials} ${menuOpen ? styles.menuOpen : ""}`}>
        <a className={styles.nav} href={urlLink} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a className={styles.nav} href={urlGit} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
}
