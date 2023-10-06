import { Link } from 'react-router-dom'
import styles from '../../Team/List/styles.module.css'

export const columns = [
  {
    key: 'img_url',
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
    accessor: (row) => (<>
                 <Link to={'/series/' + row?.id} className={styles.view_btn} >{row?.name}</Link>

    </>)
  }
]
