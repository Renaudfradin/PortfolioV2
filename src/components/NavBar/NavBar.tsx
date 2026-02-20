"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const pathname = usePathname();

  const urlLink = "https://www.linkedin.com/in/renaudfradin/";
  const urlGit = "https://github.com/Renaudfradin";

  return (
    <div className={styles.header}>
      <div>
        <Link className={styles.nav1} href="/">
          <img className={styles.nav3} style={{ width: "100%" }} src="/logo.svg" alt="Logo" />
        </Link>
      </div>
      <div>
        <Link className={`${styles.nav} ${pathname === "/" ? styles.activeClass : ""}`} href="/">
          <i className="fas fa-home"></i>
        </Link>
        <Link className={`${styles.nav} ${pathname === "/about" ? styles.activeClass : ""}`} href="/about">
          <i className="far fa-user"></i>
        </Link>
        <Link className={`${styles.nav} ${pathname === "/skills" ? styles.activeClass : ""}`} href="/skills">
          <i className="fas fa-cog"></i>
        </Link>
        <Link className={`${styles.nav} ${pathname === "/projects" ? styles.activeClass : ""}`} href="/projects">
          <i className="far fa-eye"></i>
        </Link>
        <Link className={`${styles.nav} ${pathname === "/contact" ? styles.activeClass : ""}`} href="/contact">
          <i className="far fa-envelope"></i>
        </Link>
      </div>
      <div>
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
