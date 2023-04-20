import { useForm } from 'react-hook-form'
import Layout from '../Components/Layout'
import useCreateSquad from './hooks/useCreateSquad'
import control from './squad-controls'

const SquadPage = () => {
  const { register, handleSubmit } = useForm()
  const controls = control()
  const { addPlayerInSquad } = useCreateSquad()
  return (<>
        Add Player in Squad
        <Layout register={register} handleSubmit={handleSubmit} onSubmit={addPlayerInSquad} controls={controls}/>
    </>)
}

export default SquadPage
