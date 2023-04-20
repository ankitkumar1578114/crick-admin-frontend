import React from 'react'
import { useForm } from 'react-hook-form'
import Layout from '../Components/Layout'
import controls from './player-controls'
import useCreatePlayer from './hooks/useCreatePlayer'

const PlayerPage = () => {
  const { register, handleSubmit } = useForm()
  const { createPlayer } = useCreatePlayer()
  return (
        <>
        <h3>Player</h3>
        <Layout register={register} handleSubmit={handleSubmit} onSubmit={createPlayer} controls={controls}/>
        </>
  )
}

export default PlayerPage
