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

const List = () => {
  const {
    data: venues,
    getVenues
  } = useGetVenues()
  const { register, handleSubmit } = useForm()
  const controls = control()
  const [show, setShow] = useState(false)
  const { addTeam } = useCreateVenue({ getVenues, setShow })
  return (<>
        <Modal show={show} setShow={setShow} size="md">
            <Layout register={register} handleSubmit={handleSubmit} onSubmit={addTeam} controls={controls}/>
        </Modal>

        <div className={style.list}>
        <div className={style.flex_right}>
            <div>
                Your Venues
            </div>
                <Button value="+ Create Venue" onClick={() => setShow(true)}/>
            </div>
            <Table columns={columns} data={venues}/>
            </div>

    </>)
}

export default List