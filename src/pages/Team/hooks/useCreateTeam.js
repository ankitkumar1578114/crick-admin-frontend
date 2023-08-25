import useRequest from '../../../common/hooks/useRequest'

const useCreateTeam = ({ getTeams, setShow }) => {
  const { data, loading, trigger } = useRequest({
    url: 'team/create_team',
    method: 'post',
    isConfig: true
  })

  const addTeam = async (data) => {
    await trigger(data)
    setShow(false)
    await getTeams()
  }

  return { addTeam, loading, data }
}
export default useCreateTeam
