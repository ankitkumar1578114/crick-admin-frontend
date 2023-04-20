import axios from 'axios'
const useCreatePlayer = () => {
  let res
  const createPlayer = async (data) => {
    res = await axios.post('http://localhost:4000/player/create', data)
  }

  return {
    createPlayer,
    data: res?.data,
    status: res?.status
  }
}
export default useCreatePlayer
