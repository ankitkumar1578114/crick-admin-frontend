import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'
import control from '../player-controls'
import style from './styles.module.css'
import useCreatePlayer from '../hooks/useCreatePlayer'
import useGetPlayers from '../hooks/useGetPlayers'

const List = () => {
  const controls = control()
  const { register, handleSubmit } = useForm()
  const { createPlayer } = useCreatePlayer()
  const { loading, data } = useGetPlayers()
  return (<>
        <div className={style.list}>
            <div className={style.item}>
                <div>Id</div>
                <div>Name</div>
                {/* <div>DOB</div> */}
                <div>Country</div>

            </div>
            {
                !loading && data?.map((player) => (
                    <>
                    <Link to={'/team/' + player?.id} className={style.item}>
                            <div className={style.div}>{player?.id}</div>
                            <div className={style.div}>{player?.name}</div>
                            {/* <div className={style.div}>{player?.dob}</div> */}
                            <div className={style.div}>{player?.country}</div>
                    </Link>
                    </>
                ))

            }
            <Layout register={register} handleSubmit={handleSubmit} onSubmit={createPlayer} controls={controls}/>

            </div>

    </>)
}

export default List
