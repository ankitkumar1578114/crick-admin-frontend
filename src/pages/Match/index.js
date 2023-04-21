import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Layout from '../Components/Layout'
import useGetMatchById from './hooks/useGetMatchById'
import useGetScore from './hooks/useGetScore'
import useInsertBall from './hooks/useInsertBall'
import Score from './Score'
import control from './insert-ball'

import { useParams } from 'react-router-dom'
import ListSquad from './ListSquad'

const MatchPage = () => {
  const [battingTeam, setBattingTeam] = useState(1)

  const { id: matchId } = useParams()
  const { loading, data, getMatchById } = useGetMatchById(matchId)
  const { loading: loadingScore, score, getScoreData } = useGetScore({ matchId, team1: data?.team1?.id, team2: data?.team2?.id })

  const { insertBall } = useInsertBall({
    matchLoading: loading,
    matchData: data,
    ballOftheMatch: score?.score?.length,
    getScoreData,
    getMatchById,
    batPlayerId: battingTeam === 1 ? data?.squad1?.batsman_on_strike : data?.squad2?.batsman_on_strike,
    batsmanOnNonStrike: battingTeam === 1 ? data?.squad1?.batsman_on_non_strike : data?.squad2?.batsman_on_non_strike,
    ballPlayerId: battingTeam === 1 ? data?.squad1?.bowler : data?.squad2?.bowler,
    squadId: battingTeam === 1 ? data?.squad1?.id : data?.squad2?.id,
    legalBalls: battingTeam === 1 ? score?.team1?.legalBalls : score?.team2?.legalBalls,
    battingTeam
  })
  const controls = control()
  const { register, handleSubmit } = useForm()
  return (
        <>
        {score?.ball_of_the_match}
        <h3>Match</h3>
        <h4>
         {data?.name}
        </h4>
        <h2>Squads</h2>
        <Score score={score}
            loadingScore={loadingScore}
            squad1={data?.squad1}
            squad2={data?.squad2}
            setBattingTeam={setBattingTeam}
            battingTeam={battingTeam}
            getMatchById={getMatchById}
            matchId={matchId}/>
        <Layout register={register} handleSubmit={handleSubmit} onSubmit={insertBall} controls={controls}/>

        <ListSquad squad1={data?.squad1} squad2={data?.squad2}
        matchId={matchId} getMatchById={getMatchById}
        isSquadFinal={data?.is_squads_final}/>

        </>
  )
}

export default MatchPage
