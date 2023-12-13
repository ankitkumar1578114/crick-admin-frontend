import { useEffect, useState } from 'react'
import useRequest from '../../../common/hooks/useRequest'
const useListTeams = ({ searchText = '', primaryCall = true }) => {
  const [count, setCount] = useState(0)

  const { data, loading, trigger } = useRequest({
    url: 'team/list_teams',
    method: 'post',
    isConfig: true
  })

  const listTeams = async () => {
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
      listTeams()
    } else {
      if (count >= 1) { listTeams() }
    }
    setCount(count + 1)
  }, [searchText])

  return {
    loading,
    data: data?.data,
    options: data?.data,
    listTeams
  }
}
export default useListTeams
