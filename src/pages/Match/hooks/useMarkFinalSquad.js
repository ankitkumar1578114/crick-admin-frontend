import axios from 'axios'
import { useState } from 'react'
const useMarkFinalSquads = ({ matchId, getMatchById, squad1, squad2 }) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const markSquads = async (data) => {
    const res = await axios.put(process.env.REACT_APP_BACKEND + 'match/update_match/mark_final_squads', { matchId, squad1, squad2 })
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
