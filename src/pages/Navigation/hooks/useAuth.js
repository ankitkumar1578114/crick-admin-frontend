import axios from 'axios'

const useAuth = ({ setUser, setUserLoaded }) => {
  const responseMessage = async (response) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${response.credential}`
        }
      }
      const res = await axios.post(process.env.REACT_APP_BACKEND + 'login/', {}, config)
      localStorage.setItem('token', response.credential)
      localStorage.setItem('profileData', JSON.stringify(res?.data?.profileData))
      setUser(res?.data?.profileData)
      setUserLoaded(true)
    } catch (err) {
      setUserLoaded(true)
      console.log(err, 'err')
      localStorage.removeItem('token')
      localStorage.removeItem('profileData')
    }
  }
  const errorMessage = (error) => {
    console.log(error)
  }

  return {
    responseMessage,
    errorMessage
  }
}
export default useAuth
