import Poll from './Poll'
import styles from './styles.module.css'
const Histogram = ({ data, hoverItem = () => {}, _key, height = 200, xName, title }) => {
  const maxElment = data ? Math.max(...data?.map(o => o?.[_key])) : 1
  return <>
        {
        data && data?.length >= 1 &&
        <>
        <div className={styles.parent}>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.flex}>
                <div className={styles.yName}>
                    Runs
                </div>
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
        <div className={styles.xName}>
            {xName}
        </div>

        </div>
        </>
        }
    </>
}
export default Histogram
