import styles from './styles.module.css'
import useListSeries from '../hooks/useListSeries'
import { columns } from '../utlis/series-table'
import Table from '../../Components/Table'
import Button from '../../Components/Button'

const List = () => {
  const { data } = useListSeries()

  return (
        <>
            <div className={styles.container}>
            <div className={styles.flex_right}>
                <div>
                    Your Series
                </div>
                <Button value="+ Create Match"/>
            </div>
                <Table columns={columns} data={data}/>
            </div>
        </>
  )
}
export default List
