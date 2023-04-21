import axios from 'axios'
import { useState } from 'react'
const useInsertBall = ({
  matchData, ballOftheMatch,
  getScoreData, batPlayerId, ballPlayerId,
  batsmanOnNonStrike, squadId, getMatchById,
  legalBalls, battingTeam
}) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const insertBall = async (result) => {
    if (batPlayerId && batsmanOnNonStrike && ballPlayerId) {
      const payload = {
        matchId: matchData?.id,
        battingTeamId: battingTeam === 1 ? matchData?.team1?.id : matchData?.team2?.id,
        bowlingTeamId: battingTeam === 2 ? matchData?.team2?.id : matchData?.team1?.id,
        ballOftheMatch: ballOftheMatch + 1,
        batPlayerId,
        ballPlayerId,
        batsmanOnNonStrike,
        squadId,
        result: parseInt(result.result),
        legalBalls: legalBalls + 1
      }

      const res = await axios.post(process.env.REACT_APP_BACKEND + 'ball/create', payload)
      setLoading(false)
      setData(res)
      getScoreData()
      getMatchById(matchData?.id)
      return res
    } else {
      alert('Insert Batsmans and Bowlers')
    }
  }

  return {
    loading,
    data: data?.data,
    insertBall
  }
}
export default useInsertBall
