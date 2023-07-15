import { useForm } from 'react-hook-form'
import { controls } from './utils/openRegistration-controls'
import Layout from '../../../../Components/Layout'
import useOpenRegistration from './hooks/useOpenRegistration'
const OpenRegistraiton = ({ squad, getMatchById }) => {
  const { register, handleSubmit } = useForm()
  const { openRegistration } = useOpenRegistration({ squad, getMatchById })
  return <>
         <Layout register={register} handleSubmit={handleSubmit} onSubmit={openRegistration} controls={controls} submitBtnName="Open Registration"/>
    </>
}
export default OpenRegistraiton
