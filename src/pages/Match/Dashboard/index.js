import Histogram from '../../Components/Histogram'
import styles from './styles.module.css'

const Dashboard = ({ active, score }) => {
  const hoverItem = (item) => (
        <>
            <div className={styles.on_hover}> <b>Runs</b> : {item?.runs}</div>
            <div className={styles.on_hover}><b>Wickets</b> : {item?.wickets}</div>
        </>
  )
  return <>
        <div className={styles.parent}>
            {
                active === 0 && <Histogram data={score?.team1?.oversDetails} hoverItem ={hoverItem} _key='runs' xName="Overs" title={score?.team1?.name + ' Runs v/s Overs'}/>

            }
            {
                active === 1 && <Histogram data={score?.team2?.oversDetails} hoverItem ={hoverItem} _key='runs' xName="Overs" title={score?.team2?.name + ' Runs v/s Overs'}/>
            }
        </div>
    </>
}
export default Dashboard
