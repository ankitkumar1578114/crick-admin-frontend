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
import ResultOptions from './ResultOptions'
import Tabs from '../../Components/Tabs'
const Score = ({ score, squad1, squad2, battingTeam, getMatchById, matchId, matchData, loadingScore, loading, getScoreData }) => {
  const controls = control({
    playerOptions1: battingTeam === 1 ? squad1?.players : squad2?.players,
    playerOptions2: battingTeam === 1 ? squad2?.players : squad1?.players,
    squad: battingTeam === 1 ? squad1 : squad2
  })

  const [firstBatting, setFirstBatting] = useState(-1)
  const { startMatch } = useStartMatch({ matchId, getMatchById, firstBatting })

  const { register, handleSubmit, setValue } = useForm()
  const { updateStrike } = useUpdateStrike({ battingTeam, squadId: (battingTeam === 1) ? (squad1?.id) : (squad2?.id), getMatchById, matchId })
  useEffect(() => {
    setValue('batsmanOnStrike', battingTeam === 1 ? squad1?.batsman_on_strike : squad2?.batsman_on_strike)
    setValue('batsmanOnNonStrike', battingTeam === 1 ? squad1?.batsman_on_non_strike : squad2?.batsman_on_non_strike)
    setValue('bowler', battingTeam === 1 ? squad1?.bowler : squad2?.bowler)
  }, [battingTeam, squad1, squad2])

  const [active, setActive] = useState(0)

  return (<>
        {
          battingTeam === 0 && (<div className={style.flex}>
              <Pill content="Not started yet" type="secondary" />
              <div>
                <Pill content ="First Batting" type="transparent" textColor="white"/>
                <select className={style.select} onChange={(e) => setFirstBatting(e.target.value)} value={firstBatting}>
                  <option value={-1}>{matchData?.team1?.name}</option>
                  <option value={1}>{matchData?.team2?.name}</option>
                </select>
                <Button value="Start Match" onClick={startMatch}/>
              </div>
            </div>)
        }
        {
          [1, 2].includes(battingTeam) &&
              <Pill content="Running" type="primary"/>
        }
       {
          battingTeam === 3 && <Pill content="Finished" type="secondary"/>
        }
        <Tabs tabs={[score?.team1?.name, score?.team2?.name]} active={active} onChange={() => setActive((active + 1) % 2)}>
        </Tabs>

        <div className={style.scoreCardBox}>

             <ScoreCard
                team={active === 0 ? score?.team1 : score?.team2}
                batsmanOnStrike={active === 0 ? squad1?.batsman_on_strike : squad2?.batsman_on_strike}
                batsmanOnNonStrike={active === 0 ? squad1?.batsman_on_non_strike : squad1?.batsman_on_non_strike}
                index={active}
                battingTeam={battingTeam}
                loadingScore={loadingScore}
             />
        </div>
        {
        !loading && battingTeam === active + 1 &&
        <div className={style.entry_box}>
            <Layout register={register} handleSubmit={handleSubmit} onSubmit={updateStrike} controls={controls}/>
            <ResultOptions score={score} data={matchData} loading={loading} battingTeam={battingTeam} getScoreData={getScoreData} getMatchById={getMatchById} />
        </div>

        }

    </>)
}

export default Score
