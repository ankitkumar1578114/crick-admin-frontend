import { Navigate, useLocation } from 'react-router-dom'
import SideNav from '../../pages/Components/SideNav'
import styles from './styles.module.css'
const Dashboard = ({ children, user, setUser, setUserLoaded, userLoaded }) => {
  const location = useLocation()
  if (['/', ''].includes(location.pathname)) {
    if (userLoaded && user) {
      return <><Navigate to="/dashboard"/></>
    }
  } else {
    if (userLoaded && !user) {
      return <><Navigate to="/"/></>
    }
  }
  return <>
    <div className={styles.grand_parent} style={{ paddingTop: user ? '0' : '56px' }}>

          {
          !['/', ''].includes(location?.pathname)
            ? <div className={styles.parent}>
          <div className={styles.left}>
              <SideNav {...{ user, setUser, setUserLoaded }}/>
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
