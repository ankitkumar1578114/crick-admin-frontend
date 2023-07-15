import { useLocation } from 'react-router-dom'
import SideNav from '../../pages/Components/SideNav'
import styles from './styles.module.css'
const Dashboard = ({ children, user, setUser, setUserLoaded }) => {
  const location = useLocation()
  return <>
    <div className={styles.grand_parent} style={{ paddingTop: user ? '0' : '56px' }}>

          {
          !['/', ''].includes(location?.pathname)
            ? <div className={styles.parent}>
          <div className={styles.left}>
              <SideNav user={user} setUser={setUser} setUserLoaded={setUserLoaded}/>
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
