import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from './styles.module.css'
import Layout from '../Components/Layout'
import useGetMatchById from './hooks/useGetMatchById'
import useGetScore from './hooks/useGetScore'
import useInsertBall from './hooks/useInsertBall'
import Score from './Score'
import control from './insert-ball'

import { useParams } from 'react-router-dom'
import ListSquad from './ListSquad'

const MatchPage = () => {
  const { id: matchId } = useParams()
  const { loading, data, getMatchById } = useGetMatchById(matchId)
  const { loading: loadingScore, score, getScoreData } = useGetScore({ matchId, team1: data?.team1?.id, team2: data?.team2?.id })
  const [battingTeam, setBattingTeam] = useState(data?.current_inning)

  const { register, handleSubmit, reset } = useForm()
  const { insertBall } = useInsertBall({
    matchLoading: loading,
    matchData: data,
    ballOftheMatch: battingTeam === 1 ? score?.team1?.totalBalls : score?.team2?.totalBalls,
    batPlayerId: battingTeam === 1 ? data?.squad1?.batsman_on_strike : data?.squad2?.batsman_on_strike,
    batsmanOnNonStrike: battingTeam === 1 ? data?.squad1?.batsman_on_non_strike : data?.squad2?.batsman_on_non_strike,
    ballPlayerId: battingTeam === 1 ? data?.squad1?.bowler : data?.squad2?.bowler,
    squadId: battingTeam === 1 ? data?.squad1?.id : data?.squad2?.id,
    legalBalls: battingTeam === 1 ? score?.team1?.legalBalls : score?.team2?.legalBalls,
    battingTeam,
    getScoreData,
    getMatchById,
    reset
  })

  useEffect(() => {
    setBattingTeam(data?.current_inning)
  }, [data])

  const controls = control()

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
              {/* <div>
              <ListSquad squad1={{ ...data?.squad1, teamName: data?.team1?.name }} squad2={{ ...data?.squad2, teamName: data?.team2?.name }}
              matchId={matchId} getMatchById={getMatchById}
              isSquadFinal={data?.is_squads_final}/>

              </div> */}
              <div>
              <Score score={score}
                  loadingScore={loadingScore}
                  squad1={data?.squad1}
                  squad2={data?.squad2}
                  battingTeam={battingTeam}
                  getMatchById={getMatchById}
                  matchId={matchId}
                  matchData={data}
                  />
                  <div>
                    <Layout register={register} handleSubmit={handleSubmit} onSubmit={insertBall} controls={controls}/>
                  </div>
                </div>
            </div>
          )
        }
        </div>
        </>
  )
}

export default MatchPage
