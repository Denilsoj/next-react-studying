import Layout from "@/components/layout";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/utilitaries.module.css"


export default function Pratice() {
    return (
        <Layout>
            <main className={styles.container}>
            <Link href='/pratice/asyncFunction'>
                <section className={styles.card}>
                <div>
                    <Image
                    src='/image/react.svg'
                    width={150}
                    height={100}
                    alt='React'
                    />
                    <h4 className={styles.titleCard}>Async Function</h4>
                </div>
                </section>
            </Link>
            <Link href='/pratice/formMultStep'>
                <section className={styles.card}>
                <div>
                    <Image
                    src='/image/react.svg'
                    width={150}
                    height={100}
                    alt='React'
                    />
                    <h4 className={styles.titleCard}>sistema de cadatro</h4>
                </div>
                </section>
            </Link>
        </main>
        </Layout>
    )
}