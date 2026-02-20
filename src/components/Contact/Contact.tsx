import styles from "./Contact.module.css";

export default function ContactComponent() {
  return (
    <div className={styles.contactCard}>
      <h1 className={styles.contactTitle}>Travaillons ensemble&nbsp;!</h1>
      <p>Passionné par la création, je suis ouvert à tous types de projets — grands ou petits, chaque défi est une opportunité d&apos;innover.</p>
      <p>Disponible en freelance, je serais ravi de collaborer avec vous ou de répondre à vos questions. Contactez-moi par mail à <a href="mailto:renaudfradin@gmail.com" className={styles.contactLink}>renaudfradin@gmail.com</a> ou retrouvez-moi sur <a href="https://www.linkedin.com/in/Renaudfradin/" className={styles.contactLink} target="_blank" rel="noopener noreferrer"> LinkedIn</a></p>
    </div>
  );
}
