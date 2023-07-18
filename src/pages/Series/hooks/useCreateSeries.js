import useRequest from '../../../common/hooks/useRequest'

const useCreateSeries = ({ setShow, listSeries }) => {
  const { data, loading, trigger } = useRequest({
    url: 'series/create_series',
    method: 'post',
    isConfig: true
  })
  const createSeries = async (data) => {
    await trigger(data)
    await listSeries()
    await setShow(false)
  }
  return {
    data,
    loading,
    createSeries
  }
}
export default useCreateSeries
