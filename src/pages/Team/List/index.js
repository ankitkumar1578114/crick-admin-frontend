import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'
import control from '../team-controls'
import useCreateTeam from '../hooks/useCreateTeam'
import useGetTeams from '../hooks/useGetTeams'
import style from './styles.module.css'
import Modal from '../../Components/Modal'
import { useState } from 'react'
import Button from '../../Components/Button'

const List = () => {
  const { loading, data: teams, getTeams } = useGetTeams()
  const { register, handleSubmit } = useForm()
  const controls = control()
  const { addTeam } = useCreateTeam({ getTeams })
  const [show, setShow] = useState(false)
  return (<>
        <Modal show={show} setShow={setShow} size="md">
            <Layout register={register} handleSubmit={handleSubmit} onSubmit={addTeam} controls={controls}/>
        </Modal>

        <div className={style.list}>
        <div className={style.flex_right}>
                <Button value="+ Create Match" onClick={() => setShow(true)}/>
            </div>

            <div className={style.item}>
                <div>Id</div>
                <div>Name</div>

            </div>
            {
                !loading && teams?.map((match) => (
                    <>
                    <Link to={'/team/' + match?.id} className={style.item}>
                            <div className={style.div}>{match?.id} </div>
                            <div>
                                <img className={style.img} src = {match?.image_url}/>
                            </div>
                            <div className={style.div}>{match?.name}</div>

                    </Link>
                    </>
                ))

            }

            </div>

    </>)
}

export default List
