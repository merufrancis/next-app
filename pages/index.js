import Head from 'next/head'
import { useState } from 'react';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Head>
      <title>Francis Meru</title>
      <meta name='keywords' content='programming, web developemnt' />
    </Head>
  <main className="my-2 px-10">
    <section className="list-none flex flex-col justify-center h-70 text-center p-10">
    <h3 className="justify-center text-5xl text-teal-600 font-bold">Francis Meru</h3>
    <h4 className="text-2xl py-2">Full stack developer</h4>
    <p className="leading-8 text-gray-900">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
    <div className="flex flex-row gap-8 justify-center text-5xl py-5">
    <AiFillTwitterCircle />
    <AiFillLinkedin />
    <AiFillYoutube />
    </div>
    </section>
    <div className="flex justify-center">
    <a href="favicon.ico" download="">
      <button className=" bg-gradient-to-r from-cyan-500 to-red-600 px-2 py-2 rounded-md">Download Resume</button>
      </a>
      </div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

    </main>
    </>
  )
}
