import { Link } from 'react-router-dom'
import Button from '../../Components/Button'

export const columns = [
  {
    key: 'id',
    header: 'Id',
    accessor: 'id'
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
             <Link to={'/player/' + row?.id} ><Button value="View" type="secondary"/></Link>
        </>
    )

  }

]
