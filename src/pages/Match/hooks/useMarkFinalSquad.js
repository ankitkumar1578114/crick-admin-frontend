import axios from 'axios'
import { useState } from 'react'
const useMarkFinalSquads = ({ matchId, getMatchById, squad1, squad2 }) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const isSquadsValidated = () => {
    const team1playing11 = squad1?.players?.filter((player) => { return player?.selected })
    const team2playing11 = squad2?.players?.filter((player) => { return player?.selected })
    console.log(team1playing11, team2playing11)
    if (team1playing11?.length === 11 && team2playing11?.length === 11) { return true }
    return false
  }
  const markSquads = async (data) => {
    const res = await axios.put(process.env.REACT_APP_BACKEND + 'match/update_match/mark_final_squads', { matchId, squad1, squad2 })
    return res
  }

  const markFinalSquads = () => {
    if (isSquadsValidated()) { markSquads().then((res) => { setLoading(false); setData(res); getMatchById(matchId) }) } else alert('Squads are not in format')
  }

  return {
    loading,
    score: data?.data,
    markFinalSquads,
    isSquadsValidated
  }
}
export default useMarkFinalSquads
