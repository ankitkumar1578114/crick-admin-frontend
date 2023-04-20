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
    }
  ]
  return controls
}
export default playerControls
