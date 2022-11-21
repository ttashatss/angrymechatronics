import styles from '../../styles/Home.module.css'
import { ReactDOM, useEffect, useState } from 'react'
import { useRouter } from "next/router";
import { io } from 'socket.io-client';
import { addUser,getUser } from '../../lib/helper';
import { useQueryClient } from 'react-query';
import { useMutation } from 'react-query';
import { postUser } from '../../utils/controller';


const socket = io("http://localhost:8000")

function Gameplay() {
    const [kills, setKills]:any = useState(0)
    const [birdLive, setBirdLive]:any = useState(5)
    const router:any = useRouter()
    const queryClient = useQueryClient()
    const addMutation = useMutation(addUser,{
        onSuccess: async () => {
            console.log("Data Inserted")
            await queryClient.prefetchQuery('users', getUser)
        }
    })

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

        })
        // socket.on("win", (data:any) => {
        //     console.log(data)
        // })
        // socket.on("lose", (data:any) => {
        //     console.log(data)
        // })
        
    },[])

    function Senddata(username:any, kills:any, birdLive:any){
        
        const model = {
            username,
            kills, 
            birdLive
        }

        addMutation.mutate(model)
    }

    useEffect(() => {
        if (birdLive == 0) {
            console.log(username)
            Senddata(username, kills, birdLive)
            console.log("You Lose") 
            router.push({
                pathname: '/gameplay/lose',
            })
        }
        if (kills >= 3) {
            console.log(username)
            Senddata(username, kills, birdLive)
            console.log("You Win")
            router.push({
                pathname: '/gameplay/win',
            })
        }
    }, [username, kills, birdLive, router])
    
   

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