import axios from 'axios'
import { useEffect, useState } from 'react'
const useGetPlayers = ({ searchText = '' }) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }
  const getPlayersAPI = async (data) => {
    const payload = { like: { name: searchText }, filters: { created_by: 0 } }
    const res = await axios.post(process.env.REACT_APP_BACKEND + 'player/list_players', { ...payload }, config)
    return res
  }

  const getPlayers = () => {
    getPlayersAPI().then((res) => { setLoading(false); setData(res) })
  }

  useEffect(() => {
    getPlayers()
  }, [searchText])
  return {
    loading,
    options: data?.data,
    data: data?.data,
    getPlayers
  }
}
export default useGetPlayers
