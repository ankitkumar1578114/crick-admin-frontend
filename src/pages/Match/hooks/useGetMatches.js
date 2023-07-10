import axios from 'axios'
import { useEffect, useState } from 'react'
const useGetMatches = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const getMatchList = async (data) => {
    const res = await axios.get(process.env.REACT_APP_BACKEND + 'match/list_matches', data)
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
