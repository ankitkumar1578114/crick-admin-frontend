import { useForm } from 'react-hook-form'
import Layout from '../../../Components/Layout'
import useCreateSquad from '../../../Squad/hooks/useCreateSquad'
import control from './add-player'
import PlayerItem from './PlayerItem'
const SquadItem = ({ squad, matchId, getMatchById, isSquadFinal }) => {
  const { register, handleSubmit } = useForm()
  const controls = control()
  const { addPlayerInSquad } = useCreateSquad({ squadId: squad?.id, getMatchById, matchId })

  return (<>
                      LSG

                    {!isSquadFinal && <Layout register={register} handleSubmit={handleSubmit} onSubmit={addPlayerInSquad} controls={controls}/>
                    }
                    {
                        squad?.players?.map((player, index) =>
                           <PlayerItem key={index} index={index + 1} player={player} squadId={squad?.id} matchId={matchId} getMatchById={getMatchById} isSquadFinal={isSquadFinal}/>
                        )
                    }

            </>)
}

export default SquadItem
