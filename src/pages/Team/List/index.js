import { useForm } from 'react-hook-form'
import Layout from '../../Components/Layout'
import control from '../team-controls'
import useCreateTeam from '../hooks/useCreateTeam'
import useGetTeams from '../hooks/useGetTeams'
import style from './styles.module.css'
import Modal from '../../Components/Modal'
import { useState } from 'react'
import Button from '../../Components/Button'
import Table from '../../Components/Table'
import { columns } from '../utlis/team-table'

const List = () => {
  const { data: teams, getTeams } = useGetTeams()
  const { register, handleSubmit } = useForm()
  const controls = control()
  const [show, setShow] = useState(false)
  const { addTeam } = useCreateTeam({ getTeams, setShow })
  return (<>
        <Modal show={show} setShow={setShow} size="md">
            <Layout register={register} handleSubmit={handleSubmit} onSubmit={addTeam} controls={controls}/>
        </Modal>

        <div className={style.list}>
        <div className={style.flex_right}>
                <div>
                    Your Teams
                </div>
                <Button value="+ Create Team" onClick={() => setShow(true)}/>
        </div>
            <Table
                columns={columns}
                data={teams}
            />
        </div>

    </>)
}

export default List
