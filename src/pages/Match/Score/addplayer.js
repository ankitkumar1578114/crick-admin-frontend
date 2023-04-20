const AddPlayerControls = ({ playerOptions1, playerOptions2, squad }) => {
  // console.log(squad, squad?.batsman_on_strike, playerOptions1, 'squad')
  const controls = [
    {
      label: 'Strike',
      type: 'player-select',
      value: squad?.batsman_on_strike,
      key: 'batsmanOnStrike',
      options: playerOptions1
    },
    {
      label: 'Non Strike',
      type: 'player-select',
      value: squad?.batsman_on_non_strike,
      key: 'batsmanOnNonStrike',
      options: playerOptions1
    },
    {
      label: 'Bowler',
      type: 'player-select',
      value: squad?.bowler,
      key: 'bowler',
      options: playerOptions2
    }

  ]
  return controls
}
export default AddPlayerControls
