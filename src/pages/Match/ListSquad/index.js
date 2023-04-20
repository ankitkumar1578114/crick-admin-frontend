import useMarkFinalSquads from '../hooks/useMarkFinalSquad'
import SquadItem from './SquadItem'
import style from './styles.module.css'
const ListSquad = ({ squad1, squad2, getMatchById, matchId, isSquadFinal }) => {
  const { markFinalSquads } = useMarkFinalSquads({ matchId, getMatchById })
  return (<>
        <div className={style.squads}>
            <div>
                <SquadItem squad={squad1} getMatchById={getMatchById} matchId={matchId} isSquadFinal={isSquadFinal}/>
            </div>
            <div>
                <SquadItem squad={squad2} getMatchById={getMatchById} matchId={matchId} isSquadFinal={isSquadFinal}/>
            </div>
        </div>
        {!isSquadFinal &&
            <button className={style.button} onClick={() => markFinalSquads()} >Final Squads</button>
        }

    </>)
}

export default ListSquad
