import Link from 'next/link'
import { BsFillMoonStarsFill } from 'react-icons/bs'

const Nav = () => {
  return (
    <nav className="text-lg flex flex-row justify-around text-b">
                <a href="/">
                <h3 className="m-4 text-4xl text-b font-bold" style={{color: 'red'}}>Tech<span style={{color:'blue'}} >Wiz</span></h3>
                  </a>
        <ul className="flex gap-10 m-6">
            <li>
                <Link href="/post">Blog</Link>
            </li>
            <li>
                <Link href="/projects">Projects</Link>
            </li>
            <li>
                <Link href="/pos">Posts</Link>
            </li>
            <li>
      <BsFillMoonStarsFill style={{color: 'black'}}/>
      </li>
        </ul>
    </nav>
  )
}

export default Nav