import { Link } from 'react-router-dom'
import Logo from '../Components/Icons/Logo'
import style from './styles.module.css'
const Navigations = () => {
  return (<div className={style.navigation}>
          <div className={style.logo}>
            <Logo/>
          </div>
          <div className={style.navigation_links}>
            <Link to="series"><button className={style.button}>Series</button></Link>
            <Link to="match"><button className={style.button}>Match</button></Link>
            <Link to="team"><button className={style.button}>Team</button></Link>
            <Link to="player"><button className={style.button}>Player</button></Link>
            <Link to="venue"><button className={style.button}>Venue</button></Link>
          </div>
        </div>)
}

export default Navigations
