import { useEffect, useState } from 'react'
import useUpdateSquad from '../../../../Squad/hooks/useUpdateSquad'

const PlayerItem = ({ player, squadId, getMatchById, matchId }) => {
  const [checked, setChecked] = useState(player?.selected)
  const { updatePlayerInSquad } = useUpdateSquad({ squadId, getMatchById, matchId })
  const changeSelection = (e) => {
    setChecked(e.target.checked)
    updatePlayerInSquad({ playerId: player?.player_id, selected: e.target.checked ? 1 : 0 })
  }
  useEffect(() => {
    setChecked(player?.selected)
  }, [player])
  return (<>
    <div>
        <input type="checkbox" checked={checked} onChange={changeSelection}/>
           {player.name}
    </div>
    </>)
}

export default PlayerItem
