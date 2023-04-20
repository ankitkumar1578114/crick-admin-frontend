import axios from 'axios'
import { useState } from 'react'
const useInsertBall = ({ matchData, ballOftheMatch, getScoreData }) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const insertBall = async (result) => {
    const payload = {
      matchId: matchData?.id,
      battingTeamId: matchData?.team1?.id,
      bowlingTeamId: matchData?.team2?.id,
      ballOftheMatch: ballOftheMatch + 1,
      batPlayerId: 1,
      ballPlayerId: 2,
      result: parseInt(result.result)
    }

    const res = await axios.post('http://localhost:4000/ball/create', payload)
    setLoading(false)
    setData(res)
    getScoreData()
    return res
  }

  return {
    loading,
    data: data?.data,
    insertBall
  }
}
export default useInsertBall
