import TeamList from '../Team/List'
import SeriesList from '../Series/List'
import MatchList from '../Match/List'
import VenueList from '../Venue/List'
import PlayerList from '../Player/List'
import styles from './styles.module.css'
import useGetDashboard from './hooks/useGetDashboard'
const DashboardPage = () => {
  const { data, loading } = useGetDashboard()
  console.log(data, 'ddd')

  const {
    matches = [],
    series = [],
    players = [],
    teams = [],
    venues = []
  } = data || {}

  return <>
      <div className={styles.cards}>
        <div className={styles.card} style={{ width: '66%' }}><MatchList matches={matches} loading={loading} isFromDashboard={true}/></div>
        <div className={styles.card}><SeriesList series={series} loading={loading} primaryCall={false}/></div>
        <div className={styles.card}><TeamList teams={teams} loading={loading} primaryCall={false}/></div>
        <div className={styles.card}><PlayerList players={players} loading={loading} primaryCall={false}/></div>
        <div className={styles.card}><VenueList venues={venues} loading={loading} primaryCall={false}/></div>

      </div>
    </>
}
export default DashboardPage
