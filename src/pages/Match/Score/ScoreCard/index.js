import style from './styles.module.css'
const ScoreCard = ({
  team, batsmanOnStrike, batsmanOnNonStrike,
  index, setBattingTeam, battingTeam
}) => {
  return (<>
            <div className={style.score_card} onClick={() => setBattingTeam(index)}>
                <div className={style.team_name}>
                {team?.name}
                </div>
                <div className={style.run_over}>
                    <div>
                        {team?.runs}/{team?.wickets}
                    </div>
                    <div>
                        Overs &nbsp;
                        {team?.overs}
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
                {index === battingTeam && (<>...</>)}

            </div>

    </>)
}

export default ScoreCard
