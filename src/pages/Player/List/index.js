import { useForm } from 'react-hook-form'
import Layout from '../../Components/Layout'
import control from '../player-controls'
import style from './styles.module.css'
import useCreatePlayer from '../hooks/useCreatePlayer'
import useGetPlayers from '../hooks/useGetPlayers'
import Button from '../../Components/Button'
import Modal from '../../Components/Modal'
import { useState } from 'react'
import Table from '../../Components/Table'
import { columns } from '../utlis/player-table'

const List = () => {
  const controls = control()
  const { register, handleSubmit } = useForm()
  const { data, getPlayers } = useGetPlayers()
  const [show, setShow] = useState(false)
  const { createPlayer } = useCreatePlayer({ getPlayers, setShow })
  return (<>
        <Modal show={show} setShow={setShow} size="md">
            <Layout register={register} handleSubmit={handleSubmit} onSubmit={createPlayer} controls={controls}/>
        </Modal>

        <div className={style.list}>
            <div className={style.flex_right}>
                <div>
                    Your Players
                </div>
                <Button value="+ Create Player" onClick={() => setShow(true)}/>
            </div>
            <Table columns={columns} data={data}/>
            </div>

    </>)
}

export default List
