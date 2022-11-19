import { useState, useEffect } from "react"
import styles from '../styles/Home.module.css'
import { useRouter } from "next/router";
import Gameplay from "./gameplay";
import socket from "../utils/socket";

export default function Input() {
    const [username, setUsername] = useState('');
    const router = useRouter()
  
    const handleNameChange = (event: any) => {
        console.log(event.target.value)
        setUsername(event.target.value)
    }
    function HandlePlayButton(event: any) {
        console.log(username)
        router.push({
            pathname: '/gameplay',
            query: {
                username
            }
            
        })
    }

    return (
        <div>
             <div>
                <input 
                    type="text" 
                    id="username" 
                    name="username" 
                    placeholder="Enter Username"
                    className={styles.input} 
                    minLength={1}
                    maxLength={15}
                    value={username}
                    onChange={handleNameChange}>
                </input>
             </div>
            <div>
                <button 
                    className={styles.buttonplay}
                    onClick={HandlePlayButton}>
                    PLAY
                </button>
            </div>
        </div>
       
    )
}