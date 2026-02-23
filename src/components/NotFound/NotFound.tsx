import Link from "next/link";
import styles from "./NotFound.module.css";

export default function NotFoundComponent() {
  return (
    <div className={styles.gif}>
      <div className={styles.glitchWrapper}>
        <span className={styles.digit}>4</span>
        <span className={`${styles.digit} ${styles.digitMiddle}`}>0</span>
        <span className={styles.digit}>4</span>
      </div>
      <p className={styles.glitchText}>Page Not Found</p>
      <Link href="/" className={styles.glitchLink}>Go Home</Link>
    </div>
  );
}
