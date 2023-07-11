import useGetTeams from '../Team/hooks/useGetTeams'
import useGetVenues from '../Venue/hooks/useGetVenues'
import useListSeries from '../Series/hooks/useListSeries'

const MatchControls = () => {
  const teamOptions = useGetTeams()
  const venueOptions = useGetVenues()
  const seriesOptions = useListSeries()
  const controls = [
    {
      label: 'Match name',
      type: 'text',
      value: '',
      key: 'name'
    },
    {
      label: 'Team 1',
      type: 'team-select',
      value: '',
      key: 'team1',
      ...teamOptions
    },
    {
      label: 'Team 2',
      type: 'team-select',
      value: '',
      key: 'team2',
      ...teamOptions
    },
    {
      label: 'Venue',
      type: 'venue-select',
      value: '',
      key: 'venue',
      ...venueOptions
    },
    {
      label: 'Series',
      type: 'series-select',
      value: '',
      key: 'series',
      ...seriesOptions
    },
    {
      label: 'Overs',
      type: 'series-select',
      value: '',
      key: 'overs',
      options: [
        { name: '20' },
        { name: '50' }
      ]
    },
    {
      label: 'Start Time',
      type: 'date',
      value: '',
      key: 'startTime',
      options: [
        { name: '20' },
        { name: '50' }
      ]
    }

  ]
  return controls
}
export default MatchControls
