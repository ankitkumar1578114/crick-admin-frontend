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
import layoutStyle from '../../Components/Layout/styles.module.css'

const List = () => {
  const [searchText, setSearchText] = useState('')
  const { data: teams, getTeams, loading } = useGetTeams({ searchText })
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
                <input type="text" placeholder="Search Team..." className={layoutStyle.input} value={searchText} onChange={(e) => { setSearchText(e.target.value) }}/>
                <Button value="+" onClick={() => setShow(true)}/>
            </div>
                <div className={globalStyle.table_content}>
                    <Table columns={columns} data={teams} loading={loading}/>
                </div>
        </div>

    </>)
}

export default List
