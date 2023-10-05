import { useForm } from 'react-hook-form'
import Layout from '../../../Components/Layout'
import useCreateSquad from '../../../Squad/hooks/useCreateSquad'
import control from './add-player'
import PlayerItem from './PlayerItem'
import styles from './styles.module.css'
// import OpenRegistraiton from './OpenRegistration'

const SquadItem = ({ squad, matchId, getMatchById, isSquadFinal, antiSquad }) => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const controls = control({ squad, antiSquad })
  const { addPlayerInSquad } = useCreateSquad({ squadId: squad?.id, getMatchById, matchId })
  return (<>
                <div className={styles.squad}>
                  {/* {
                    squad?.free_seats === 0 && <div className={styles.more_players_option}>
                    <div>
                      <div>
                        <h2 className={styles.h2}>
                           {squad?.teamName} dosn&apos;t  have 11 players ?
                        </h2>
                        <h5 className={styles.h5}>
                            Ask Peaple to Register for {squad?.teamName} Trial.
                        </h5>
                      </div>
                    </div>
                    <div>
                        <OpenRegistraiton {...{ squad, getMatchById }}/>
                    </div>

                </div>

                  } */}
                      <div className={styles.flex}>
                        {
                            squad?.players?.map((player, index) =>
                              <PlayerItem key={index} index={index + 1} player={player} squadId={squad?.id} matchId={matchId} getMatchById={getMatchById} isSquadFinal={isSquadFinal}/>
                            )
                        }
                      </div>
                      {!isSquadFinal && <Layout register={register} handleSubmit={handleSubmit} onSubmit={addPlayerInSquad} controls={controls} errors={errors} submitBtnName="Add Player"/>
                      }

                </div>

            </>)
}

export default SquadItem
