import useGetTeams from '../Team/hooks/useListTeams'
import useGetVenues from '../Venue/hooks/useListVenues'
import useListSeries from '../Series/hooks/useListSeries'

const MatchControls = () => {
  const teamOptions = useGetTeams({})
  const venueOptions = useGetVenues({})
  const seriesOptions = useListSeries({})
  const controls = [
    {
      label: 'Match name',
      type: 'text',
      value: '',
      key: 'name',
      rules: {
        required: 'Match Name is Required'
      }
    },
    {
      label: 'Team 1',
      type: 'team-select',
      value: '',
      key: 'team1',
      ...teamOptions,
      rules: {
        required: 'Team1 is Required'
      }

    },
    {
      label: 'Team 2',
      type: 'team-select',
      value: '',
      key: 'team2',
      ...teamOptions,
      rules: {
        required: 'Team2 is Required'
      }
    },
    {
      label: 'Venue',
      type: 'venue-select',
      value: '',
      key: 'venue',
      ...venueOptions,
      rules: {
        required: 'Venue is Required'
      }

    },
    {
      label: 'Series',
      type: 'series-select',
      value: '',
      key: 'series_id',
      ...seriesOptions,
      rules: {
        required: 'Series is Required'
      }
    },
    {
      label: 'Overs',
      type: 'select',
      value: '',
      key: 'overs',
      options: [
        { label: '20', value: 20 },
        { label: '50', value: 20 }
      ],
      rules: {
        required: 'Overs are Required'
      }
    },
    {
      label: 'Time',
      type: 'datetime',
      value: '',
      key: 'startTime',
      rules: {
        required: 'Time are Required'
      }
    }

  ]
  return controls
}
export default MatchControls
