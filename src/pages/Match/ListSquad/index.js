import useMarkFinalSquads from '../hooks/useMarkFinalSquad'
import SquadItem from './SquadItem'
import styles from './styles.module.css'
const ListSquad = ({ squad1, squad2, getMatchById, matchId, isSquadFinal }) => {
  const { markFinalSquads } = useMarkFinalSquads({ matchId, getMatchById, squad1, squad2 })
  return (<>
        <div className={styles.squads}>
            <div>
                <SquadItem squad={squad1} getMatchById={getMatchById} matchId={matchId} isSquadFinal={isSquadFinal}/>
            </div>
            <div>
                <SquadItem squad={squad2} getMatchById={getMatchById} matchId={matchId} isSquadFinal={isSquadFinal}/>
            </div>
        </div>
        <div className={styles.finalSquadsBtn}>
            {!isSquadFinal &&
                <button className={styles.button} onClick={() => markFinalSquads()} >Final Squads</button>
            }
        </div>

    </>)
}

export default ListSquad
