import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/about.module.css";

export default function About() {
  return (
    <>
      <Head>
        <title>About page</title>
        <meta
          name="Portfolio Renaud Fradin"
          content="Portfolio Renaud Fradin Develloper fulstack"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <p>About page</p>
        <h2>Présentation</h2>
        <p>
          Je suis un étudiant de 23 ans.
          Je suis actuellement en Mastère CTO & Tech Lead a l'école EEMI.
          J'ai obtenu un Bachelor développeur web à Hetic en septembre 2022.
          J'ai obtenu un BTS SIO (Service Informatique aux Organisations) SLAM (Solutions Logicielles et Applications Métiers) en juin 2020.
          J'ai obtenu un Titre professionnel Développeur web et web mobile à L'AFPA en juin 2019.
          J'ai obtenu mon baccalauréat STI2D (sciences & technologies de l'industrie et du développement durable) en juin 2018.
          Pendant mon temps libre je travaille sur des projet personelle , je fait du sport (c’est une passion et une motivation) , j'étudie aussi l’histoire et je joue aussi aux jeux vidéo (fps , rpg, mmo).
          Je milite activement pour la cause animale.
        </p>
        <Image 
          src="../../assets/loup.svg"
          width={300}
          height={300}
          alt="img"
        ></Image>
      </div>
    </>
  )
}