import IconScreen from '../Components/Icons/IconScreen'
import styles from './styles.module.css'
const Welcome = () => {
  return <>
      <div className = {styles.parent}>
        <div className={styles.flex}>
            <div className={styles.welcome_text}>
              <div>
                <h1>WELCOME !</h1>
                <h4 className={styles.h4}>WHY WASTING TIME ON PEN & PAPER ?<br/>
                    TIME TO BE DIGITAL
                </h4>

              </div>
            </div>
            <div className={styles.center}>
              <IconScreen />
            </div>
        </div>
      </div>
    </>
}
export default Welcome
