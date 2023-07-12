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
    key: 'address',
    header: 'Address',
    accessor: 'address'
  },
  {
    key: 'country',
    header: 'Country',
    accessor: 'country'
  },
  {
    key: 'view_btn',
    header: '  ',
    accessor: (row) => (
        <>
             <Link to={'/venue/' + row?.id} ><Button value="View" type="secondary"/></Link>
        </>
    )

  }

]
