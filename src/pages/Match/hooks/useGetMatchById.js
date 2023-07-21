import { useEffect } from 'react'
import useRequest from '../../../common/hooks/useRequest'
const useGetMatchById = (id) => {
  const { data, loading, trigger } = useRequest({
    url: 'match?id=' + id,
    method: 'get',
    isConfig: true
  })

  const getMatchById = () => {
    trigger()
  }

  useEffect(() => {
    if (id) { getMatchById() }
  }, [id])
  return {
    loading,
    data: data?.data,
    options: data?.data,
    getMatchById
  }
}
export default useGetMatchById
