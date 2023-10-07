const VenueControls = () => {
  const controls = [
    {
      label: 'Venue Name',
      type: 'text',
      value: '',
      key: 'name',
      placeholder: 'Enter Venue Name',
      rules: {
        required: 'Venue Name is Required'
      }
    },
    {
      label: 'Address',
      type: 'text',
      value: '',
      key: 'address',
      placeholder: 'Enter Address',
      rules: {
        required: 'Address Name is Required'
      }

    }, {
      label: 'Country',
      type: 'text',
      value: '',
      key: 'country',
      placeholder: 'Enter Country Name',
      rules: {
        required: 'Country Name is Required'
      }
    }
  ]
  return controls
}
export default VenueControls
