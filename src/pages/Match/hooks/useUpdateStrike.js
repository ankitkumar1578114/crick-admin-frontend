import axios from 'axios'
import { useState } from 'react'
const useUpdateStrike = ({ squadId, getMatchById, matchId, battingTeam, wickets }) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const updateStrike = async (values) => {
    if ([0, 3].includes(battingTeam)) {
      alert('Match has not started yet.')
      return
    }
    const {
      batsman_on_strike: batsmanOnStrike,
      batsman_on_non_strike: batsmanOnNonStrike,
      bowler
    } = values

    if (batsmanOnStrike && batsmanOnNonStrike && bowler && (batsmanOnStrike !== batsmanOnNonStrike)) {
      const payload =
        {
          squadId,
          wickets,
          ...values
        }
      const res = await axios.put(process.env.REACT_APP_BACKEND + 'squad/update_squad', payload)
      setLoading(false)
      getMatchById(matchId)
      setData(res)
      return res
    }
  }

  return {
    loading,
    data: data?.data,
    updateStrike
  }
}
export default useUpdateStrike
