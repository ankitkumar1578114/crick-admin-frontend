import { ballLabelMaping } from '../../ball-label-mapping'
import styles from './styles.module.css'
const Item = ({ item }) => {
  return <>
        <div className={styles.item}>
            <div className={styles.result} style={{ ...ballLabelMaping[item?.result]?.style }}>
                {ballLabelMaping[item?.result]?.label}
            </div>
            <div className={styles.comment}>
                {item?.commentary || 'No Commentary Found.'}
            </div>
        </div>
    </>
}
export default Item
