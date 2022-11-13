import Head from 'next/head'
import Image from 'next/image'
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
          ANGRYCOW
        </h1>
        <h1 className={styles.title}>
          USERNAME
        </h1>

        <div>
          <Input></Input>
        </div>
        <a
           className={styles.buttonscore}
           href='/scoreboard'
        >SCOREBOARD</a>
      </main>
    </div>
  )
}
