import Link from "next/link";
import "./notFound.css";

export default function NotFoundComponent() {
  return (
    <div className="gif">
      <div className="glitchWrapper">
        <span className="digit">4</span>
        <span className="digit digitMiddle">0</span>
        <span className="digit">4</span>
      </div>
      <p className="glitchText">Page Not Found</p>
      <Link href="/" className="glitchLink">
        Go Home
      </Link>
    </div>
  );
}
