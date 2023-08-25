import useGetPlayers from '../Player/hooks/useGetPlayers'

const SquadControls = () => {
  const playersOptions = useGetPlayers()
  const controls = [
    {
      label: 'Squad Id',
      type: 'text',
      value: '',
      key: 'squad_id'
    },
    {
      label: 'Player',
      type: 'player-select',
      value: '',
      key: 'player_id',
      ...playersOptions
    }
  ]
  return controls
}
export default SquadControls
