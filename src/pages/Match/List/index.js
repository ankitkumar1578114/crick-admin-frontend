import { useForm } from 'react-hook-form'
import Layout from '../../Components/Layout'
import useCreateMatch from '../hooks/useCreateMatch'
import useGetMatches from '../hooks/useGetMatches'
import MatchControls from '../match-controls'
import style from './styles.module.css'
import Modal from '../../Components/Modal'
import { useState } from 'react'
import Button from '../../Components/Button'
import Table from '../../Components/Table'
import { columns } from '../utlis/match-table'

const List = () => {
  const { data: matches, getMatches } = useGetMatches()
  const { register, handleSubmit } = useForm()
  const controls = MatchControls()
  const [show, setShow] = useState(false)
  const { createMatch } = useCreateMatch({ getMatches, setShow })

  return (<>
        <Modal show={show} setShow={setShow} size="md">
            <Layout register={register} handleSubmit={handleSubmit} onSubmit={createMatch} controls={controls}/>
        </Modal>
        <div className={style.match_list_page}>
        <div className={style.flex_right}>
            <Button value="+ Create Match" onClick={() => setShow(true)}/>
        </div>

        <Table columns={columns} data={matches}/>
        </div>
    </>)
}

export default List
