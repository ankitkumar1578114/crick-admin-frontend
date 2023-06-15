import useGetPlayers from '../../../Player/hooks/useGetPlayers'

const AddPlayerControls = () => {
  const playersOptions = useGetPlayers()
  const controls = [
    {
      label: '',
      type: 'player-select',
      value: '',
      key: 'playerId',
      ...playersOptions
    }
  ]
  return controls
}
export default AddPlayerControls
