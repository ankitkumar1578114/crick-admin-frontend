import { useForm } from 'react-hook-form'
import Layout from '../../../Components/Layout'
import Modal from '../../../Components/Modal'
import useCreateMatch from '../../hooks/useCreateMatch'
import MatchControls from '../../match-controls'
import useGetDashboard from '../../../DashboardPage/hooks/useGetDashboard'

const AddMatchModal = ({ show, getMatches, setShow }) => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const { data } = useGetDashboard()

  const {
    series = [],
    teams = [],
    venues = []
  } = data || {}

  const controls = MatchControls({ teamOptions: teams, venueOptions: venues, seriesOptions: series })

  const { createMatch } = useCreateMatch({ getMatches, setShow })

  return <>
        <Modal show={show} setShow={setShow} size="md">
            <Layout register={register} handleSubmit={handleSubmit} onSubmit={createMatch} controls={controls} errors={errors} submitBtnName='CREATE'/>
        </Modal>

    </>
}
export default AddMatchModal
