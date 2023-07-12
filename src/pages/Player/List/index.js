import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'
import control from '../player-controls'
import style from './styles.module.css'
import useCreatePlayer from '../hooks/useCreatePlayer'
import useGetPlayers from '../hooks/useGetPlayers'
import Button from '../../Components/Button'
import Modal from '../../Components/Modal'
import { useState } from 'react'

const List = () => {
  const controls = control()
  const { register, handleSubmit } = useForm()
  const { loading, data, getPlayers } = useGetPlayers()
  const [show, setShow] = useState(false)
  const { createPlayer } = useCreatePlayer({ getPlayers, setShow })
  return (<>
        <Modal show={show} setShow={setShow} size="md">
            <Layout register={register} handleSubmit={handleSubmit} onSubmit={createPlayer} controls={controls}/>
        </Modal>

        <div className={style.list}>
            <div className={style.flex_right}>
                <Button value="+ Create Player" onClick={() => setShow(true)}/>
            </div>
            <div className={style.item}>
                <div>Id</div>
                <div>Name</div>
                {/* <div>DOB</div> */}
                <div>Country</div>

            </div>
            {
                !loading && data?.map((player) => (
                    <>
                    <Link to={'/team/' + player?.id} className={style.item}>
                            <div className={style.div}>{player?.id}</div>
                            <div className={style.div}>{player?.name}</div>
                            {/* <div className={style.div}>{player?.dob}</div> */}
                            <div className={style.div}>{player?.country}</div>
                    </Link>
                    </>
                ))

            }

            </div>

    </>)
}

export default List
