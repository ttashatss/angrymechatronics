import { useState } from "react"
import styles from '../styles/Home.module.css'
import { useRouter } from "next/router";

const Input = () => {
    const [userName, setUserName] = useState('');
    const router = useRouter()
  
    const handleNameChange = event => {
        console.log(event.target.value)
        setUserName(event.target.value)
    }
    const handlePlayButton = event => {
        console.log(userName)
        router.push('/gameplay')
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
                    value={userName}
                    onChange={handleNameChange}>
                </input>
             </div>
            <div>
                <button 
                    className={styles.buttonplay}
                    onClick={handlePlayButton}>
                    PLAY
                </button>
            </div>
        </div>
       
    )
}

export default Input