import Link from "next/link"
import styles from '../../styles/Home.module.css'
import Footer from "../../components/Footer"

export default function phase1() {
  return (
      <>
      <h1>First Phase</h1>
      <ul>
          <li>CSS<br />
                <input type="checkbox" />CSS Variables<br />
                <input type="checkbox" />Media Queries &#38; Responsive Concepts<br />
                <input type="checkbox" />Advanced Typography &#38; Sizing with Calc<br />
                <input type="checkbox" />Animations<br />
                <input type="checkbox" />BEM
          </li>
          <li>REACT<br />
                <input type="checkbox" />Concepts &#38; Basics<br />
                <input type="checkbox" />Webpack Config &#38; the Build Process<br />
                <input type="checkbox" />Data Fetching<br />
                <input type="checkbox" />Hooks vs Functions<br />
                <input type="checkbox" />Styled Components<br />
                <input type="checkbox" />App State
          </li>
          <li>GRAPHQL<br />
                <input type="checkbox" />Concepts &#38; Basics<br />
                <input type="checkbox" />Input Variables vs Strings<br />
                <input type="checkbox" />GraphQL Playground
          </li>
          <li>GIT<br />
                <input type="checkbox" />Concepts &#38; Basics<br />
                <input type="checkbox" />Making a Pull Request<br />
                <input type="checkbox" />Resolving a Merge Conflict
              
          </li>
      </ul>
      <Footer />
      </>
  ) 
}