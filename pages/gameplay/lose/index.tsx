import styles from '../../../styles/Home.module.css'
import router from 'next/router'

function Win() {
    function backHandler() {
        router.push({
            pathname: '../',
        })
    }

    
    return (<div>
        <div className={styles.result}>You Lose</div>
        <div style={{
            display: "flex",
            justifyContent: "center"
            }}>
        <button onClick={backHandler} className={styles.resultback}>BACK
        </button>
        </div>
    </div>)
}

export default Win