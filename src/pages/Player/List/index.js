import { useForm } from 'react-hook-form'
import Layout from '../../Components/Layout'
import control from '../player-controls'
import globalStyle from '../../Venue/List/styles.module.css'
import useCreatePlayer from '../hooks/useCreatePlayer'
import useGetPlayers from '../hooks/useGetPlayers'
import Button from '../../Components/Button'
import Modal from '../../Components/Modal'
import { useState } from 'react'
import Table from '../../Components/Table'
import { columns } from '../utlis/player-table'

const List = () => {
  const controls = control()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { data, getPlayers, loading } = useGetPlayers()
  const [show, setShow] = useState(false)
  const { createPlayer } = useCreatePlayer({ getPlayers, setShow })
  return (<>
        <Modal show={show} setShow={setShow} size="md">
            <Layout register={register} handleSubmit={handleSubmit} onSubmit={createPlayer} controls={controls} errors={errors}/>
        </Modal>

        <div className={globalStyle.container}>
            <div className={globalStyle.flex_right}>
                <div className={globalStyle.heading}>
                    Players
                </div>
                <Button value="+" onClick={() => setShow(true)}/>
            </div>
            <Table columns={columns} data={data} loading={loading}/>
            </div>

    </>)
}

export default List
