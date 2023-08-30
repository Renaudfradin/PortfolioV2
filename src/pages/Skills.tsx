import Head from "next/head";
import styles from "@/styles/skills.module.css";

export default function skills() {
  return (
    <>
      <Head>
        <title>Skills</title>
        <meta
          name="Portfolio Renaud Fradin"
          content="Portfolio Renaud Fradin Développeur Fullstack"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <p>Skills page</p>
        <p>Skills & Expérience
          Je suis intéressé par le développement front-end.
          J'utilise le plus souvent les framework React.js , Vue.js et Node.js .
          J'utilise aussi des cms comme Wordpress et Webflow.
          Visitez mon profil Linkedin pour plus de détails et mon Github pour voir mes projets.
        </p>
      </div>
    </>
  )
}