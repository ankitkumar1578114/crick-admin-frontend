import { useForm } from 'react-hook-form'
import Layout from '../../../Components/Layout'
import Modal from '../../../Components/Modal'
import useCreateMatch from '../../hooks/useCreateMatch'
import MatchControls from '../../match-controls'

const AddMatchModal = ({ show, getMatches, setShow }) => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const controls = MatchControls()

  const { createMatch } = useCreateMatch({ getMatches, setShow })

  return <>
        <Modal show={show} setShow={setShow} size="md">
            <Layout register={register} handleSubmit={handleSubmit} onSubmit={createMatch} controls={controls} errors={errors} submitBtnName='CREATE'/>
        </Modal>

    </>
}
export default AddMatchModal
