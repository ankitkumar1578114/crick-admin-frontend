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
import MatchCard from '../MatchCard'
import styles from './styles.module.css'

const List = () => {
  const { data: matches, getMatches, loading } = useGetMatches()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const controls = MatchControls()
  const [show, setShow] = useState(false)
  const { createMatch } = useCreateMatch({ getMatches, setShow })
  const [view, setView] = useState('block')
  return (<>
        <Modal show={show} setShow={setShow} size="md">
            <Layout register={register} handleSubmit={handleSubmit} onSubmit={createMatch} controls={controls} errors={errors} submitBtnName='CREATE'/>
        </Modal>
        <div className={globalStyle.container}>
            <div className={globalStyle.flex_right}>
            <div className={globalStyle.heading}>
                Matches
            </div>
            <a onClick={() => setView(view === 'list' ? 'block' : 'list')}>{view === 'list' ? 'Block' : 'List'}</a>
            <Button value="+" onClick={() => setShow(true)}/>
        </div>

        {
            {
              list: <Table columns={columns} data={matches} loading={loading}/>,
              block: <div className={styles.match_container}>{
              !loading && matches?.map((match, index) => (
                <MatchCard match={match} key={index}/>
              ))}
              </div>
            }[view]
        }
        </div>
    </>)
}

export default List
