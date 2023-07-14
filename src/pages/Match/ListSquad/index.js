import { useState } from 'react'
import useMarkFinalSquads from '../hooks/useMarkFinalSquad'
import SquadItem from './SquadItem'
import styles from './styles.module.css'
import Tabs from '../../Components/Tabs'
import Button from '../../Components/Button'
const ListSquad = ({ squad1, squad2, getMatchById, matchId, isSquadFinal }) => {
  const { markFinalSquads } = useMarkFinalSquads({ matchId, getMatchById, squad1, squad2 })
  const [currentSquad, setCurrentSquad] = useState(0)
  return (<>

            <Tabs active={currentSquad} onChange={(index) => setCurrentSquad(index)}
                tabs={[squad1?.teamName, squad2?.teamName]}
            >
        <div className={styles.squads}>
            {
                {
                  0: (<div>
                        <SquadItem squad={squad1} antiSquad={squad2} getMatchById={getMatchById} matchId={matchId} isSquadFinal={isSquadFinal}/>
                    </div>),
                  1: (<div>
                        <SquadItem squad={squad2} antiSquad={squad1} getMatchById={getMatchById} matchId={matchId} isSquadFinal={isSquadFinal}/>
                    </div>)

                }[currentSquad]
            }
        </div>
        </Tabs>
        <div className={styles.finalSquadsBtn}>
            {!isSquadFinal &&
                <Button onClick={() => markFinalSquads()} value="Finalize Squads" />
            }
        </div>

    </>)
}

export default ListSquad
