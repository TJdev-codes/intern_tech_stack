import Link from "next/link"

export default function Header() {
    return (
        <>
            <header className="fixed top-0 w-screen bg-purple font-poppins h-32 border-b border-blue">
            <ul className="flex justify-around mt-12 text-yellow uppercase">
            <li className="hover:text-blue"><h2><Link href="/"><a className="tracking-wider">Home</a></Link></h2></li>
            <li className="hover:text-blue"><h2><Link href="/phases/phase1"><a className="tracking-wider">Phase 1</a></Link></h2></li>
            <li className="hover:text-blue"><h2><Link href="/phases/phase2"><a className="tracking-wider">Phase 2</a></Link></h2></li>
            <li className="hover:text-blue"><h2><Link href="/phases/phase3"><a className="tracking-wider">Phase 3</a></Link></h2></li>
            <li className="hover:text-blue"><h2><a href="https://github.com/TJdev-codes" target="_blank" className="tracking-wider">Projects</a></h2></li>
            </ul>
        </header>
      </>
    )
}
