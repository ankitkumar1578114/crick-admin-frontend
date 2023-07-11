import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'
import control from '../venue-controls'
import useCreateVenue from '../hooks/useCreateVenue'
import useGetVenues from '../hooks/useGetVenues'
import style from './styles.module.css'
import Modal from '../../Components/Modal'
import { useState } from 'react'
import Button from '../../Components/Button'

const List = () => {
  const {
    loading, data: venues,
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
                <Button value="+ Create Venue" onClick={() => setShow(true)}/>
            </div>

            <div className={style.item}>
                <div>Id</div>
                <div>Name</div>

            </div>
            {
                !loading && venues?.map((venue) => (
                    <>
                    <Link to={'/venue/' + venue?.id} className={style.item}>
                            <div className={style.div}>{venue?.id} </div>
                            <div className={style.div}>{venue?.name}</div>

                    </Link>
                    </>
                ))

            }

            </div>

    </>)
}

export default List
