import Head from 'next/head'
import Link from "next/link"
import Footer from "../components/Footer"
import Header from "../components/Header"

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
      <Header />
      <main className="bg-blue-dark bg-opacity-90 text-yellow font-poppins h-screen">
        <h1 className="text-6xl text-center pt-48 px-2 uppercase tracking-wide">The Intern <span className="text-blue font-semibold">Tech Stack</span></h1>

        <div className="flex mx-4 flex-wrap justify-center pb-12 pt-12">

          <div className="text-xl border rounded-lg p-4 m-4 w-64 hover:bg-blue hover:text-blue-dark shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <Link href="/phases/phase1">
              <a>
                <h2 className="uppercase font-semibold tracking-wide">Phase 1 &rarr;</h2>
                <p className="tracking-wide">This is the first step in the journey.</p>
              </a>
            </Link>
          </div>

          <div className="text-xl border rounded-lg p-4 m-4 w-64 hover:bg-blue hover:text-blue-dark shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <Link href="/phases/phase2">
              <a>
                <h2 className="uppercase font-semibold tracking-wide">Phase 2 &rarr;</h2>
                <p className="tracking-wide">Starting to dive in a little deeper</p>
              </a>
            </Link>
          </div>

          <div className="text-xl border rounded-lg p-4 m-4 w-64 hover:bg-blue hover:text-blue-dark shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <Link href="/phases/phase3">
              <a>
                <h2 className="uppercase font-semibold tracking-wide">Phase 3 &rarr;</h2>
                <p className="tracking-wide">Junior Front End Developer</p>
              </a>
            </Link>
          </div>

          <div className="text-xl border rounded-lg p-4 m-4 w-64 hover:bg-blue hover:text-blue-dark shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <a href="https://github.com/TJdev-codes" target="_blank">
              <h2 className="uppercase font-semibold tracking-wide">Projects &rarr;</h2>
              <p className="tracking-wide">Check out my projects here.</p>
            </a>
          </div>

        </div>
      </main>

      <Footer />
     
    </div>

  )
}


// Make text below each heading a little lighter (either opacity or lighter version of same color)
// Stack boxes vertically
// Make "TECH STACK" a different color or more bold
//  style={{backgroundImage: `url("../../public/oriental-tiles.png")`}}