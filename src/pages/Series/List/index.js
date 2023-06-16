import styles from './styles.module.css'
import useListSeries from '../hooks/useListSeries'
import { Link } from 'react-router-dom'

const List = () => {
  const { loading, data } = useListSeries()

  return (
        <>
            <div className={styles.container}>
                <div className={styles.seriesContainer}>
                {
                !loading && data?.map((series, index) => (
                    <Link to={'/series/' + series?.id} key={index} className={styles.series_card}>
                        <div className={styles.series_card_img}>
                            <img src={series?.image_url} style={{ width: '100%', height: '100%', borderRadius: '50%' }}/>
                        </div>
                        {series.name}
                    </Link>
                ))}
                </div>
            </div>
        </>
  )
}
export default List
