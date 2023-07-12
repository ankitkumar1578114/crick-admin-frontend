import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import useGetMatchById from './hooks/useGetMatchById'
import useGetScore from './hooks/useGetScore'
import Score from './Score'

import { useParams } from 'react-router-dom'
import ListSquad from './ListSquad'
import ResultOptions from './Score/ResultOptions'

const MatchPage = () => {
  const { id: matchId } = useParams()
  const { loading, data, getMatchById } = useGetMatchById(matchId)
  const { loading: loadingScore, score, getScoreData } = useGetScore({ matchId, team1: data?.team1?.id, team2: data?.team2?.id })
  const [battingTeam, setBattingTeam] = useState(data?.current_inning)

  useEffect(() => {
    console.log(data)
    if (data?.current_inning === 0) { setBattingTeam(0) }
    if (data?.current_inning === 2) { setBattingTeam(3) }
    if (data?.current_inning === -1) { setBattingTeam(1) }
    if (data?.current_inning === 1) { setBattingTeam(2) }
  }, [data])

  return (
        <>
        <div className={styles.container}>

        {
            data?.is_squads_final === 0 && (
              <>
              <div className={styles.welcome_title}>
              <span className={styles.heading_colour}>Step1</span>
            </div>

          <ListSquad squad1={{ ...data?.squad1, teamName: data?.team1?.name }} squad2={{ ...data?.squad2, teamName: data?.team2?.name }}
          matchId={matchId} getMatchById={getMatchById}
          isSquadFinal={data?.is_squads_final}/>
          </>
            )
        }
        {
          data?.is_squads_final === 1 && (
            <div className={styles.dashboard}>
              <Score score={score}
                  loadingScore={loadingScore}
                  squad1={data?.squad1}
                  squad2={data?.squad2}
                  battingTeam={battingTeam}
                  getMatchById={getMatchById}
                  matchId={matchId}
                  matchData={data}
              />
              <ResultOptions score={score} data={data} loading={loading} battingTeam={battingTeam} getScoreData={getScoreData} getMatchById={getMatchById} />
              </div>
          )
        }
        </div>
        </>
  )
}

export default MatchPage
