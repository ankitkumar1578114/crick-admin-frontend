import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'
import control from '../team-controls'
import useCreateTeam from '../hooks/useCreateTeam'
import useGetTeams from '../hooks/useGetTeams'
import style from './styles.module.css'

const List = () => {
  const { loading, data: teams, getTeams } = useGetTeams()
  const { register, handleSubmit } = useForm()
  const controls = control()
  const { addTeam } = useCreateTeam({ getTeams })
  return (<>
        <div className={style.list}>
            <div className={style.item}>
                <div>Id</div>
                <div>Name</div>

            </div>
            {
                !loading && teams?.map((match) => (
                    <>
                    <Link to={'/team/' + match?.id} className={style.item}>
                            <div className={style.div}>{match?.id}</div>
                            <div className={style.div}>{match?.name}</div>
                    </Link>
                    </>
                ))

            }
                 <Layout register={register} handleSubmit={handleSubmit} onSubmit={addTeam} controls={controls}/>

            </div>

    </>)
}

export default List
