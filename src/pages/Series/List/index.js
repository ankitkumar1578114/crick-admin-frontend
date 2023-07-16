import globalStyle from '../../Venue/List/styles.module.css'
import useListSeries from '../hooks/useListSeries'
import { columns } from '../utlis/series-table'
import Table from '../../Components/Table'
import Button from '../../Components/Button'

const List = () => {
  const { data, loading } = useListSeries()

  return (
        <>
            <div className={globalStyle.container}>
            <div className={globalStyle.flex_right}>
                <div>
                    Your Series
                </div>
                <Button value="CREATE SERIES"/>
            </div>
                <Table columns={columns} data={data} loading={loading}/>
            </div>
        </>
  )
}
export default List
