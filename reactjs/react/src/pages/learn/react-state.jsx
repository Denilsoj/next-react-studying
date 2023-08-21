import Layout from "@/components/layout"
import Head from "next/head"
import Form from "@/components/form"
import Link from "next/link"
import styles from "../../styles/utilitaries.module.css"

export default function ReactingState() {

    return (
        <Layout>
            <Head>
                <title>React</title>
            </Head>
            <div style={{width: '100vw',
                        textAlign:'center',
                        marginTop: '150px'}}>
                    <Form className={styles.form}/>
                    <Link href="/">Back to home</Link>
            </div>
        </Layout>
    )
}