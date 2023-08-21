import Image from "next/image";
import Head from "next/head";
import styles from "../styles/layout.module.css"


export default function Layout({children}) {

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Image
                src='/image/react.svg'
                alt='React Logo'
                width={40}
                height={10}
                />
                <h1>React</h1>
            </header>
            {children}
        </div>
    )
}