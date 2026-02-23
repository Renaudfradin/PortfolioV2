import type { Metadata } from "next";
import "./contact.css";

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Renaud Fradin - Développeur Full-Stack - Renaud Fradin',
  keywords: [
    'Renaud Fradin',
    'Développeur Full-Stack',
    'Portfolio',
    'Contact Renaud Fradin',
  ],
  icons: {
    icon: '/logo.ico',
  },
};

export default function ContactPage() {
  return (
    <div className="contactCard">
      <h1 className="contactTitle">Travaillons ensemble&nbsp;!</h1>
      <p>Passionné par la création, je suis ouvert à tous types de projets — grands ou petits, chaque défi est une opportunité d&apos;innover.</p>
      <p>Disponible en freelance, je serais ravi de collaborer avec vous ou de répondre à vos questions. Contactez-moi par mail à <a href="mailto:renaudfradin@gmail.com" className="contactLink">renaudfradin@gmail.com</a> ou retrouvez-moi sur <a href="https://www.linkedin.com/in/Renaudfradin/" className="contactLink" target="_blank" rel="noopener noreferrer"> LinkedIn</a></p>
    </div>
  );
}
