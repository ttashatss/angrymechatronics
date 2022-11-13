import styles from '../../styles/Home.module.css'

export default function gameplay() {
    const kills = 3
    const birdLive = 3
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