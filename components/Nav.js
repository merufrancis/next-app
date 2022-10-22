import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <div className={navStyles.nav}>
        <h3>LOGO</h3>
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

    </div>
  )
}

export default Nav