import TeamList from '../Team/List'
import SeriesList from '../Series/List'
import MatchList from '../Match/List'
import VenueList from '../Venue/List'
import PlayerList from '../Player/List'
import styles from './styles.module.css'
const DashboardPage = () => {
  return <>
      <div className={styles.cards}>
        <div className={styles.card} style={{ width: '66%' }}><MatchList/></div>
        <div className={styles.card}><SeriesList/></div>
        <div className={styles.card}><TeamList/></div>
        <div className={styles.card}><PlayerList/></div>
        <div className={styles.card}><VenueList/></div>
      </div>
    </>
}
export default DashboardPage
