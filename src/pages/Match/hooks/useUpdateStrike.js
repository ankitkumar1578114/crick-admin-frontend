import axios from 'axios'
import { useState } from 'react'
const useUpdateStrike = ({ squadId, getMatchById, matchId, battingTeam }) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const updateStrike = async (values) => {
    console.log(values)
    if ([0, 3].includes(battingTeam)) {
      alert('Match has not started yet.')
      return
    }
    if (values.batsmanOnStrike && values.batsmanOnNonStrike && values.bowler && (values.batsmanOnStrike !== values.batsmanOnNonStrike)) {
      const payload =
        {
          squadId,
          ...values
        }
      const res = await axios.put(process.env.REACT_APP_BACKEND + 'squad/update', payload)
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
