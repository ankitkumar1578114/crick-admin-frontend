import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'
import Skelton from '../../Components/Skelton'
import useCreateMatch from '../hooks/useCreateMatch'
import useGetMatches from '../hooks/useGetMatches'
import MatchControls from '../match-controls'
import style from './styles.module.css'
import Pill from '../../Components/Pill'
import Modal from '../../Components/Modal'
import { useState } from 'react'
import Button from '../../Components/Button'
import moment from 'moment'

const List = () => {
  const { loading, data: matches, getMatches } = useGetMatches()
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
        <div className={style.list}>
            { loading && (<>
                    <Skelton className={style.item} width="100%" height="300px"/>
            </>)}

            { !loading && (
                <>
                <div className={style.item}>
                <div>Series</div>
                <div>Name</div>
                <div>Team1</div>
                <div>Team2</div>
                <div>Venue</div>
                <div>Overs</div>
                <div>Time</div>
            </div>
            {
                matches?.map((match) => (
                    <>
                    <Link to={'/match/' + match?.id} className={style.item}>
                            <div className={style.div}>{match?.series_name}</div>
                            <div className={style.div}>{match?.name}</div>
                            <div className={style.div}>{match?.team1_name}</div>
                            <div className={style.div}>{match?.team2_name}</div>
                            <div className={style.div}>{match?.venue_name}</div>
                            <div className={style.div}>{match?.overs}</div>
                            <div className={style.div}>
                            {
                                {
                                  '-1': <Pill content="Runnng"/>,
                                  1: <Pill content="Runnng"/>,
                                  0: <Pill color="transparent" content={moment(match?.start_time).format('hh:mm DD MMM YYYY') }/>,
                                  2: <Pill color="red" content = 'Finished'/>
                                }[match?.current_inning]
                            }</div>
                    </Link>
                    </>
                ))
            }</>)}
            </div>
        </div>
    </>)
}

export default List
