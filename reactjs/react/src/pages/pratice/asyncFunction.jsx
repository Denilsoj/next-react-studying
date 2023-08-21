"use client"
import Layout from "@/components/layout";
import Link from "next/link";
import { useState } from "react";
import styles from "@/styles/utilitaries.module.css"


export default function AsyncFun () {
const [name, setName] = useState('');
const [description, setDescription] = useState('');
const [status, setStatus] = useState('true')


function submitForm () {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve()
        
      }, 1500)
    })
}

async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')

    try{
        await submitForm()
        setStatus('sucess')
    }catch(err) {
        console.log(err)
    }

}
    if(status === 'sucess'){
        return <div className={styles.container}><h1>Obrigado {name} pelo seu FeedBack</h1></div>
    }

    return (
        <Layout>
            <div className={styles.container}>
                <form className={styles.form}> 
                    <h2 className={styles.titleForm}>Informe sua satisfação com nossos serviços</h2>
                    <div className={styles.flexColumn}>
                        <input 
                        type="text" 
                        name="name" 
                        placeholder="Seu nome"
                        className={styles.input}
                        disabled={status === 'loading'}
                        onChange={e => setName(e.target.value)}
                        />

                        <textarea 
                        name="description" 
                        placeholder="Sua satisfação"
                        className={styles.textarea}
                        disabled={status === 'loading'}
                        onChange={e => setDescription(e.target.value)}
                        />
                    </div>
                    <button 
                    className={styles.buttonForm} 
                    disabled={name.length === 0 || description.length === 0 || status === 'loading'} 
                    onClick={handleSubmit}> {status === 'loading'?'loading': 'enviar'}</button>
                </form>
            </div>
        </Layout>
    )
}