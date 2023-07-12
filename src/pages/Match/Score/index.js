import { useForm } from 'react-hook-form'
import ScoreCard from './ScoreCard'
import style from './styles.module.css'
import control from './addplayer'
import Layout from '../../Components/Layout'
import useUpdateStrike from '../hooks/useUpdateStrike'
import { useEffect, useState } from 'react'
import Pill from '../../Components/Pill'
import Button from '../../Components/Button'
import useStartMatch from '../hooks/useStartMatch'
const Score = ({ score, squad1, squad2, battingTeam, getMatchById, matchId, matchData, loadingScore }) => {
  const controls = control({
    playerOptions1: battingTeam === 1 ? squad1?.players : squad2?.players,
    playerOptions2: battingTeam === 1 ? squad2?.players : squad1?.players,
    squad: battingTeam === 1 ? squad1 : squad2
  })

  const [firstBatting, setFirstBatting] = useState(0)
  const { startMatch } = useStartMatch({ matchId, getMatchById, firstBatting })

  const { register, handleSubmit, setValue } = useForm()
  const { updateStrike } = useUpdateStrike({ battingTeam, squadId: (battingTeam === 1) ? (squad1?.id) : (squad2?.id), getMatchById, matchId })
  useEffect(() => {
    setValue('batsmanOnStrike', battingTeam === 1 ? squad1?.batsman_on_strike : squad2?.batsman_on_strike)
    setValue('batsmanOnNonStrike', battingTeam === 1 ? squad1?.batsman_on_non_strike : squad2?.batsman_on_non_strike)
    setValue('bowler', battingTeam === 1 ? squad1?.bowler : squad2?.bowler)
  }, [battingTeam, squad1, squad2])

  return (<>

        {
          battingTeam === 0 && (<div className={style.flex}>
              <Pill content="Not started yet" color="red" />
              <div>
                <Pill content ="First Batting" color="transparent" textColor="white"/>
                <select className={style.select} onChange={(e) => setFirstBatting(e.target.value)}>
                  <option value={-1}>{matchData?.team1?.name}</option>
                  <option value={1}>{matchData?.team2?.name}</option>
                </select>
                <Button value="Start Match" onClick={startMatch}/>
              </div>
            </div>)
        }
        {
          [1, 2].includes(battingTeam) &&
              <Pill content="Running" color="green"/>
        }
       {
          battingTeam === 3 && <Pill content="Finished" color="red"/>
        }

        <div className={style.scoreCardBox}>
             <ScoreCard
                team={score?.team1}
                batsmanOnStrike={squad1?.batsman_on_strike}
                batsmanOnNonStrike={squad1?.batsman_on_non_strike}
                index={1}
                battingTeam={battingTeam}
                loadingScore={loadingScore}
             />
            <ScoreCard
                team={score?.team2}
                batsmanOnStrike={squad2?.batsman_on_strike}
                batsmanOnNonStrike={squad2?.batsman_on_non_strike}
                index={2}
                battingTeam={battingTeam}
                loadingScore={loadingScore}
            />
        </div>
        <Layout register={register} handleSubmit={handleSubmit} onSubmit={updateStrike} controls={controls}/>

    </>)
}

export default Score
