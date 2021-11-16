import Link from "next/link"
import styles from '../../styles/Home.module.css'
import Footer from "../../components/Footer"

export default function phase2() {
  return (
      <>
      <h1>Second Phase</h1>
      <ul>
        <li>TAILWIND</li>
        <li>NEXT.JS</li>
        <li>SERVICE WORKERS</li>
        <li>WEB PERFORMANCE</li>
        <li>ACCESSIBILITY</li>
        <li>SEO</li>
        <li>INFRASTRUCTURE <br />
            <input type="checkbox" />How is a React App hosted?<br />
            <input type="checkbox" />What is a CDN?<br />
            <input type="checkbox" />How does Continuous Integration work?
        </li>
      </ul>
      <Footer />
      </>
  ) 
}