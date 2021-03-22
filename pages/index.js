import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas" />
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, 
                commodi veritatis consequuntur rem provident tempora, mollitia doloremque in, 
                ullam deleniti perspiciatis a quas atque molestias asperiores explicabo 
                voluptates? Voluptates, officiis?</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, 
          commodi veritatis consequuntur rem provident tempora, mollitia doloremque in, 
          ullam deleniti perspiciatis a quas atque molestias asperiores explicabo 
          voluptates? Voluptates, officiis?</p>
      
        <Link href="/ninjas">
            <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      
    </div>
    </>
  )
}
