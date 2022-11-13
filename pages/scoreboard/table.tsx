import { textSpanIsEmpty } from 'typescript'
import styles from '../../styles/Home.module.css'
import data from "../../utils/data.json"
import { getUser } from '../../lib/helper'
import { useQuery } from 'react-query'

export default function Table() {
    var sortBy = require('sort-by')

    getUser().then(res => console.log(res))
    const {isLoading, isError, data, error} = useQuery('users',getUser)

    if(isLoading) return <div>Employee is Loading...</div>
    if(isError) return <div>Got Error {error}</div>

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
                {data.sort(sortBy('kills', 'birdLive')).reverse().map((item, index) =>{
                    return (
                        <tr key = {index}>
                            <td>
                                <span>{item.username || 'unknown'}</span>
                            </td>
                            <td>
                                <span>{item.kills || 0}</span>
                            </td>
                            <td>
                                <span>{item.birdLive || 5}</span>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
    )
}
    
