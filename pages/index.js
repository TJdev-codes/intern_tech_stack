import Head from 'next/head'
import Link from "next/link"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Intern Tech Stack</title>
        <meta name="description" content="From Intern To Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>The Intern Tech Stack</h1>

        <div>

          <div>
            <Link href="/phases/phase1">
              <a>
                <h2>Start Here &rarr;</h2>
                <p>This is the first step in the journey.</p>
              </a>
            </Link>
          </div>

          <div>
            <Link href="/phases/phase2">
              <a>
                <h2>Phase 2 &rarr;</h2>
                <p>Starting to dive in a little deeper</p>
              </a>
            </Link>
          </div>

          <div>
            <Link href="/phases/phase3">
              <a>
                <h2>Phase 3 &rarr;</h2>
                <p>Junior Developer Territory</p>
              </a>
            </Link>
          </div>

          <div>
            <a href="https://github.com/TJdev-codes" target="_blank">
              <h2>Projects &rarr;</h2>
              <p>Check out my projects here.</p>
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
