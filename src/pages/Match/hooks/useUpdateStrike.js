import axios from 'axios'
import { useState } from 'react'
const useUpdateStrike = ({ squadId }) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const updateStrike = async (values) => {
    const payload =
        {
          squadId,
          ...values
        }

    const res = await axios.put('http://localhost:4000/squad/update', payload)
    setLoading(false)
    setData(res)
    return res
  }

  return {
    loading,
    data: data?.data,
    updateStrike
  }
}
export default useUpdateStrike
