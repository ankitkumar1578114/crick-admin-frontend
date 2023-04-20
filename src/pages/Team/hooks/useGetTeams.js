import axios from 'axios'
import { useEffect, useState } from 'react'
const useGetTeams = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const getTeamsFunc = async (data) => {
    const res = await axios.get('http://localhost:4000/team/list', data)
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
