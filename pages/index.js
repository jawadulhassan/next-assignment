import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Loading Handler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Song Fetcher!</a>
        </h1>

        <div className={styles.grid}>
          <Link href="/songs/[name]" as={`/songs/Michael+Jackson`}>
            <a className={styles.card}>
              <h3>Michael Jackson &rarr;</h3>
              <p>Find Michael Jackson Songs</p>
            </a>
          </Link>

          <Link href="/songs/[name]" as={`/songs/Justin+Bieber`}>
            <a className={styles.card}>
              <h3>Justin Bieber &rarr;</h3>
              <p>Find Justin Bieber Songs</p>
            </a>
          </Link>

          <Link href="/songs/[name]" as={`/songs/Jennifer+Lopez`}>
            <a className={styles.card}>
              <h3>Jennifer Lopez &rarr;</h3>
              <p>Find Jennifer Lopez Songs</p>
            </a>
          </Link>

          <Link href="/songs/Rihanna" as={`/songs/Rihanna`}>
            <a className={styles.card}>
              <h3>Rihanna &rarr;</h3>
              <p>Find RihannaSongs</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
