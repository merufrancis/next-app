import React from 'react'
import Link from 'next/link'
import { BsFillMoonStarsFill } from "react-icons/bs";

const Nav = () => {
  return (
    <div className='flex flex-row justify-around bg-white px-10 lg:px-52'>
    <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-3xl font-bold">
                <Link href="/">Techwiz</Link>
                </h1>
            <ul className="flex items-center">
            <li className="px-8 dark:text-white">
                <Link href="/post">Blog</Link>
            </li>
            <li className="px-8 dark:text-white">
                <Link href="/projects">Projects</Link>
            </li>
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
            </ul>
          </nav>
    </div>
  )
}

export default Nav