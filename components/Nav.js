import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import { FaBeer } from 'react-icons/fa'

const Nav = () => {
  return (
    <div className={navStyles.nav}>
        <h3 style={{color: 'red'}}>Tech<span style={{color:'blue'}}>Wiz</span></h3>
        <ul className={navStyles.ul}>
            <li className={navStyles.li}>
                <Link href="/">Home</Link>
            </li>
            <li className={navStyles.li}>
                <Link href="/about">About</Link>
            </li>
            <li className={navStyles.li}>
                <Link href="/blog">Blog</Link>
            </li>
            <li className={navStyles.li}>
                <Link href="/projects">Projects</Link>
            </li>
        </ul>
        <a href="favicon.ico" download="">
      <button className={navStyles.btn} >Download Resume</button>
      </a>
      <li>
      <FaBeer />
      </li>
    </div>
  )
}

export default Nav