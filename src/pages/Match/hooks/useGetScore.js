import axios from 'axios'
import { useEffect, useState } from 'react'
const useGetScore = (id) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const getScore = async (data) => {
    const res = await axios.get('http://localhost:4000/match/score?id=' + id, data)
    return res
  }

  const getScoreData = () => {
    getScore().then((res) => { setLoading(false); setData(res) })
  }

  useEffect(() => {
    getScoreData()
  }, [])
  return {
    loading,
    score: data?.data,
    getScoreData
  }
}
export default useGetScore
