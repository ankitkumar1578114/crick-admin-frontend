import axios from 'axios'
import { useEffect, useState } from 'react'
const useGetMatches = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }

  const getMatchList = async (data) => {
    const res = await axios.post(process.env.REACT_APP_BACKEND + 'match/list_matches', data, config)
    return res
  }
  const getMatches = () => {
    getMatchList().then((res) => { setLoading(false); setData(res) })
  }

  useEffect(() => {
    getMatches()
  }, [])
  return {
    loading,
    data: data?.data,
    options: data?.data,
    getMatches
  }
}
export default useGetMatches
