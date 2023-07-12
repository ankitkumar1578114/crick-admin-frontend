import Pill from '../../../Components/Pill'
import styles from './styles.module.css'
import { ballLabelMaping } from './ball-label-mapping'
import Skelton from '../../../Components/Skelton'
const ScoreCard = ({
  team, batsmanOnStrike, batsmanOnNonStrike,
  index, battingTeam, loadingScore
}) => {
  console.log(team)
  return (<>
            <div className={styles.score_card} >
                {
                    loadingScore &&
                    <Skelton width="100%" height="300px"/>
                }
                {
                    !loadingScore && (
                        <>
                <div className={styles.run_over}>
                    <div className={styles.team_name}>
                        <div className={styles.team_logo}>
                            <img src={team?.image_url} style={{ width: '100%', height: '100%', borderRadius: '50%' }}/>
                        </div>
                        <div>
                            {team?.name} {((battingTeam === 1 && index === 1) || (battingTeam === 2 && index === 2)) && <>*</>}
                        </div>
                    </div>
                    <div className={styles.run}>
                        {team?.runs}/{team?.wickets}
                    </div>

                </div>

                <div className={styles.run_over}>
                    <div></div>
                    <div className={styles.balls}>
                        {team?.thisOverBalls?.map((ball, index) => (
                            <div key={index} style={{ ...ballLabelMaping[ball]?.style }}>{ballLabelMaping[ball]?.label}</div>
                        ))}
                    </div>
                    <div className={styles.over}>
                        {team?.overs}
                    </div>
                </div>
                <div className={styles.player_list}>
                <div className={styles.player_list_row}>
                            <div>Player</div>
                            <div>Runs</div>
                            <div>Balls</div>
                            <div>4s</div>
                            <div>6s</div>
                </div>
                    {
                    (Object.keys(team?.batting_players || {}) || []).map((player) => (
                        <>
                        <div className={
                            parseInt(batsmanOnStrike) === parseInt(player)
                              ? styles.player_list_row_striker
                              : styles.player_list_row}>
                            <div>
                                { team?.batting_players[player].name}
                                {parseInt(player) === parseInt(batsmanOnStrike) && (<>*</>)}
                            </div>
                            <div>
                                { team?.batting_players[player].runs}
                            </div>
                            <div>
                                { team?.batting_players[player].balls}
                            </div>
                            <div>
                                { team?.batting_players[player].fours}
                            </div>
                            <div>
                                { team?.batting_players[player].sixes}
                            </div>
                        </div>
                        </>
                    ))
                    }
                </div>

                <div className={styles.player_list}>
                <div className={styles.player_list_row}>
                            <div>Bowler</div>
                            <div>Over</div>
                            <div>Wickets</div>
                            <div>Runs</div>

                </div>
                    {
                    (Object.keys(team?.bowling_players || {}) || []).map((player) => (
                        <>
                        <div className={
                            parseInt(batsmanOnStrike) === parseInt(player)
                              ? styles.player_list_row_striker
                              : styles.player_list_row}>
                            <div>
                                { team?.bowling_players[player].name}
                                {parseInt(player) === parseInt(batsmanOnStrike) && (<>*</>)}
                            </div>
                            <div>
                                { parseInt(team?.bowling_players[player].balls / 6)}.
                                { parseInt(team?.bowling_players[player].balls % 6)}
                            </div>
                            <div>
                                { team?.bowling_players[player].wickets}
                            </div>
                            <div>
                                { team?.bowling_players[player].runs}
                            </div>

                        </div>
                        </>
                    ))
                    }
                </div>
                 <Pill content={`Extra : ${team?.extra}`} color="gray" textColor="black"/>
                </>)}
            </div>
    </>)
}

export default ScoreCard
