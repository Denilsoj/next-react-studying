import Layout from "@/components/layout";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/utilitaries.module.css"


export default function Learn() {
    return (
        <Layout>
            <main className={styles.container}>
            <Link href='/learn/react-state'>
                <section className={styles.card}>
                <div>
                    <Image
                    src='/image/react.svg'
                    width={150}
                    height={100}
                    alt='React'
                    />
                    <h4 className={styles.titleCard}>Reagindo à entrada com estado</h4>
                </div>
                </section>
            </Link>
            <Link href='/learn/choosing-the-state-structure'>
                <section className={styles.card}>
                <div>
                    <Image
                    src='/image/react.svg'
                    width={150}
                    height={100}
                    alt='React'
                    />
                    <h4 className={styles.titleCard}>Escolhendo a estrutura do estado</h4>
                </div>
                </section>
            </Link>
        </main>
        </Layout>
    )
}