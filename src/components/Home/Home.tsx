import Link from "next/link";
import "./home.css";

export default function HomeComponent() {
  return (
    <div className="presentation">
      <h3>Bonjour</h3>
      <h3>Je suis Renaud</h3>
      <h3>Développeur Full-stack</h3>
      <div className="btnBlock">
        <Link href="/project" className="btnHome">
          Mes projets
        </Link>
        <Link href="/contact" className="btnHome">
          Contactez - moi !
        </Link>
      </div>
    </div>
  );
}
