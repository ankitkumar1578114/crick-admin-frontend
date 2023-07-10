import axios from 'axios'
const useCreateMatch = ({ getMatches }) => {
  let res
  const createMatch = async (data) => {
    res = await axios.post(process.env.REACT_APP_BACKEND + 'match/create_match', data)
    getMatches()
  }

  return {
    createMatch,
    data: res?.data,
    status: res?.status
  }
}
export default useCreateMatch
