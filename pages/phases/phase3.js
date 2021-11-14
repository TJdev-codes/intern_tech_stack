import Link from "next/link"

export default function phase3() {
  return (
      <>
      <h1>Third Phase</h1>
      <h2><Link href="/"><a>Back to Home</a></Link></h2>
      <h2><Link href="/phases/phase1"><a>Phase 1</a></Link></h2>
      <h2><Link href="/phases/phase2"><a>Phase 2</a></Link></h2>
      </>
  ) 
}