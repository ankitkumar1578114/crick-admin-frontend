import axios from 'axios'
import { useState } from 'react'
const useStartMatch = ({ matchId, getMatchById, firstBatting }) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const startMatchNow = async () => {
    const res = await axios.put(process.env.REACT_APP_BACKEND + 'match/update_match/start_match', { matchId, firstBatting })
    return res
  }

  const startMatch = () => {
    if (firstBatting !== 0) {
      startMatchNow().then((res) => { setLoading(false); setData(res); getMatchById(matchId) })
    }
  }

  return {
    loading,
    data: data?.data,
    startMatch
  }
}
export default useStartMatch
