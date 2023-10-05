const playerControls = () => {
  const controls = [
    {
      label: 'Name',
      type: 'text',
      value: '',
      key: 'name',
      rules: {
        required: 'Name is Required'
      }
    },
    {
      label: 'DOB',
      type: 'date',
      key: 'dob',
      rules: {
        required: 'DOB is Required'
      }
    },
    {
      label: 'Country',
      type: 'text',
      value: '',
      key: 'country',
      rules: {
        required: 'Country is Required'
      }
    },
    {
      label: 'Expertise',
      type: 'select',
      value: '',
      key: 'expertise',
      options: [
        { label: 'Batting', value: 'bat' },
        { label: 'Bowling', value: 'bowl' },
        { label: 'Wicket Keeping', value: 'wk' },
        { label: 'Allrounder', value: 'all' }
      ],
      rules: {
        required: 'Expertise is Required'
      }
    }
  ]
  return controls
}
export default playerControls
