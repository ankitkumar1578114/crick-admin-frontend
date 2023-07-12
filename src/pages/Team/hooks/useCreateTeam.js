import axios from 'axios'
import { useState } from 'react'

const useCreateTeam = ({ getTeams, setShow }) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }

  const createTeam = async (data) => {
    const res = await axios.post(process.env.REACT_APP_BACKEND + 'team/create_team', data, config)
    setShow(false)
    getTeams()
    return res
  }

  const addTeam = (data) => {
    createTeam(data).then((res) => { setLoading(false); setData(res); getTeams() })
  }
  return { addTeam, loading, data }
}
export default useCreateTeam
