const playerControls = () => {
  const controls = [
    {
      label: 'Name',
      type: 'text',
      value: '',
      key: 'name'
    },
    {
      label: 'DOB',
      type: 'date',
      key: 'dob'
    },
    {
      label: 'Country',
      type: 'text',
      value: '',
      key: 'country'
    },
    {
      label: 'Expertise',
      type: 'select',
      value: '',
      key: 'expertise',
      options: [
        { label: 'Batting', value: 'bat' },
        { label: 'Bowling', value: 'bowl' },
        { label: 'Wicket Keeping', value: 'wk' },
        { label: 'Allrounder', value: 'all' }
      ]
    }
  ]
  return controls
}
export default playerControls
