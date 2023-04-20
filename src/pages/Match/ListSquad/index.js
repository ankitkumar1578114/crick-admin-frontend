import SquadItem from './SquadItem'
import style from './styles.module.css'
const ListSquad = ({ squad1, squad2, getMatchById, matchId }) => {
  return (<>
        <div className={style.squads}>
            <div>
                <SquadItem squad={squad1} getMatchById={getMatchById} matchId={matchId}/>
            </div>
            <div>
                <SquadItem squad={squad2} getMatchById={getMatchById} matchId={matchId}/>
            </div>
        </div>

    </>)
}

export default ListSquad
