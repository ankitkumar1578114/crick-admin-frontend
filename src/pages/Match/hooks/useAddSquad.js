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
    const res = await axios.post('http://localhost:4000/squad/create', payload)
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
