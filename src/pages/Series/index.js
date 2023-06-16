import { Link, useParams } from 'react-router-dom'
import useGetSeries from './hooks/useGetSeries'
import styles from './styles.module.css'

const Series = () => {
  const { id: seriesId } = useParams()

  const { loading, data } = useGetSeries({ seriesId })
  return (<>
                <div className={styles.container}>
                  <div className={styles.matchContainer}>
                  {
                  !loading && data?.matches?.map((match, index) => (
                      <Link to={'/match/' + match?.id} key={index} className={styles.match_card}>
                          <div className={styles.match_card_img}>
                              <img src={match?.team1_image_url} style={{ width: '100%', height: '100%', borderRadius: '50%' }}/>
                          </div>
                          {match.name}
                          <div className={styles.match_card_img}>
                              <img src={match?.team2_image_url} style={{ width: '100%', height: '100%', borderRadius: '50%' }}/>
                          </div>
                      </Link>
                  ))}
                  </div>
                </div>

    </>)
}
export default Series
