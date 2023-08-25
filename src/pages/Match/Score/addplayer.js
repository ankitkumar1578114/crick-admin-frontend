const AddPlayerControls = ({ playerOptions1, playerOptions2, squad }) => {
  const controls = [
    {
      label: 'Strike',
      type: 'player-select',
      value: null,
      key: 'batsman_on_strike',
      options: playerOptions1,
      disabled: squad?.batsman_on_strike
    },
    {
      label: 'Non Strike',
      type: 'player-select',
      value: null,
      key: 'batsman_on_non_strike',
      options: playerOptions1,
      disabled: squad?.batsman_on_non_strike
    },
    {
      label: 'Bowler',
      type: 'player-select',
      value: null,
      key: 'bowler',
      options: playerOptions2,
      disabled: squad?.bowler
    }

  ]
  return controls
}
export default AddPlayerControls
