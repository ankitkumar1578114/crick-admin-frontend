const playerControls = () => {
  const controls = [
    {
      label: 'Series Name',
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
export default playerControls
