const playerControls = () => {
  const controls = [
    {
      label: 'Series Name',
      type: 'text',
      value: '',
      key: 'name',
      placeholder: 'Enter Series Name',
      rules: {
        required: 'Series Name is Required'
      }

    },
    {
      label: 'Image Url',
      type: 'text',
      value: '',
      key: 'image_url',
      placeholder: 'Enter Series Image',
      rules: {
        required: 'Image Url Name is Required'
      }

    }
  ]
  return controls
}
export default playerControls
