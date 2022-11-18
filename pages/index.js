import styles from '../styles/Layout.module.css'
import Head from 'next/head'

export default function Home() {

  return (
    <>
    <Head>
      <title>Francis Meru</title>
      <meta name='keywords' content='programming, web developemnt' />
    </Head>
    <img className={styles.img} />
  <div className={styles.cont}>
    <h3>Am Francis a full stack developer</h3>
    <p>I have Skills in: </p>
      <li>ReactJS</li>
      <li>NextJS</li>
      <li>ExpressJS</li>
      <li>MongoDB</li>
      <a href="favicon.ico" download="">
      <button>Download Resume</button>
      </a>
    </div>
    </>
  )
}
