import axios from 'axios'
const useCreateMatch = ({ getMatches }) => {
  let res
  const createMatch = async (data) => {
    res = await axios.post('http://localhost:4000/match/create', data)
    getMatches()
  }

  return {
    createMatch,
    data: res?.data,
    status: res?.status
  }
}
export default useCreateMatch
