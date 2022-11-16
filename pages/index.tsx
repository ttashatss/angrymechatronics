import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Input from './input'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ANGRYPIG</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          ANGRYPIG
        </h1>
        <h1 className={styles.title}>
          USERNAME
        </h1>

        <div>
          <Input></Input>
        </div>
        <Link
           className={styles.buttonscore}
           href='/scoreboard'
        >SCOREBOARD</Link>
      </main>
    </div>
  )
}
