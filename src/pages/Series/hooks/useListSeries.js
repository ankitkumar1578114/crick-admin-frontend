import { useEffect } from 'react'
import useRequest from '../../../common/hooks/useRequest'
const useListSeries = () => {
  const { data, loading, trigger } = useRequest({
    url: 'series/list_series',
    method: 'get',
    isConfig: true
  })

  const listSeries = async (data) => {
    trigger(data)
  }

  useEffect(() => {
    listSeries()
  }, [])
  return {
    loading,
    data: data?.data,
    options: data?.data
  }
}
export default useListSeries
