import styles from '../../styles/Home.module.css'
import { ReactDOM, useEffect, useState } from 'react'
import { useRouter } from "next/router";
import { io } from 'socket.io-client';

const socket = io("http://localhost:8000")

function Gameplay() {
    const [kills, setKills] = useState(0)
    const [birdLive, setBirdLive] = useState(5)
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
        socket.on("score", (data) => {
            setKills(kills+data[0])
            setBirdLive(birdLive+data[1])
        })
        socket.on("win", (data) => {
            console.log(data)
        })
        socket.on("lose", (data) => {
            console.log(data)
        })
        
    },[])

    console.log([kills,birdLive])

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
                        <span>{kills}</span>
                    </td>
                    <td>
                        <span>{birdLive}</span>
                    </td>
                </tr>
            </tbody>
        </table>    
    </div>)
}
export default Gameplay