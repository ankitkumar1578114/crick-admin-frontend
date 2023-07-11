import axios from 'axios'
import { useState } from 'react'

const useCreateVenue = ({ getTeams, setShow, getVenues }) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const createVenue = async (data) => {
    const res = await axios.post(process.env.REACT_APP_BACKEND + 'venue/insert_venue', data)
    setShow(false)
    getVenues()
    return res
  }

  const addTeam = (data) => {
    createVenue(data).then((res) => { setLoading(false); setData(res); getTeams() })
  }
  return { addTeam, loading, data }
}
export default useCreateVenue
