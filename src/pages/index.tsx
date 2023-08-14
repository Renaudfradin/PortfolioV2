import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="Portfolio Renaud Fradin"
          content="Portfolio Renaud Fradin Develloper fulstack"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.container}>
          <h2>Je suis Renaud Développeur Front-end</h2>
          <a href="/works">Mes projets</a>
          <Image 
            src="../../assets/loup.svg"
            width={300}
            height={300}
            alt="img"
          ></Image>
        </div>
      </main>
    </>
  );
}
