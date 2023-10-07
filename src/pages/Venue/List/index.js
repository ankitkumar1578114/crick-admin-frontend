import { useForm } from 'react-hook-form'
import Layout from '../../Components/Layout'
import control from '../venue-controls'
import useCreateVenue from '../hooks/useCreateVenue'
import useGetVenues from '../hooks/useGetVenues'
import style from './styles.module.css'
import Modal from '../../Components/Modal'
import { useState } from 'react'
import Button from '../../Components/Button'
import Table from '../../Components/Table'
import { columns } from '../utlis/venue-table'
import layoutStyle from '../../Components/Layout/styles.module.css'

const List = () => {
  const [searchText, setSearchText] = useState('')
  const { data: venues, getVenues, loading } = useGetVenues({ searchText })
  const { register, handleSubmit, formState: { errors } } = useForm()
  const controls = control()
  const [show, setShow] = useState(false)
  const { addTeam } = useCreateVenue({ getVenues, setShow })
  return (<>
        <Modal show={show} setShow={setShow} size="md">
            <Layout register={register} handleSubmit={handleSubmit} onSubmit={addTeam} controls={controls} errors={errors}/>
        </Modal>

        <div className={style.container}>
        <div className={style.flex_right}>
            <div className={style.heading}>
                Venues
            </div>
            <input type="text" placeholder='Search venue...' className={layoutStyle.input} value={searchText} onChange={(e) => { setSearchText(e.target.value) }}/>

                <Button value="+" onClick={() => setShow(true)}/>
            </div>
            <div className={style.table_content}>
                    <Table columns={columns} data={venues} loading={loading}/>
                </div>
            </div>

    </>)
}

export default List
