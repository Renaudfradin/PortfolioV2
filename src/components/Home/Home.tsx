import Link from "next/link";
import styles from "./Home.module.css";

export default function HomeComponent() {
  return (
    <div className={styles.presentation}>
      <h3>Bonjour</h3>
      <h3>Je suis Renaud</h3>
      <h3>Développeur Full-stack</h3>
      <div className={styles.btnBlock}>
        <Link href="/project" className={styles.btnHome}>Mes projets</Link>
        <Link href="/contact" className={styles.btnHome}>Contactez - moi !</Link>
      </div>
    </div>
  );
}
