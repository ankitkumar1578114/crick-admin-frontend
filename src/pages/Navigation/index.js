import { Link } from 'react-router-dom'
import style from './styles.module.css'
const Navigations = () => {
  return (<>
            <Link to="match"><button className={style.button}>Match</button></Link>
            <Link to="team"><button className={style.button}>Team</button></Link>
            <Link to="player"><button className={style.button}>Player</button></Link>
            <Link to="venue"><button className={style.button}>Venue</button></Link>
        </>)
}

export default Navigations
