import axios from 'axios'
import { useEffect, useState } from 'react'
const useGetVenues = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const getVenues = async (data) => {
    const res = await axios.get(process.env.REACT_APP_BACKEND + 'venue/list_venues', data)
    return res
  }

  useEffect(() => {
    getVenues().then((res) => { setLoading(false); setData(res) })
  }, [])
  return {
    loading,
    data: data?.data,
    options: data?.data,
    getVenues
  }
}
export default useGetVenues
