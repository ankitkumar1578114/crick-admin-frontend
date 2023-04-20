import axios from 'axios'
import { useEffect, useState } from 'react'
const useGetPlayers = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const getPlayers = async (data) => {
    const res = await axios.get('http://localhost:4000/player/list', data)
    return res
  }

  useEffect(() => {
    getPlayers().then((res) => { setLoading(false); setData(res) })
  }, [])
  return {
    loading,
    options: data?.data
  }
}
export default useGetPlayers
