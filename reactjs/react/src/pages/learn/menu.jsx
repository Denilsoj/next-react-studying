"use client"
import { useState } from "react";
import Layout from "@/components/layout";
import styles from "@/styles/utilitaries.module.css"

const initialItems = [
    { title: 'pretzels', id: 0 },
    { title: 'crispy seaweed', id: 1 },
    { title: 'granola bar', id: 2 },
  ];


  export default function Menu() {
    const [items, setItems] = useState(initialItems)
    // const [selectedItem, setSelectedItem] = useState(items[0])
    const [selectedId, setSelectedId] = useState(0)

    const selectedItem = items.find(item => 
        item.id === selectedId
    );
    const handleOnTitle = (id, e) => {
        setItems(items.map((item) => {
            if(item.id === id) {
                return {
                ...item, 
                title: e.target.value
                
                }
            } else {
                return item;
            }
        }))
    }

    return (
    <Layout>
        <div className={styles.container}>
           
            <ul>
            <h2>What's your travel snack?</h2>
                {
                    items.map(item => (
                        <li key={item.id}>
                         <input type="text"  value={item.title} onChange={(e) => handleOnTitle(item.id, e)}/>
                            <button onClick={e => setSelectedId(item.id)} className={styles.chooseBtn}>choose</button>
                        </li>
                        
                    ))
                }
            <p>You picket {selectedItem.title}</p>
            </ul>
        </div>
    </Layout>
    )
  }