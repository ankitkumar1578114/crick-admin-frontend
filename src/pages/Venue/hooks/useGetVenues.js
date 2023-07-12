import axios from 'axios'
import { useEffect, useState } from 'react'
const useGetVenues = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }
  const getVenuesAPI = async (data) => {
    const res = await axios.post(process.env.REACT_APP_BACKEND + 'venue/list_venues', data, config)
    return res
  }
  const getVenues = () => {
    getVenuesAPI().then((res) => { setLoading(false); setData(res) })
  }
  useEffect(() => {
    getVenues()
  }, [])
  return {
    loading,
    data: data?.data,
    options: data?.data,
    getVenues
  }
}
export default useGetVenues
