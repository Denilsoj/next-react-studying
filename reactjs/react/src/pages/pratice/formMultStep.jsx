"use client"
import Layout from "@/components/layout";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/utilitaries.module.css"


const url = "http://localhost:3004/users"

export default function FormMultStep () {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        number: '',
        email: ''

    });
    const [status, setStatus] = useState('step-0')
    
    function handleOnchange(e) {
        e.preventDefault();

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

  
    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('sucess')

        const {firstName, lastName, number, email} = user

        const userDes = {
            firstName,
            lastName,
            number,
            email
        }
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userDes)
        })
        setUser({
            firstName: '',
            lastName: '',
            number: '',
            email: ''
        })
        console.log(user)
    }
    if(status === 'step-0' || status === 'sucess'){
        return(
            <Layout>
            <div className={styles.cardForm}>
                <form className={styles.flexColumn}>
                    <header className={styles.headerForm}>
                        <h1>Registre-se</h1>
                        <Image
                        src="/image/face.svg"
                        alt="facebook"
                        width={50}
                        height={30}
                        />
                    </header>
                    
                    <input type="text" name="firstName" placeholder="Seu nome" onChange={handleOnchange} value={user.firstName} className={styles.input} />
                    <input type="text" name="lastName" placeholder="Seu sobrenome" onChange={handleOnchange} value={user.lastName} className={styles.input}/>
                    <div className={status === "sucess"?styles.cheked:styles.displayNone}>
                        <Image
                        src="/image/check-symbol.svg"
                        alt="cheked"
                        width={12}
                        height={5}
                        />
                        <p>cadastro realizado com sucesso</p>
                    </div>
                    <button onClick={e => { e.preventDefault(); 
                                            setStatus('step-1'); console.log(user)}} className={styles.buttonSub}>avançar</button>
                </form>
            </div>
        </Layout>
        )
    } else if(status === 'step-1') {

    return(
        <Layout>

            <div className={styles.cardForm}>
                <form className={styles.flexColumn}>
                    <header className={styles.headerForm}>
                        <h1>Registre-se</h1>
                        <Image
                        src="/image/face.svg"
                        alt="facebook"
                        width={50}
                        height={30}
                        />
                    </header>
                    <input type="text" name="number" placeholder="(xx)xxxx-xxxx" onChange={handleOnchange} value={user.number} className={styles.input}/>
                    <input type="text" name="email" placeholder="Seu e-mail" onChange={handleOnchange} value={user.email} className={styles.input}/>
                    <div className={styles.organizeAction}>
                    <button className={styles.actionBtn} onClick={handleSubmit}>finalizar</button>
                    <button className={styles.actionBtn} onClick={e => {  e.preventDefault()       
                                              setStatus('step-0')  }}>voltar</button>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

}