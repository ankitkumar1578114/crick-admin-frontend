import axios from 'axios'
import { useEffect, useState } from 'react'
const useGetPlayers = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }
  const getPlayersAPI = async (data) => {
    const res = await axios.post(process.env.REACT_APP_BACKEND + 'player/list_players', data, config)
    return res
  }

  const getPlayers = () => {
    getPlayersAPI().then((res) => { setLoading(false); setData(res) })
  }

  useEffect(() => {
    getPlayers()
  }, [])
  return {
    loading,
    options: data?.data,
    data: data?.data,
    getPlayers
  }
}
export default useGetPlayers
