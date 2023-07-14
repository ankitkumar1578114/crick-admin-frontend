import { useLocation } from 'react-router-dom'
import SideNav from '../../pages/Components/SideNav'
import styles from './styles.module.css'
const Dashboard = ({ children }) => {
  const location = useLocation()
  return <>
    <div className={styles.grand_parent}>

          {
          ['/player', '/team', '/match', '/series', '/venue'].includes(location?.pathname)
            ? <div className={styles.parent}>
          <div className={styles.left}>
              <SideNav />
          </div>
          <div className={styles.right}>
              {children}
          </div>
      </div>
            : <>
                  {children}
              </>
      }

    </div>
    </>
}
export default Dashboard
