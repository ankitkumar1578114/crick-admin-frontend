import axios from 'axios'
import { useEffect, useState } from 'react'
const useGetTeams = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }
  const getTeamsFunc = async (data) => {
    const res = await axios.post(process.env.REACT_APP_BACKEND + 'team/list_teams', data, config)
    return res
  }
  const getTeams = () => {
    getTeamsFunc().then((res) => { setLoading(false); setData(res) })
  }
  useEffect(() => {
    getTeams()
  }, [])

  return {
    loading,
    options: data?.data,
    data: data?.data,
    getTeams
  }
}
export default useGetTeams
