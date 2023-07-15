import Logo from '../Components/Icons/Logo'
import style from './styles.module.css'
import { useEffect } from 'react'
import useAuth from './hooks/useAuth'
import { GoogleLogin } from '@react-oauth/google'

const Navigations = ({ user, setUser, setUserLoaded }) => {
  const { responseMessage, errorMessage } = useAuth({ setUser, setUserLoaded })

  useEffect(() => {
    responseMessage({ credential: localStorage.getItem('token') })
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
