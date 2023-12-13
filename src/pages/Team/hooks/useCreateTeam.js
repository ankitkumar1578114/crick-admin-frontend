import useRequest from '../../../common/hooks/useRequest'

const useCreateTeam = ({ listTeams, setShow }) => {
  const { data, loading, trigger } = useRequest({
    url: 'team/create_team',
    method: 'post',
    isConfig: true
  })

  const addTeam = async (data) => {
    await trigger(data)
    setShow(false)
    await listTeams()
  }

  return { addTeam, loading, data }
}
export default useCreateTeam
