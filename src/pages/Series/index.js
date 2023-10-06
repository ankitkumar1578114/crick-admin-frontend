import { useParams } from 'react-router-dom'
import useGetSeries from './hooks/useGetSeries'
import styles from './styles.module.css'
import Tabs from '../Components/Tabs'
import { useState } from 'react'
import MatchCard from '../Match/MatchCard'

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
                            <MatchCard match={match} key={index}/>
                        ))}
                        </div>
                    }

    </>)
}
export default Series
