import axios from 'axios'
import { useEffect, useState } from 'react'
const useListSeries = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const getPlayers = async (data) => {
    const res = await axios.get(process.env.REACT_APP_BACKEND + 'series/list_series', data)
    return res
  }

  useEffect(() => {
    getPlayers().then((res) => { setLoading(false); setData(res) })
  }, [])
  return {
    loading,
    data: data?.data
  }
}
export default useListSeries
