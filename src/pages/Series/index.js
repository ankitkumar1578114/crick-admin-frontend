import { Link, useParams } from 'react-router-dom'
import useGetSeries from './hooks/useGetSeries'
import styles from './styles.module.css'
import Tabs from '../Components/Tabs'
import { useState } from 'react'

const Series = () => {
  const { id: seriesId } = useParams()
  const [active, setActive] = useState(0)
  const { loading, data } = useGetSeries({ seriesId })
  return (<>
        <Tabs tabs={['Matches', 'Stats', 'Top Performers']} active={active} onChange={(index) => setActive((index))}/>
                    { active === 0 &&
                        <div className={styles.matchContainer}>
                        {
                        !loading && data?.matches?.map((match, index) => (
                            <Link to={'/match/' + match?.id} key={index} className={styles.match_card}>
                                <div className={styles.match_card_img}>
                                    <img src={match?.team1_image_url} style={{ width: '100%', height: '100%', borderRadius: '50%' }}/>
                                    {match?.team1_name}
                                </div>

                                <div className={styles.match_card_img}>
                                    <img src={match?.team2_image_url} style={{ width: '100%', height: '100%', borderRadius: '50%' }}/>
                                    {match?.team2_name}
                                </div>
                            </Link>
                        ))}
                        </div>
                    }

    </>)
}
export default Series
