import styles from "../styles/Home.module.css"
import data from "../utils/data.json"
import { getUser } from '../lib/helper'
import { useQuery } from 'react-query'

export default function Table() {
    const sortBy:any = require('sort-by')

    const {isLoading, error, data, isError}:any = useQuery('users',getUser)
    console.log(data)

    if(isLoading) return <div>Player is Loading...</div>
    if(isError) return <div>{error}</div>

    return(<div>
        <table className={styles.column}>
            <thead>
                <tr>
                    <th>
                        <span>Username</span>
                    </th>
                    <th>
                        <span>Kills</span>
                    </th>
                    <th>
                        <span>Birds Left</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.sort(sortBy('kills', 'birdLive')).reverse().map((item:any, index:any) =>{
                    return (
                        <tr key = {index}>
                            <td>
                                <span>{item.username || 'unknown'}</span>
                            </td>
                            <td>
                                <span>{item.kills}</span>
                            </td>
                            <td>
                                <span>{item.birdLive}</span>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
    )
}
    
