import styles from '../styles/Layout.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <title>Francis Meru</title>
      <meta name='keywords' content='programming, web developemnt' />
    </Head>
  <div className={styles.cont}>
    <h1>Welcome to my portfolio</h1>
    <h3>Am Francis a full stack developer</h3>
    <p>I have Skills in: </p>
      <li>ReactJS</li>
      <li>NextJS</li>
      <li>ExpressJS</li>
      <li>MongoDB</li>
    </div>
    </>
  )
}
