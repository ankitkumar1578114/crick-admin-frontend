import axios from 'axios'
import { useEffect, useState } from 'react'
const useGetSeries = ({ seriesId }) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const getPlayers = async (data) => {
    const res = await axios.get(process.env.REACT_APP_BACKEND + 'series?id=' + seriesId, data)
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
export default useGetSeries
