import { Link } from 'react-router-dom'
import styles from '../../Team/List/styles.module.css'
export const columns = [

  {
    key: 'name',
    header: 'Name',
    accessor: (row) => (
      <>
           <Link to={'/venue/' + row?.id} className={styles.view_btn} >{row?.name}</Link>
      </>
    )
  },
  {
    key: 'address',
    header: 'Address',
    accessor: 'address'
  },
  {
    key: 'country',
    header: 'Country',
    accessor: 'country'
  }

]
