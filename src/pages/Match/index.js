import React from 'react'
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
  const { id: matchId } = useParams()
  const { loading, data, getMatchById } = useGetMatchById(matchId)
  const { loading: loadingScore, score, getScoreData } = useGetScore(matchId)
  const { insertBall } = useInsertBall({ matchLoading: loading, matchData: data, ballOftheMatch: score?.length, getScoreData })
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
        <ListSquad squad1={data?.squad1} squad2={data?.squad2} matchId={matchId} getMatchById={getMatchById}/>
        <Score score={score} loadingScore={loadingScore}/>
        <Layout register={register} handleSubmit={handleSubmit} onSubmit={insertBall} controls={controls}/>

        </>
  )
}

export default MatchPage
