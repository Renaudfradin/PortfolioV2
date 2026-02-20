import HomeComponent from "@/components/Home/Home";
import Wolf from "@/components/Wolf/Wolf";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.parentHome}>
      <HomeComponent />
      <Wolf />
    </div>
  );
}
