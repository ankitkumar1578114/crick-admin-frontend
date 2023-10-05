const VenueControls = () => {
  const controls = [
    {
      label: 'Venue Name',
      type: 'text',
      value: '',
      key: 'name',
      rules: {
        required: 'Venue Name is Required'
      }
    },
    {
      label: 'Address',
      type: 'text',
      value: '',
      key: 'address',
      rules: {
        required: 'Address Name is Required'
      }

    }, {
      label: 'Country',
      type: 'text',
      value: '',
      key: 'country',
      rules: {
        required: 'Country Name is Required'
      }
    }
  ]
  return controls
}
export default VenueControls
