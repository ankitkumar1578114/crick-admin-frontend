import Pill from '../../../Components/Pill'
import style from './styles.module.css'
import { ballLabelMaping } from './ball-label-mapping'
const ScoreCard = ({
  team, batsmanOnStrike, batsmanOnNonStrike,
  index, battingTeam
}) => {
  console.log(team)
  return (<>
            <div className={style.score_card} >
                <div className={style.run_over}>
                    <div className={style.team_name}>
                        {team?.name} {((battingTeam === -1 && index === 1) || (battingTeam === 1 && index === 2)) && <>*</>}
                    </div>
                    <div>
                            Overs &nbsp;
                            {team?.overs}
                    </div>
                </div>

                <div className={style.run_over}>
                    <div>
                        {team?.runs}/{team?.wickets}
                    </div>
                    <div className={style.balls}>
                        {team?.thisOverBalls?.map((ball, index) => (
                            <div key={index} style={{ ...ballLabelMaping[ball]?.style }}>{ballLabelMaping[ball]?.label}</div>
                        ))}
                    </div>
                </div>
                <div className={style.player_list}>
                <div className={style.player_list_row}>
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
                              ? style.player_list_row_striker
                              : style.player_list_row}>
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

                <div className={style.player_list}>
                <div className={style.player_list_row}>
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
                              ? style.player_list_row_striker
                              : style.player_list_row}>
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

            </div>

    </>)
}

export default ScoreCard
