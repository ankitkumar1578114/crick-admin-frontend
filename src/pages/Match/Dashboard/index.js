import Histogram from '../../Components/Histogram'
import styles from './styles.module.css'

const Dashboard = ({ battingTeam, score }) => {
  const hoverItem = (item) => (
        <>
            <div className={styles.on_hover}> <b>Runs</b> : {item?.runs}</div>
            <div className={styles.on_hover}><b>Wickets</b> : {item?.wickets}</div>
        </>
  )
  return <>
        <div className={styles.parent}>
            <div className={styles.left}>
            <Histogram data={battingTeam === 1 ? score?.team1?.oversDetails : score?.team2?.oversDetails} hoverItem ={hoverItem} _key='runs' xName="Overs" title="Runs v/s Overs"/>
            </div>
        </div>
    </>
}
export default Dashboard
