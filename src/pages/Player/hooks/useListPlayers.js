import { useEffect, useState } from 'react'
import useRequest from '../../../common/hooks/useRequest'
const useListPlayers = ({ searchText = '', primaryCall = true }) => {
  const [count, setCount] = useState(0)

  const { data, loading, trigger } = useRequest({
    url: 'player/list_players',
    method: 'post',
    isConfig: true
  })

  const listPlayers = async () => {
    const payload = {
      filters: {
        created_by: 0
      },
      like: {
        name: searchText
      }
    }
    trigger(payload)
  }

  useEffect(() => {
    if (primaryCall) {
      listPlayers()
    } else {
      if (count >= 1) { listPlayers() }
    }
    setCount(count + 1)
  }, [searchText])

  return {
    loading,
    data: data?.data,
    options: data?.data,
    listPlayers
  }
}
export default useListPlayers
