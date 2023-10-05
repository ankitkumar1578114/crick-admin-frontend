const AddPlayerControls = ({ playerOptions1, playerOptions2, squad }) => {
  console.log(squad, playerOptions1)
  const afterFilterPlayerOptions = playerOptions1?.filter(function (player) {
    return (player?.batting_order === 12 && player?.selected === 1) || [squad?.batsman_on_strike, squad?.batsman_on_non_strike].includes(player?.id)
  })

  const controls = [
    {
      label: 'Strike',
      type: 'player-select',
      value: null,
      key: 'batsman_on_strike',
      options: afterFilterPlayerOptions,
      disabled: squad?.batsman_on_strike,
      rules: {
        required: 'Player on strike is Required'
      }
    },
    {
      label: 'Non Strike',
      type: 'player-select',
      value: null,
      key: 'batsman_on_non_strike',
      options: afterFilterPlayerOptions,
      disabled: squad?.batsman_on_non_strike,
      rules: {
        required: 'Player on non-strike is Required'
      }
    },
    {
      label: 'Bowler',
      type: 'player-select',
      value: null,
      key: 'bowler',
      options: playerOptions2,
      disabled: squad?.bowler,
      rules: {
        required: 'Bowler is Required'
      }
    }

  ]
  return controls
}
export default AddPlayerControls
