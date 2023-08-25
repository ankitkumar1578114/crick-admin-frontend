import useGetPlayers from '../../../Player/hooks/useGetPlayers'
const AddPlayerControls = ({ squad, antiSquad }) => {
  const playersOptions = useGetPlayers()
  const afterFilterPlayerOptions = {
    options: playersOptions?.options?.filter(function (val) {
      return [...squad?.players, ...antiSquad?.players]?.map((player) => { return player?.id })?.indexOf(val?.id) === -1
    })
  }

  const controls = [
    {
      label: '',
      type: 'player-select',
      value: '',
      key: 'player_id',
      ...afterFilterPlayerOptions
    }
  ]
  return controls
}
export default AddPlayerControls
