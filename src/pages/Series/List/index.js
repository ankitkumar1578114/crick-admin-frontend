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

const List = () => {
  const { data, loading, listSeries } = useListSeries()
  const controls = playerControls()
  const { register, handleSubmit } = useForm()
  const [show, setShow] = useState(false)
  const { createSeries } = useCreateSeries({ setShow, listSeries })
  return (<>
        <Modal show={show} setShow={setShow} size="md">
            <Layout register={register} handleSubmit={handleSubmit} onSubmit={createSeries} controls={controls}/>
        </Modal>
            <div className={globalStyle.container}>
            <div className={globalStyle.flex_right}>
                <div>
                    Your Series
                </div>
                <Button value="CREATE SERIES" onClick={() => setShow(true)}/>
            </div>
                <Table columns={columns} data={data} loading={loading}/>
            </div>
        </>
  )
}
export default List
