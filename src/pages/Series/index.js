import { useParams } from 'react-router-dom'
import useGetSeries from './hooks/useGetSeries'
import styles from './styles.module.css'
import Tabs from '../Components/Tabs'
import { useState } from 'react'
import MatchCard from '../Match/MatchCard'
import Table from '../Components/Table'
import { batsmanTableColumns, bowlerTableColumns } from './utlis/top-perfromers-columns'

const Series = () => {
  const { id: seriesId } = useParams()
  const [active, setActive] = useState(0)
  const { loading, data: seriesData } = useGetSeries({ seriesId })
  return (<>
        <div className={styles.series_heading}>
            <img src = {seriesData?.image_url} className={styles.series_image}/>
            <div>
                {seriesData?.name}
            </div>
        </div>
        <Tabs tabs={['Matches', 'Top Performers', 'News']} active={active} onChange={(index) => setActive((index))}/>
                    { active === 0 &&
                        <div className={styles.matchContainer}>
                        {
                        !loading && seriesData?.matches?.upcoming?.map((match, index) => (
                            <MatchCard match={match} key={index}/>
                        ))}
                        {
                        !loading && seriesData?.matches?.live?.map((match, index) => (
                            <MatchCard match={match} key={index}/>
                        ))}
                        {
                        !loading && seriesData?.matches?.past?.map((match, index) => (
                            <MatchCard match={match} key={index}/>
                        ))}

                        </div>
                    }
                    { active === 1 &&
                        <div className={styles.topPerformerContainer}>
                        <Table
                            columns={batsmanTableColumns}
                            data={seriesData?.topPerformers?.batsmans}
                        />
                        <Table
                            columns={bowlerTableColumns}
                            data={seriesData?.topPerformers?.bowlers}
                        />
                        </div>
                    }

    </>)
}
export default Series
