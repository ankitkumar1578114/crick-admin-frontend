import useRequest from '../../../common/hooks/useRequest'

const useAddSquad = ({ matchId, getMatchById }) => {
  const { data, loading, trigger } = useRequest({
    url: 'squad/create',
    method: 'post'
  })

  const addSquad = async (data) => {
    const payload = {
      matchId,
      ...data
    }
    trigger(payload)
  }

  return {
    addSquad,
    loading,
    data: data?.data,
    options: data?.data
  }
}
export default useAddSquad
