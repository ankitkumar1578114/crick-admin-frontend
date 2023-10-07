import globalStyle from '../../Venue/List/styles.module.css'
import useListSeries from '../hooks/useListSeries'
import { columns } from '../utlis/series-table'
import Table from '../../Components/Table'
import Button from '../../Components/Button'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import useCreateSeries from '../hooks/useCreateSeries'
import Modal from '../../Components/Modal'
import Layout from '../../Components/Layout'
import playerControls from '../utlis/series-control'
import layoutStyle from '../../Components/Layout/styles.module.css'
const List = () => {
  const [searchText, setSearchText] = useState('')
  const { data, loading, listSeries } = useListSeries({ searchText })
  const controls = playerControls()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [show, setShow] = useState(false)
  const { createSeries } = useCreateSeries({ setShow, listSeries })
  return (<>
        <Modal show={show} setShow={setShow} size="md">
            <Layout register={register} handleSubmit={handleSubmit} onSubmit={createSeries} controls={controls} errors={errors}/>
        </Modal>
            <div className={globalStyle.container}>
            <div className={globalStyle.flex_right}>
                <div className={globalStyle.heading}>
                    Series
                </div>
                <input type="text" placeholder="Search series..." className={layoutStyle.input} value={searchText} onChange={(e) => { setSearchText(e.target.value) }}/>
                <Button value="+" onClick={() => setShow(true)}/>
            </div>
                <div className={globalStyle.table_content}>
                    <Table columns={columns} data={data} loading={loading}/>
                </div>
            </div>
        </>
  )
}
export default List
