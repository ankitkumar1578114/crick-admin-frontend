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
      key: 'imageUrl'
    }
  ]
  return controls
}
export default playerControls
