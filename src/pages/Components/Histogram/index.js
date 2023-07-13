import Poll from './Poll'
import styles from './styles.module.css'
const Histogram = ({ data, hoverItem = () => {}, _key, height = 200 }) => {
  const maxElment = data ? Math.max(...data?.map(o => o?.[_key])) : 1
  return <>
        {
        data &&
        <div className={styles.parent}>
            <div className={styles.histogram}>
            <div className={styles.grid}>
                {
                    [...Array(5)].map((item, index) => (
                        <div key={index} className={styles.grid_item}>
                            {parseInt((5 - index) * (maxElment / 5))}
                        </div>
                    ))
                }
            </div>
            <div className={styles.poll_container}>
            {
                data?.map((item, index) => (
                    <Poll key={index} item={item} _key={_key} height={height * (item?.[_key] / maxElment) + 'px' }>
                        {hoverItem(item)}
                    </Poll>
                ))
            }
            </div>
            </div>
        </div>
        }
    </>
}
export default Histogram
