import useGetPlayers from '../Player/hooks/useGetPlayers'

const SquadControls = () => {
  const playersOptions = useGetPlayers()
  const controls = [
    {
      label: 'Squad Id',
      type: 'text',
      value: '',
      key: 'squadId'
    },
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
export default SquadControls
