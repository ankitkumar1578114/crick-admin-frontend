import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { Link, useLocation } from 'react-router-dom'
import useAuth from '../../Navigation/hooks/useAuth'
import Button from '../../Components/Button'
const SideNav = ({ user, setUser, setUserLoaded }) => {
  const options = [
    {
      key: '/series',
      label: 'Series'
    },
    {
      key: '/match',
      label: 'Match'
    },
    {
      key: '/team',
      label: 'Team'
    },
    {
      key: '/player',
      label: 'Player'
    }, {
      key: '/venue',
      label: 'Venue'
    }
  ]
  const location = useLocation()
  const [activeTab, setActiveTab] = useState(location?.pathname)
  const { responseMessage } = useAuth({ setUser, setUserLoaded })

  useEffect(() => {
    responseMessage({ credential: localStorage.getItem('token') })
  }, [])

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('profileData')
    setUser(null)
  }

  return <>
  <div className={styles.parent}>
  <div className={styles.profile_image}>
            {
              user &&
              <img src={user?.image_url} style={{ width: '66px', height: '66px', borderRadius: '50%' }} />
            }
            <div className={styles.user_name}>
              {user?.name}
            </div>
          </div>
  {
        options?.map((option) => (
            <Link to={option?.key} key={option?.key} className={activeTab === option?.key ? styles.selected_item : styles.not_selected_item}
            onClick={() => setActiveTab(option?.key)}

            >
                {option?.label}
            </Link>

        ))
    }
    <div className={styles.flex}>
      <Button value="Logout" type="secondary" onClick={() => logout()}/>
    </div>

  </div>
    </>
}
export default SideNav
