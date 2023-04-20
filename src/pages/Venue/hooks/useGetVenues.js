import axios from 'axios'
import { useEffect, useState } from 'react'
const useGetVenues = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const getVenues = async (data) => {
    const res = await axios.get('http://localhost:4000/venue/list', data)
    return res
  }

  useEffect(() => {
    getVenues().then((res) => { setLoading(false); setData(res) })
  }, [])
  return {
    loading,
    options: data?.data
  }
}
export default useGetVenues
