const TeamControls = () => {
  const controls = [
    {
      label: 'Team Name',
      type: 'text',
      value: '',
      key: 'name',
      rules: {
        required: 'Team Name is Required'
      }
    },
    {
      label: 'Image Url',
      type: 'text',
      value: '',
      key: 'image_url',
      rules: {
        required: 'Image URL is Required'
      }
    }
  ]
  return controls
}
export default TeamControls
