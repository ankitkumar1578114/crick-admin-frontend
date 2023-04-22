import { useEffect, useState } from 'react'
import IconSuccss from '../../../../Components/Icons/IconSuccess'
import IconFailed from '../../../../Components/Icons/IconFailed'

import useUpdateSquad from '../../../../Squad/hooks/useUpdateSquad'
import style from './styles.module.css'

const PlayerItem = ({ player, squadId, getMatchById, matchId, index, isSquadFinal }) => {
  const [checked, setChecked] = useState(player?.selected)
  const { updatePlayerInSquad } = useUpdateSquad({ squadId, getMatchById, matchId })
  const changeSelection = () => {
    if (!isSquadFinal) { updatePlayerInSquad({ playerId: player?.player_id, selected: !checked ? 1 : 0 }) }
  }
  useEffect(() => {
    setChecked(player?.selected)
  }, [player])
  return (<>
    <div className={style.item} onClick={() => changeSelection()}>
            {
              checked
                ? <IconSuccss />
                : <IconFailed />
            }
           {player.name} &nbsp;
           {player.is_captain === 1 && (<>(Captain)</>)}
    </div>
    </>)
}

export default PlayerItem
