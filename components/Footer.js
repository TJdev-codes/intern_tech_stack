import Link from "next/link"

export default function Footer() {
    return (
        <>
            <footer>
            <ul>
            <li><h2><Link href="/"><a>Home</a></Link></h2></li>
            <li><h2><Link href="/phases/phase1"><a>Phase 1</a></Link></h2></li>
            <li><h2><Link href="/phases/phase2"><a>Phase 2</a></Link></h2></li>
            <li><h2><Link href="/phases/phase3"><a>Phase 3</a></Link></h2></li>
            <li><h2><a href="https://github.com/TJdev-codes" target="_blank">Projects</a></h2></li>
            </ul>
        </footer>
      </>
    )
}
