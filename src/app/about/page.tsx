import type { Metadata } from "next";
import AboutComponent from "@/components/About/About";
import Wolf from "@/components/Wolf/Wolf";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className={styles.presentations}>
      <AboutComponent />
      <Wolf />
    </div>
  );
}
