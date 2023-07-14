import axios from 'axios'
import { useState } from 'react'

const useRequest = ({ url, method = 'post', isConfig = false, autoLoad = true }) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }
  const [loading, setLoading] = useState(autoLoad)
  const [data, setData] = useState([])

  const trigger = async (data) => {
    let res = []
    setLoading(true)
    if (method === 'post') { res = await axios.post(process.env.REACT_APP_BACKEND + url, data, isConfig ? config : {}) }
    if (method === 'get') { res = await axios.get(process.env.REACT_APP_BACKEND + url, isConfig ? config : {}) }
    setData(res)
    setLoading(false)
    return res
  }

  return {
    data,
    loading,
    trigger
  }
}
export default useRequest
