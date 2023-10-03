import { Link } from 'react-router-dom'
import Button from '../../Components/Button'
import styles from '../../Team/List/styles.module.css'

export const columns = [
  {
    key: 'img_url',
    header: '',
    accessor: (row) => (
      <>
        <img src = {row?.image_url} className={styles.img}/>
      </>
    )
  },
  {
    key: 'name',
    header: 'Name',
    accessor: 'name'
  },
  {
    key: 'view_btn',
    header: '  ',
    accessor: (row) => (
        <>
             <Link to={'/series/' + row?.id} ><Button value="View" type="secondary"/></Link>
        </>
    )

  }

]
