import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Intern Tech Stack</title>
        <meta name="description" content="From Intern To Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>The Intern Tech Stack</h1>

        <div className={styles.grid}>

          <div className={styles.card}>
            <Link href="/phases/phase1">
              <a>
                <h2>Start Here &rarr;</h2>
                <p>This is the first step in the journey.</p>
              </a>
            </Link>
          </div>

          <div className={styles.card}>
            <Link href="/phases/phase2">
              <a>
                <h2>Phase 2 &rarr;</h2>
                <p>Starting to dive in a little deeper</p>
              </a>
            </Link>
          </div>

          <div className={styles.card}>
            <Link href="/phases/phase3">
              <a>
                <h2>Phase 3 &rarr;</h2>
                <p>Junior Developer Territory</p>
              </a>
            </Link>
          </div>

          <a href="https://github.com/TJdev-codes" className={styles.card}>
            <h2>Projects &rarr;</h2>
            <p>Check out some of my projects here.</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
