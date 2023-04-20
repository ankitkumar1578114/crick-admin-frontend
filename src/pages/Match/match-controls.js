import useGetTeams from '../Team/hooks/useGetTeams'
import useGetVenues from '../Venue/hooks/useGetVenues'

const MatchControls = () => {
  const teamOptions = useGetTeams()
  const venueOptions = useGetVenues()

  const controls = [
    {
      label: 'name',
      type: 'text',
      value: '',
      key: 'name'
    },
    {
      label: 'team1',
      type: 'team-select',
      value: '',
      key: 'team1',
      ...teamOptions
    },
    {
      label: 'team2',
      type: 'team-select',
      value: '',
      key: 'team2',
      ...teamOptions
    },

    {
      label: 'venue',
      type: 'venue-select',
      value: '',
      key: 'venue',
      ...venueOptions
    }

  ]
  return controls
}
export default MatchControls
