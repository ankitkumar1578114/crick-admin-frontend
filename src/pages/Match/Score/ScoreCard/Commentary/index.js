import Item from './Item'

import styles from './styles.module.css'
const Commentary = ({ comments }) => {
  return <>
            <div className={styles.flex}>
                {comments.toReversed().map((item, index) => (
                    <Item key={index} item={item}/>
                ))}
            </div>
        </>
}
export default Commentary
