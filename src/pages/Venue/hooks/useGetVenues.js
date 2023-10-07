import axios from 'axios'
import { useEffect, useState } from 'react'
const useGetVenues = ({ searchText = '' }) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }
  const getVenuesAPI = async (data) => {
    const payload = {
      like: { name: searchText },
      filters: {
        created_by: 0
      }
    }
    const res = await axios.post(process.env.REACT_APP_BACKEND + 'venue/list_venues', { ...payload }, config)
    return res
  }
  const getVenues = () => {
    getVenuesAPI().then((res) => { setLoading(false); setData(res) })
  }
  useEffect(() => {
    getVenues()
  }, [searchText])
  return {
    loading,
    data: data?.data,
    options: data?.data,
    getVenues
  }
}
export default useGetVenues
