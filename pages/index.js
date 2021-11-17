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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap" rel="stylesheet" />
      </Head>
      
      <main className="bg-blue-dark text-yellow font-poppins h-screen">
        <h1 className="text-6xl text-center pt-24 pb-12 px-2 uppercase tracking-wide">The Intern Tech Stack</h1>

        <div className="flex mx-4 flex-wrap justify-center pb-12 pt-16">

          <div className="text-xl border rounded-lg p-4 m-4 w-64 hover:bg-blue hover:text-blue-dark shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <Link href="/phases/phase1">
              <a>
                <h2 className="uppercase font-semibold">Start Here &rarr;</h2>
                <p>This is the first step in the journey.</p>
              </a>
            </Link>
          </div>

          <div className="text-xl border rounded-lg p-4 m-4 w-64 hover:bg-blue hover:text-blue-dark shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <Link href="/phases/phase2">
              <a>
                <h2 className="uppercase font-semibold">Phase 2 &rarr;</h2>
                <p>Starting to dive in a little deeper</p>
              </a>
            </Link>
          </div>

          <div className="text-xl border rounded-lg p-4 m-4 w-64 hover:bg-blue hover:text-blue-dark shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <Link href="/phases/phase3">
              <a>
                <h2 className="uppercase font-semibold">Phase 3 &rarr;</h2>
                <p>Junior Front End Developer</p>
              </a>
            </Link>
          </div>

          <div className="text-xl border rounded-lg p-4 m-4 w-64 hover:bg-blue hover:text-blue-dark shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <a href="https://github.com/TJdev-codes" target="_blank">
              <h2 className="uppercase font-semibold">Projects &rarr;</h2>
              <p>Check out my projects here.</p>
            </a>
          </div>

        </div>
      </main>

      <Footer />
     
    </div>

  )
}
