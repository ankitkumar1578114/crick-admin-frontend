import { useEffect, useState } from 'react'
import useRequest from '../../../common/hooks/useRequest'
const useListVenues = ({ searchText = '', primaryCall = true }) => {
  const [count, setCount] = useState(0)

  const { data, loading, trigger } = useRequest({
    url: 'venue/list_venues',
    method: 'post',
    isConfig: true
  })

  const listVenues = async () => {
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
      listVenues()
    } else {
      if (count >= 1) { listVenues() }
    }
    setCount(count + 1)
  }, [searchText])

  return {
    loading,
    data: data?.data,
    options: data?.data,
    listVenues
  }
}
export default useListVenues
