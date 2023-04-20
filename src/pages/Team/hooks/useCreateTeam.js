import axios from 'axios'
import { useState } from 'react'

const useCreateTeam = ({ getTeams }) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const createTeam = async (data) => {
    const res = await axios.post('http://localhost:4000/team/create', data)
    return res
  }

  const addTeam = (data) => {
    createTeam(data).then((res) => { setLoading(false); setData(res); getTeams() })
  }
  return { addTeam, loading, data }
}
export default useCreateTeam
