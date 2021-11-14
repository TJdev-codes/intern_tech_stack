import Link from "next/link"

export default function phase2() {
  return (
      <>
      <h1>Second Phase</h1>
      <h2><Link href="/"><a>Back to Home</a></Link></h2>
      <h2><Link href="/phases/phase1"><a>Phase 1</a></Link></h2>
      <h2><Link href="/phases/phase3"><a>Phase 3</a></Link></h2>
      </>
  ) 
}