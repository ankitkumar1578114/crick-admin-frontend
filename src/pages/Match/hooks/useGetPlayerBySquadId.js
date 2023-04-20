import axios from 'axios'
import { useState } from 'react'
const useGetPlayerBySquadId = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const getPlayerBySquadId = async (id) => {
    const res = await axios.get('http://localhost:4000/squad/list-player?id=' + id, data)
    return res
  }
  const getPlayers = (id) => {
    getPlayerBySquadId(id).then((res) => { setLoading(false); setData(res) })
  }
  return {
    loading,
    data: data?.data,
    options: data?.data,
    getPlayers
  }
}
export default useGetPlayerBySquadId
