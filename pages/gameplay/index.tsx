import styles from '../../styles/Home.module.css'
import { ReactDOM, useEffect, useState } from 'react'
import { useRouter } from "next/router";
import { io } from 'socket.io-client';

const socket = io("http://localhost:8000")

function Gameplay() {
    const [kills, setKills]:any = useState(3)
    const [birdLive, setBirdLive]:any = useState(5)
    const router:any = useRouter()

    const {
        query: {username}
    }:any = router

    // const props:any = {
    //     username
    // }
    
    useEffect(() => {
        socket.on("connect", () => {
            socket.emit("username", username)  
            console.log("username sent")  
        })
        socket.on("score", (data:any) => {
            if (data[0] == 1) {
                setKills((kills:any) => kills+1)
            }
            setBirdLive((birdLive:any) => birdLive-1)

            if (kills >= 3) {
                console.log("You Win")
                router.push({
                    pathname: '/win',
                })
            }
        })
        // socket.on("win", (data:any) => {
        //     console.log(data)
        // })
        // socket.on("lose", (data:any) => {
        //     console.log(data)
        // })
        
    },[])
    console.log([kills, birdLive])
    if (birdLive == 0) {
        console.log("You Lose")
    }
   

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