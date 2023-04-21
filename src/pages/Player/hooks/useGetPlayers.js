import axios from 'axios'
import { useEffect, useState } from 'react'
const useGetPlayers = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const getPlayers = async (data) => {
    const res = await axios.get(process.env.REACT_APP_BACKEND + 'player/list', data)
    return res
  }

  useEffect(() => {
    getPlayers().then((res) => { setLoading(false); setData(res) })
  }, [])
  return {
    loading,
    options: data?.data,
    data: data?.data
  }
}
export default useGetPlayers
