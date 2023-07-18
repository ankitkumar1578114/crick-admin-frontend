import Pill from '../../../Components/Pill'
import styles from './styles.module.css'
import Skelton from '../../../Components/Skelton'
import Commentary from './Commentary'
const ScoreCard = ({
  team, batsmanOnStrike, batsmanOnNonStrike,
  index, battingTeam, loadingScore
}) => {
  return (<>
            <div className={styles.score_card} >
                {
                    loadingScore &&
                    <Skelton width="100%" height="300px"/>
                }
                {
                    !loadingScore && (
                        <>
                <div className={styles.name_run_over}>
                    <div className={styles.team_name}>
                        <div className={styles.team_logo}>
                            <img src={team?.image_url} style={{ width: '100%', height: '100%', borderRadius: '50%' }}/>
                        </div>
                        <div>
                            {team?.name} {((battingTeam === 1 && index === 1) || (battingTeam === 2 && index === 2)) && <>*</>}
                        </div>
                    </div>
                    <div className={styles.run_over}>
                        <div className={styles.run}>
                            {team?.runs}/{team?.wickets}

                        </div>
                        <div className={styles.over}>
                            ({team?.overs})
                        </div>
                    </div>

                </div>

                <div className={styles.flex}>
                    <div>
                    <div className={styles.player_list}>
                <div className={styles.player_list_row}>
                            <div><b>Player</b></div>
                            <div><b>Runs</b></div>
                            <div><b>Balls</b></div>
                            <div><b>4s</b></div>
                            <div><b>6s</b></div>
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
                            <div><b>Bowler</b></div>
                            <div><b>Over</b></div>
                            <div><b>Wickets</b></div>
                            <div><b>Runs</b></div>
                            <div><b>Ecc</b></div>
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
                            <div>
                                { parseInt(team?.bowling_players[player].runs / (team?.bowling_players[player].balls / 6))}
                            </div>
                        </div>
                        </>
                    ))
                    }
                </div>

                <Pill content={`Extras : ${team?.extra}`} type="transparent"/>

                </div>
                <div className={styles.commentary}>
                    <Commentary comments={team?.thisOverBalls}/>
                </div>
                </div>

                </>)}
            </div>
    </>)
}

export default ScoreCard
