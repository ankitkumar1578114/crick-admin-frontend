import axios from 'axios'
import { useState } from 'react'

const useAddSquad = ({ matchId, getMatchById }) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const addSquadInMatch = async (data) => {
    const payload = {
      matchId,
      ...data
    }
    const res = await axios.post(process.env.REACT_APP_BACKEND + 'squad/create_squad', payload)
    return res
  }

  const addSquad = (data) => {
    addSquadInMatch(data).then((res) => { setLoading(false); setData(res); getMatchById() })
  }

  return {
    addSquad,
    loading,
    data: data?.data,
    options: data?.data
  }
}
export default useAddSquad
