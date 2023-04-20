import axios from 'axios'
import { useEffect, useState } from 'react'
const useGetScore = ({ matchId, team1, team2 }) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const getScore = async () => {
    console.log({ matchId, team1, team2 })
    const res = await axios.post('http://localhost:4000/match/score', { matchId, team1, team2 })
    return res
  }

  const getScoreData = () => {
    getScore().then((res) => { setLoading(false); setData(res) })
  }

  useEffect(() => {
    if (team1 && team2 && matchId) {
      getScoreData()
    }
  }, [team1, team2, matchId])
  return {
    loading,
    score: data?.data,
    getScoreData
  }
}
export default useGetScore
