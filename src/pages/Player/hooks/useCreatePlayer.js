import axios from 'axios'

const useCreatePlayer = ({ getPlayers, setShow }) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }
  let res
  const createPlayer = async (data) => {
    res = await axios.post(process.env.REACT_APP_BACKEND + 'player/insert_player', data, config)
    getPlayers()
    setShow(false)
  }

  return {
    createPlayer,
    data: res?.data,
    status: res?.status
  }
}
export default useCreatePlayer
