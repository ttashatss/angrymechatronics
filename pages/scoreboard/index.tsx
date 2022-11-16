import Table from './table'
import styles from '../../styles/Home.module.css'

export default function scoreboard() {
    return (
        <div>
            <div>
                <h1 className={styles.scoreboardtitle}>
                SCOREBOARD
                </h1>
            </div>
            <div>
                <a href='../' className={styles.buttonback}>BACK</a>
            </div>
            
            <Table></Table>
        </div>
    )
}