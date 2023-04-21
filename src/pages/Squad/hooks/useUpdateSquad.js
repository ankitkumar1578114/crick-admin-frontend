import axios from 'axios'
import { useState } from 'react'

const useUpdateSquad = ({ squadId, getMatchById, matchId }) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const updatePlayer = async (data) => {
    const payload = {
      squadId,
      ...data
    }
    const res = await axios.post(process.env.REACT_APP_BACKEND + 'squad/select-player', payload)
    return res
  }

  const updatePlayerInSquad = (data) => {
    updatePlayer(data).then((res) => { setLoading(false); setData(res); getMatchById(matchId) })
  }

  return {
    updatePlayerInSquad,
    loading,
    data: data?.data,
    options: data?.data
  }
}
export default useUpdateSquad
