import axios from 'axios'
const useCreatePlayer = () => {
  let res
  const createPlayer = async (data) => {
    res = await axios.post(process.env.REACT_APP_BACKEND + 'player/create', data)
  }

  return {
    createPlayer,
    data: res?.data,
    status: res?.status
  }
}
export default useCreatePlayer
