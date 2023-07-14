import IconScreen from '../Components/Icons/IconScreen'
import styles from './styles.module.css'
const Welcome = () => {
  return <>
      <div className = {styles.parent}>
        <div className={styles.flex}>
            <div className={styles.welcome_text}>
              <div>
                <h1>Welcome</h1>
                <h3>Manage Your Tournamets</h3>
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
