import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'
import Skelton from '../../Components/Skelton'
import useCreateMatch from '../hooks/useCreateMatch'
import useGetMatches from '../hooks/useGetMatches'
import MatchControls from '../match-controls'
import style from './styles.module.css'

const List = () => {
  const { loading, data: matches, getMatches } = useGetMatches()
  const { register, handleSubmit } = useForm()
  const controls = MatchControls()
  const { createMatch } = useCreateMatch({ getMatches })

  return (<>
        <div className={style.list}>
            { loading && (<>
                    <Skelton className={style.item} width="100%" height="300px"/>
            </>)}

            { !loading && (
                <>
                <div className={style.item}>
                <div>Id</div>
                <div>Name</div>
                <div>Team1</div>
                <div>Team2</div>
                <div>Venue</div>

            </div>
            {
                matches?.map((match) => (
                    <>
                    <Link to={'/match/' + match?.id} className={style.item}>
                            <div className={style.div}>{match?.id}</div>
                            <div className={style.div}>{match?.name}</div>
                            <div className={style.div}>{match?.team1_name}</div>
                            <div className={style.div}>{match?.team2_name}</div>
                            <div className={style.div}>{match?.venue_name}</div>
                    </Link>
                    </>
                ))
            }</>)}
            </div>
            <Layout register={register} handleSubmit={handleSubmit} onSubmit={createMatch} controls={controls}/>

    </>)
}

export default List
