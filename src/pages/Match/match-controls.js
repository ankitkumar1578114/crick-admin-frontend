import useGetTeams from '../Team/hooks/useGetTeams'
import useGetVenues from '../Venue/hooks/useGetVenues'

const MatchControls = () => {
  const teamOptions = useGetTeams()
  const venueOptions = useGetVenues()

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
    }

  ]
  return controls
}
export default MatchControls
