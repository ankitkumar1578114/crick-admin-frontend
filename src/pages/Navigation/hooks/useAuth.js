import axios from 'axios'

const useAuth = ({ setUser }) => {
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
    } catch (err) {
      console.log(err)
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
