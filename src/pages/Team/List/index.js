import { useForm } from 'react-hook-form'
import Layout from '../../Components/Layout'
import control from '../team-controls'
import useCreateTeam from '../hooks/useCreateTeam'
import useGetTeams from '../hooks/useGetTeams'
import globalStyle from '../../Venue/List/styles.module.css'
import Modal from '../../Components/Modal'
import { useState } from 'react'
import Button from '../../Components/Button'
import Table from '../../Components/Table'
import { columns } from '../utlis/team-table'

const List = () => {
  const { data: teams, getTeams, loading } = useGetTeams()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const controls = control()
  const [show, setShow] = useState(false)
  const { addTeam } = useCreateTeam({ getTeams, setShow })
  return (<>
        <Modal show={show} setShow={setShow} size="md">
            <Layout register={register} handleSubmit={handleSubmit} onSubmit={addTeam} errors={errors} controls={controls}/>
        </Modal>

        <div className={globalStyle.container}>
            <div className={globalStyle.flex_right}>
                <div className={globalStyle.heading}>
                        Teams
                    </div>
                    <Button value="+" onClick={() => setShow(true)}/>
            </div>
            <Table columns={columns} data={teams} loading={loading}/>
        </div>

    </>)
}

export default List
