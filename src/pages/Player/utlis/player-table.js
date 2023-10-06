import { Link } from 'react-router-dom'
import styles from '../../Team/List/styles.module.css'
export const columns = [
  {
    key: 'name',
    header: 'Name',
    accessor: (row) => (
      <>
           <Link to={'/team/' + row?.id} className={styles.view_btn}>{row?.name}</Link>
      </>
    )
  }

]
