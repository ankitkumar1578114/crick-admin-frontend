import axios from 'axios'
import { useEffect, useState } from 'react'
const useGetMatchById = (id) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const getMatch = async (id) => {
    const res = await axios.get(process.env.REACT_APP_BACKEND + 'match?id=' + id, data)
    return res
  }
  const getMatchById = () => {
    getMatch(id).then((res) => { setLoading(false); setData(res) })
  }

  useEffect(() => {
    if (id) { getMatchById() }
  }, [id])
  return {
    loading,
    data: data?.data,
    options: data?.data,
    getMatchById
  }
}
export default useGetMatchById
