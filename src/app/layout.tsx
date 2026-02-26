import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import NavBar from "@/components/NavBar/NavBar";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Renaud Fradin",
    template: "%s | Renaud Fradin",
  },
  description: "Portfolio de Renaud Fradin, Développeur Full-Stack",
  keywords: ["Développeur", "Full-Stack", "Next", "Laravel", "React"],
  verification: {
    google: "_KX0umOMf3fOJhmM4lMncQwYkBfBqLxBY8iwjDeJOVM",
  },
  icons: {
    icon: "/logo.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300&family=Oswald:wght@600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=La+Belle+Aurore&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=La+Belle+Aurore&family=Secular+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <NavBar />
        <div className="app">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
