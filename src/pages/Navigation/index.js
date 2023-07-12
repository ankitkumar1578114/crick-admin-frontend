import { Link } from 'react-router-dom'
import Logo from '../Components/Icons/Logo'
import style from './styles.module.css'
import { useEffect } from 'react'
import useAuth from './hooks/useAuth'
import { GoogleLogin } from '@react-oauth/google'

const Navigations = ({ user, setUser }) => {
  const { responseMessage, errorMessage } = useAuth({ setUser })

  useEffect(() => {
    if (!localStorage.getItem('profileData')) { responseMessage({ credential: localStorage.getItem('token') }) } else { setUser(JSON.parse(localStorage.getItem('profileData'))) }
  }, [])

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('profileData')
    setUser(null)
  }

  return (<div className={style.navigation}>
          <div className={style.logo}>
            <Logo/>
          </div>
          <div className={style.navigation_links}>
            <Link to="series"><button className={style.button}>Series</button></Link>
            <Link to="match"><button className={style.button}>Match</button></Link>
            <Link to="team"><button className={style.button}>Team</button></Link>
            <Link to="player"><button className={style.button}>Player</button></Link>
            <Link to="venue"><button className={style.button}>Venue</button></Link>
            <Link>
            </Link>
          </div>
          <div className={style.profile_image}>
          {
            !user &&
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage}
            theme ="filled_black" text="signin" size="medium"/>
            }
            {
              user &&
              <img src={user?.image_url} style={{ width: '40px', height: '40px', borderRadius: '50%' }} onClick={() => logout()}/>
            }
          </div>
        </div>)
}

export default Navigations
