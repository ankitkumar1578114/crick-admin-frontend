import TextArea from '../../../Components/TextArea'
import useInsertBall from '../../hooks/useInsertBall'
import styles from './styles.module.css'

const ResultOptions = ({ score, data, loading, battingTeam, getScoreData, getMatchById }) => {
  const { insertBall, loading: loadingIns } = useInsertBall({
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
    autoLoad: false
  })

  const options = [
    {
      label: '0',
      value: 0,
      color: 'gray'
    },
    {
      label: '1',
      value: 1,
      color: 'gray'
    },
    {
      label: '2',
      value: 2,
      color: 'gray'
    },
    {
      label: '3',
      value: 3,
      color: 'gray'
    },
    {
      label: '4',
      value: 4,
      color: 'orange'
    },
    {
      label: '6',
      value: 6,
      color: 'green'
    },
    {
      label: 'W',
      value: 25,
      color: 'red'
    },
    {
      label: 'Wd',
      value: 11,
      color: 'gray'
    },
    {
      label: 'Nb',
      value: 12,
      color: '#0000aa'
    }

  ]

  return <>
          <div className={styles.parent}>
          <div className={styles.result_options}>
                {
                  !loadingIns &&
                    options?.map((option) => (
                        <button key={option?.value} style={{ backgroundColor: option?.color }} onClick={() => insertBall(option?.value)}>
                            {option?.label}
                        </button>
                    ))
                }
            </div>
            <TextArea height={100}/>
          </div>
        </>
}
export default ResultOptions
