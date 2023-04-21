import { useForm } from 'react-hook-form'
import ScoreCard from './ScoreCard'
import style from './styles.module.css'
import control from './addplayer'
import Layout from '../../Components/Layout'
import useUpdateStrike from '../hooks/useUpdateStrike'
import { useEffect } from 'react'
const Score = ({ score, squad1, squad2, setBattingTeam, battingTeam, getMatchById, matchId }) => {
  const controls = control({
    playerOptions1: battingTeam === 1 ? squad1?.players : squad2?.players,
    playerOptions2: battingTeam === 1 ? squad2?.players : squad1?.players,
    squad: battingTeam === 1 ? squad1 : squad2
  })

  const { register, handleSubmit, setValue } = useForm()
  const { updateStrike } = useUpdateStrike({ squadId: (battingTeam === 1) ? (squad1?.id) : (squad2?.id), getMatchById, matchId })
  useEffect(() => {
    setValue('batsmanOnStrike', battingTeam === 1 ? squad1?.batsman_on_strike : squad2?.batsman_on_strike)
    setValue('batsmanOnNonStrike', battingTeam === 1 ? squad1?.batsman_on_non_strike : squad2?.batsman_on_non_strike)
    setValue('bowler', battingTeam === 1 ? squad1?.bowler : squad2?.bowler)
  }, [battingTeam, squad1, squad2])

  return (<>
        <div className={style.scoreCardBox}>
            <ScoreCard
                team={score?.team1}
                batsmanOnStrike={squad1?.batsman_on_strike}
                batsmanOnNonStrike={squad1?.batsman_on_non_strike}
                index={1}
                battingTeam={battingTeam}
                setBattingTeam={setBattingTeam} />
            <ScoreCard
                team={score?.team2}
                batsmanOnStrike={squad2?.batsman_on_strike}
                batsmanOnNonStrike={squad2?.batsman_on_non_strike}
                index={2}
                battingTeam={battingTeam}
                setBattingTeam={setBattingTeam}/>
        </div>
        <Layout register={register} handleSubmit={handleSubmit} onSubmit={updateStrike} controls={controls}/>

        <div className={style.balls}>

        {
            // !loadingScore && (score?.map((ball, index) => (<div key={index}>{ball?.result}</div>)))
        }
        </div>

    </>)
}

export default Score
