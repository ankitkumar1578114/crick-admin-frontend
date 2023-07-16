import { useForm } from 'react-hook-form'
import Layout from '../../Components/Layout'
import useCreateMatch from '../hooks/useCreateMatch'
import useGetMatches from '../hooks/useGetMatches'
import MatchControls from '../match-controls'
import globalStyle from '../../Venue/List/styles.module.css'
import Modal from '../../Components/Modal'
import { useState } from 'react'
import Button from '../../Components/Button'
import Table from '../../Components/Table'
import { columns } from '../utlis/match-table'

const List = () => {
  const { data: matches, getMatches, loading } = useGetMatches()
  const { register, handleSubmit } = useForm()
  const controls = MatchControls()
  const [show, setShow] = useState(false)
  const { createMatch } = useCreateMatch({ getMatches, setShow })
  return (<>
        <Modal show={show} setShow={setShow} size="md">
            <Layout register={register} handleSubmit={handleSubmit} onSubmit={createMatch} controls={controls} submitBtnName='CREATE'/>
        </Modal>
        <div className={globalStyle.container}>
            <div className={globalStyle.flex_right}>
            <div>
                Your Matches
            </div>
            <Button value="CREATE MATCH" onClick={() => setShow(true)}/>
        </div>

        <Table columns={columns} data={matches} loading={loading}/>
        </div>
    </>)
}

export default List
