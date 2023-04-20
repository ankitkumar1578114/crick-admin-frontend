import axios from 'axios'
import { useEffect, useState } from 'react'
const useGetMatches = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const getMatchList = async (data) => {
    const res = await axios.get('http://localhost:4000/match/list', data)
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
