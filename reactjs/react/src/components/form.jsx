'use client'
import {useState} from "react"
import styles from "../styles/utilitaries.module.css"

export default function Form() {
    
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState (null); 
    const [status, setStatus] = useState('empty')

    if(status === 'sucess') {

        return <h1>That's right!</h1>
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');

        try {
            await submitForm(answer); 
            setStatus('sucess');
        } catch (err){
            setStatus('typing')
        }
       
    }

    return (
        <>
        <h2 className={styles.marginBotton15}>City quiz</h2>
        <p className={styles.marginBotton15}>
          In which city is there a billboard that turns air into drinkable water?
        </p>
        <form>
          <textarea 
          className={styles.marginBotton15}
          disabled={status === 'submitting'}
          onChange={(e) => setAnswer(e.target.value)}
          />
          <br />
          <button 
          className={styles.buttonSub}
          disabled= {answer.length === 0 || status === 'submitting'}
          onClick={handleSubmit}
          >
            Submit
          </button>
          { status === 'err' && <p> Good guess but a wrong answer. Try again!</p>}
        </form>
      </>
    )
    
}

function submitForm (answer) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let sholdError = answer.toLowerCase() ==! 'lima'
            if(sholdError) {
                reject(new Error('Good guess but a wrong answer. Try again!'));
            }else {
                resolve()
            }
        }, 1500)
    })
}