import useRequest from '../../../../../../common/hooks/useRequest'
const useOpenRegistration = ({ squad, getMatchById }) => {
  const { data, loading, trigger } = useRequest({
    url: 'squad/open_registration',
    method: 'post',
    isConfig: true
  })
  const openRegistration = async (values) => {
    const { matchFee, freeSeats } = values
    console.log(matchFee, freeSeats)
    if (squad?.id && matchFee >= 10 && freeSeats >= 1 && freeSeats <= 11) {
      await trigger({ ...values, squadId: squad?.id })
      getMatchById()
    } else alert('Minimum 1 Player and Minimum 10 Fee rupees is required.')
  }
  return {
    data,
    loading,
    openRegistration
  }
}
export default useOpenRegistration
