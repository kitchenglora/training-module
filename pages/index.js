import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
      </Head>


      <main>

        <Header />

        <div className= {styles.HomeContainer}>
        <div className={styles.homeHead}>
            <h1>Training Module</h1>
            <div className={styles.homeContent}>
              <p>Our Training modules are constructively to train the House Officers  focusing on common areas like operational administration, guest hosting, safeguarding and many more. Each module functions as a chapter with a clear overview and are intended to educate the staff on the organization daily functioning. It leads the entire process to the team through digital portals and applications on how to control and exercise the operations on a contingent basis.</p>
            </div>
          </div>
          <div className={styles.startLearningContainer}>
            <Link href= '/modules'><button className={styles.startLearningBut}>Start Learning</button></Link>
          </div>
        </div>
{/* <Footer/> */}
      </main>

    </>
  )
}
