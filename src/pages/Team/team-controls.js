const TeamControls = () => {
  const controls = [
    {
      label: 'Team Name',
      type: 'text',
      value: '',
      key: 'name'
    },
    {
      label: 'Image Url',
      type: 'text',
      value: '',
      key: 'imageUrl'
    }

  //   {
  //     label: 'Country',
  //     type: 'select',
  //     value: 'India',
  //     key: 'country',
  //     options: [{
  //       label: 'male', value: 'male'
  //     }, {
  //       label: 'female', value: 'female'
  //     }
  //     ]
  //   }
  ]
  return controls
}
export default TeamControls
