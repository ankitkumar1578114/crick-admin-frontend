import { Link } from 'react-router-dom'
import styles from './styles.module.css'
const MatchCard = ({ loading = true, match = {} }) => {
  console.log(match)
  return <>
                        <Link to={'/match/' + match?.id} className={styles.match_card} >
                           <div className={styles.header}>
                                <div className={styles.series_name}>
                                    {match?.series_name}
                                </div>
                                <div className={styles.match_status}>
                                {
                                        [1, 2, -1, -2].includes(match?.current_inning)
                                          ? 'Live'
                                          : null
                                }
                                    </div>
                            </div>

                            <div>
                                <div className={styles.match_card_team_name}>
                                    <div>
                                       <img src={match?.team1?.image_url} style={{ width: '20px', height: '20px', borderRadius: '50%' }}/>
                                    </div>
                                    <div>
                                        {match?.team1?.name}
                                    </div>
                                </div>
                                <div className={styles.match_card_team_score}>
                                {match?.current_inning
                                  ? `${match?.team1?.runs}-${match?.team1?.wickets} (${match?.team1?.overs})`
                                  : 'Yet to play'
                                }
                                </div>
                            </div>
                            <div>
                            <div className={styles.match_card_team_name}>
                                    <div>
                                       <img src={match?.team2?.image_url} style={{ width: '20px', height: '20px', borderRadius: '50%' }}/>
                                    </div>
                                    <div>
                                        {match?.team2?.name}
                                    </div>
                                </div>
                                <div className={styles.match_card_team_score}>   {match?.current_inning
                                  ? `${match?.team2?.runs}-${match?.team2?.wickets} (${match?.team2?.overs})`
                                  : 'Yet to play'
                                }</div>
                            </div>
                        </Link>
</>
}
export default MatchCard
