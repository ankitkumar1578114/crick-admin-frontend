import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import useGetMatchById from './hooks/useGetMatchById'
import Score from './Score'

import { useParams } from 'react-router-dom'
import ListSquad from './ListSquad'

const MatchPage = () => {
  const { id: matchId } = useParams()
  const { loading, data, getMatchById } = useGetMatchById(matchId)
  const [battingTeam, setBattingTeam] = useState(data?.current_inning)

  useEffect(() => {
    setBattingTeam({
      0: 0,
      '-1': 1,
      1: 2,
      '-2': 1,
      2: 2,
      3: 3

    }[data?.current_inning])
  }, [data])

  const [active, setActive] = useState(data?.current_inning <= 0 ? 0 : 1)

  return (
        <>
        <div className={styles.container}>

        {
            data?.is_squads_final === 0 && (
              <>

          <ListSquad squad1={{ ...data?.squad1, teamName: data?.team1?.name }} squad2={{ ...data?.squad2, teamName: data?.team2?.name }}
          matchId={matchId} getMatchById={getMatchById}
          isSquadFinal={data?.is_squads_final}/>
          </>
            )
        }
        {
          data?.is_squads_final !== 0 && <>
              <Score
                  squad1={data?.squad1}
                  squad2={data?.squad2}
                  battingTeam={battingTeam}
                  getMatchById={getMatchById}
                  matchId={matchId}
                  matchData={data}
                  loading={loading}
                  active={active}
                  setActive={setActive}
              />

          </>
        }
      </div>
        </>
  )
}

export default MatchPage
