import Layout from "@/components/layout"
import Image from "next/image"
import Head from "next/head"
import Link from "next/link";
import styles from "../styles/utilitaries.module.css"

export default function Home() {
  return (
    <>
      <Layout>
        <main className={styles.container}>
          <Link href='/learn/learn'>
            <section className={styles.card}>
              <div>
                <Image
                src='/image/react.svg'
                width={150}
                height={100}
                alt='React'
                />
                <h4 className={styles.titleCard}>Learn</h4>
              </div>
            </section>
          </Link>
          <Link href='/pratice/pratice'>
            <section className={styles.card}>
              <div>
                <Image
                src='/image/react.svg'
                width={150}
                height={100}
                alt='React'
                />
                <h4 className={styles.titleCard}>Pratice</h4>
              </div>
            </section>
          </Link>
        </main>
      </Layout>
    </>
  )
}
