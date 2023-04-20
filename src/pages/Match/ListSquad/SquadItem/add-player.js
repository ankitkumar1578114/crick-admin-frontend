import useGetPlayers from '../../../Player/hooks/useGetPlayers'

const AddPlayerControls = () => {
  const playersOptions = useGetPlayers()
  const controls = [
    {
      label: 'Player',
      type: 'player-select',
      value: '',
      key: 'playerId',
      ...playersOptions
    }
  ]
  return controls
}
export default AddPlayerControls
