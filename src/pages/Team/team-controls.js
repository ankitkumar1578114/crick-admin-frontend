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
      key: 'image_url'
    }
  ]
  return controls
}
export default TeamControls
