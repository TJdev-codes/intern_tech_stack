import Link from "next/link"

export default function phase1() {
  return (
      <>
      <h1>First Phase</h1>
      <h2><Link href="/"><a>Back to Home</a></Link></h2>
      <h2><Link href="/phases/phase2"><a>Phase 2</a></Link></h2>
      <h2><Link href="/phases/phase3"><a>Phase 3</a></Link></h2>
      </>
  ) 
}