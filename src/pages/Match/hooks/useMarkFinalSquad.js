import axios from 'axios'
import { useState } from 'react'
const useMarkFinalSquads = ({ matchId, getMatchById }) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const markSquads = async (data) => {
    const res = await axios.put(process.env.REACT_APP_BACKEND + 'match/update/mark_final_squads', { matchId })
    return res
  }

  const markFinalSquads = () => {
    markSquads().then((res) => { setLoading(false); setData(res); getMatchById(matchId) })
  }

  return {
    loading,
    score: data?.data,
    markFinalSquads
  }
}
export default useMarkFinalSquads
