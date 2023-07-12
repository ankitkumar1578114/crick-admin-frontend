import axios from 'axios'
const useCreateMatch = ({ getMatches, setShow }) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }

  let res
  const createMatch = async (data) => {
    res = await axios.post(process.env.REACT_APP_BACKEND + 'match/create_match', data, config)
    getMatches()
    setShow(false)
  }

  return {
    createMatch,
    data: res?.data,
    status: res?.status
  }
}
export default useCreateMatch
