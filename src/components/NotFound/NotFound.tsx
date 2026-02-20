import Link from "next/link";
import styles from "./NotFound.module.css";

export default function NotFoundComponent() {
  return (
    <div className={styles.gif}>
      <h2>404</h2>
      <img src="/star-wars-obi-wan-kenobi.gif" alt="" />
      <p>Page Not Found</p>
      <Link href="/">Go Home</Link>
    </div>
  );
}
