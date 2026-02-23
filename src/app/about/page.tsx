import type { Metadata } from "next";
import AboutComponent from "@/components/About/About";
import Wolf from "@/components/Wolf/Wolf";
import "./about.css";

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Renaud Fradin - Développeur Full-Stack - Renaud Fradin',
  keywords: [
    'Renaud Fradin',
    'Développeur Full-Stack',
    'Portfolio',
    'About Renaud Fradin',
  ],
  icons: {
    icon: '/logo.ico',
  },
};

export default function AboutPage() {
  return (
    <div className="presentations">
      <AboutComponent />
      <Wolf />
    </div>
  );
}
