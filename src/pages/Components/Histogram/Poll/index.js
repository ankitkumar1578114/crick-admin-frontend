import styles from '../styles.module.css'
const Poll = ({ item, children, _key, height }) => {
  return <>
            <div>
            <div className={styles.poll} style={{ height }}>
                <div className={styles?.on_hover_div}>
                    {
                        children
                    }
                </div>
                {item?.[_key]}
            </div>
            <div className={styles.label}>
                {item?.key}

            </div>
            </div>
        </>
}
export default Poll
