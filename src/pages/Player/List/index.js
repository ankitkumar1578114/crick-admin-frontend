import { useForm } from 'react-hook-form'
import Layout from '../../Components/Layout'
import control from '../player-controls'
import globalStyle from '../../Venue/List/styles.module.css'
import useCreatePlayer from '../hooks/useCreatePlayer'
import Button from '../../Components/Button'
import Modal from '../../Components/Modal'
import { useEffect, useState } from 'react'
import Table from '../../Components/Table'
import { columns } from '../utlis/player-table'
import layoutStyle from '../../Components/Layout/styles.module.css'
import useListPlayers from '../hooks/useListPlayers'

const List = ({ players: playersFromDashboard, loading: loadingFromDashboard, primaryCall = true }) => {
  const [players, setPlayers] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  const { data: playersFromMain, loadingFromMain, listPlayers } = useListPlayers({ searchText, primaryCall })

  useEffect(() => {
    setPlayers(playersFromDashboard)
    setLoading(loadingFromDashboard)
  }, [JSON.stringify(playersFromDashboard)])

  useEffect(() => {
    setPlayers(playersFromMain)
    setLoading(loadingFromMain)
  }, [JSON.stringify(playersFromMain)])

  const controls = control()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [show, setShow] = useState(false)
  const { createPlayer } = useCreatePlayer({ listPlayers, setShow })
  return (<>
        <Modal show={show} setShow={setShow} size="md">
            <Layout register={register} handleSubmit={handleSubmit} onSubmit={createPlayer} controls={controls} errors={errors}/>
        </Modal>

        <div className={globalStyle.container}>
            <div className={globalStyle.flex_right}>
                <div className={globalStyle.heading}>
                    Players
                </div>
                <input type="text" placeholder="Search player..." className={layoutStyle.input} value={searchText} onChange={(e) => { setSearchText(e.target.value) }}/>
                <Button value="+" onClick={() => setShow(true)}/>
            </div>
            <div className={globalStyle.table_content}>
                    <Table columns={columns} data={players} loading={loading}/>
                </div>
            </div>

    </>)
}

export default List
