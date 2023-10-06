import { Link } from 'react-router-dom'
import styles from '../List/styles.module.css'

export const columns = [
  {
    key: 'img',
    header: 'Image',
    accessor: (row) => (
      <>
        <img src = {row?.image_url} className={styles.img}/>
      </>
    )
  },
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
