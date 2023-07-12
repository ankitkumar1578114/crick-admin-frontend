import { useEffect } from 'react'
import useRequest from '../../../common/hooks/useRequest'
const useGetMatches = () => {
  const { data, loading, trigger } = useRequest({
    url: 'match/list_matches',
    method: 'post',
    isConfig: true
  })

  const getMatches = () => {
    trigger()
  }

  useEffect(() => {
    getMatches()
  }, [])
  return {
    loading,
    data: data?.data,
    options: data?.data,
    getMatches
  }
}
export default useGetMatches
