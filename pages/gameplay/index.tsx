import styles from '../../styles/Home.module.css'
import { ReactDOM, useEffect, useState } from 'react'
import { useRouter } from "next/router";
import { io } from 'socket.io-client';

const socket = io("http://localhost:8000")

function Gameplay() {
    const [kills, setKills] = useState(0)
    const [birdLive, setBirdLive] = useState(0)
    const router = useRouter()

    const {
        query: {username}
    }:any = router

    const props = {
        username
    }
    
    useEffect(() => {
        socket.on("connect", () => {
            socket.emit("username", username)  
            console.log("username sent")  
        })
        socket.on("score", (data:any) => {
            console.log(data)
        })
        socket.on("win", (data) => {
            console.log(data)
        })
        socket.on("lose", (data) => {
            console.log(data)
        })
        
    },[])

    return (<div>
        <table className={styles.gameplay}>
            <thead>
                <tr>
                    <td>
                        <span>KILLS</span>
                    </td>
                    <td>
                        <span>BIRDS LEFT</span>
                    </td>
                </tr>
            </thead>
            <tbody className={styles.score}>
                <tr>
                    <td>
                        <span>{killsScore}</span>
                    </td>
                    <td>
                        <span>{birdLiveScore}</span>
                    </td>
                </tr>
            </tbody>
        </table>    
    </div>)
}
export default Gameplay