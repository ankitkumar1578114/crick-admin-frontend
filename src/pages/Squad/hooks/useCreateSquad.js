import axios from 'axios'
import { useState } from 'react'

const useCreateSquad = ({ squadId, getMatchById, matchId }) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const addPlayer = async (data) => {
    const payload = {
      squad_id: squadId,
      ...data
    }
    if (data?.player_id) {
      const res = await axios.post(process.env.REACT_APP_BACKEND + 'squad/add_player', payload)
      return res
    }
  }

  const addPlayerInSquad = (data) => {
    addPlayer(data).then((res) => { setLoading(false); setData(res); getMatchById(matchId) })
  }

  return {
    addPlayerInSquad,
    loading,
    data: data?.data,
    options: data?.data
  }
}
export default useCreateSquad
