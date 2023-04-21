import axios from 'axios'
import { useState } from 'react'

const useCreateSquad = ({ squadId, getMatchById, matchId }) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const addPlayer = async (data) => {
    const payload = {
      squadId,
      ...data
    }
    const res = await axios.post(process.env.REACT_APP_BACKEND + 'squad/add-player', payload)
    return res
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
