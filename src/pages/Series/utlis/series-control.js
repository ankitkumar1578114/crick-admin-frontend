const playerControls = () => {
  const controls = [
    {
      label: 'Series Name',
      type: 'text',
      value: '',
      key: 'name',
      rules: {
        required: 'Series Name is Required'
      }

    },
    {
      label: 'Image Url',
      type: 'text',
      value: '',
      key: 'image_url',
      rules: {
        required: 'Image Url Name is Required'
      }

    }
  ]
  return controls
}
export default playerControls
