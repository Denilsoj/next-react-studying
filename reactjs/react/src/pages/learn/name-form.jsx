"use cliente"
import Layout from "@/components/layout";
import { useState } from "react";

export default function NameForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] =useState ('');
    // const [fullName, setFullName] = useState('');

    // evitando redudancia 
    // nunca use uma variável de estado sem necessidade 
    const fullName = firstName + '  ' + lastName
    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
        // setFullName(e.target.value + '' + lastName)
    }

    function handleLastNameChange(e){
        setLastName(e.target.value)
        // setFullName(firstName + '' + e.target.value)
    }

    return (
        <>
          <h2>Let’s check you in</h2>
          <label>
            First name:{' '}
            <input
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </label>
          <label>
            Last name:{' '}
            <input
              value={lastName}
              onChange={handleLastNameChange}
            />
          </label>
          <p>
            Your ticket will be issued to: <b>{fullName}</b>
          </p>
        </>
      );
}