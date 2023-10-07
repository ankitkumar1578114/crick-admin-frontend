import { useEffect } from 'react'
import useRequest from '../../../common/hooks/useRequest'
const useListSeries = ({ searchText = '' }) => {
  const { data, loading, trigger } = useRequest({
    url: 'series/list_series',
    method: 'post',
    isConfig: true
  })

  const listSeries = async () => {
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
    listSeries()
  }, [searchText])
  return {
    loading,
    data: data?.data,
    options: data?.data,
    listSeries
  }
}
export default useListSeries
