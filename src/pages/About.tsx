import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/about.module.css";

export default function about() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta
          name="Portfolio Renaud Fradin"
          content="Portfolio Renaud Fradin Développeur Fullstack"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container_body}>
        <div>
          <h2>Présentation</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus eaque recusandae atque architecto id placeat, reprehenderit cupiditate commodi facilis adipisci est illo at vitae quis officiis odit eos incidunt.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus eaque recusandae atque architecto id placeat, reprehenderit cupiditate commodi facilis adipisci est illo at vitae quis officiis odit eos incidunt.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus eaque recusandae atque architecto id placeat, reprehenderit cupiditate commodi facilis adipisci est illo at vitae quis officiis odit eos incidunt.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus eaque recusandae atque architecto id placeat, reprehenderit cupiditate commodi facilis adipisci est illo at vitae quis officiis odit eos incidunt.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus eaque recusandae atque architecto id placeat, reprehenderit cupiditate commodi facilis adipisci est illo at vitae quis officiis odit eos incidunt.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus eaque recusandae atque architecto id placeat, reprehenderit cupiditate commodi facilis adipisci est illo at vitae quis officiis odit eos incidunt.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus eaque recusandae atque architecto id placeat, reprehenderit cupiditate commodi facilis adipisci est illo at vitae quis officiis odit eos incidunt.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus eaque recusandae atque architecto id placeat, reprehenderit cupiditate commodi facilis adipisci est illo at vitae quis officiis odit eos incidunt.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus eaque recusandae atque architecto id placeat, reprehenderit cupiditate commodi facilis adipisci est illo at vitae quis officiis odit eos incidunt.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus eaque recusandae atque architecto id placeat, reprehenderit cupiditate commodi facilis adipisci est illo at vitae quis officiis odit eos incidunt.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus eaque recusandae atque architecto id placeat, reprehenderit cupiditate commodi facilis adipisci est illo at vitae quis officiis odit eos incidunt.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus eaque recusandae atque architecto id placeat, reprehenderit cupiditate commodi facilis adipisci est illo at vitae quis officiis odit eos incidunt.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus eaque recusandae atque architecto id placeat, reprehenderit cupiditate commodi facilis adipisci est illo at vitae quis officiis odit eos incidunt.</p>
        </div>
        <Image 
          src="../../assets/loup.svg"
          width={300}
          height={300}
          alt="img"
        ></Image>
      </main>
    </>
  )
}