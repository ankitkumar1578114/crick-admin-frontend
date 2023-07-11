const VenueControls = () => {
  const controls = [
    {
      label: 'Venue Name',
      type: 'text',
      value: '',
      key: 'name'
    },
    {
      label: 'Address',
      type: 'text',
      value: '',
      key: 'address'
    }, {
      label: 'Country',
      type: 'text',
      value: '',
      key: 'country'
    }
  ]
  return controls
}
export default VenueControls
