import axios from 'axios'
import { useEffect, useState } from 'react'
const useGetTeams = ({ searchText = '' }) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }
  const getTeamsFunc = async (data) => {
    const payload = {
      ...data,
      like: {
        name: searchText
      }
    }
    console.log(payload, data)
    const res = await axios.post(process.env.REACT_APP_BACKEND + 'team/list_teams', { ...payload }, config)
    return res
  }
  const getTeams = () => {
    getTeamsFunc().then((res) => { setLoading(false); setData(res) })
  }
  useEffect(() => {
    getTeams()
  }, [searchText])

  return {
    loading,
    options: data?.data,
    data: data?.data,
    getTeams
  }
}
export default useGetTeams
