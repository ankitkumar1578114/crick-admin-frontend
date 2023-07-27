import useRequest from '../../../common/hooks/useRequest'
const useInsertBall = ({
  matchData, ballOftheMatch,
  getScoreData, batPlayerId, ballPlayerId,
  batsmanOnNonStrike, squadId, getMatchById,
  legalBalls, battingTeam, reset, autoLoad, outType
}) => {
  const { data, loading, trigger } = useRequest({
    url: 'ball/insert_ball',
    method: 'post',
    autoLoad
  })

  const insertBall = async ({ result, playedShot, outType }) => {
    if (battingTeam === 0) {
      alert('Match has not started yet')
      return
    }
    if (batPlayerId && batsmanOnNonStrike && ballPlayerId) {
      const payload = {
        matchId: matchData?.id,
        result,
        specialEvents: outType ? [outType] : null,
        playedShot
      }
      await trigger(payload)
      await getScoreData()
      await getMatchById(matchData?.id)
      return data
    } else {
      alert('Insert Batsmans and Bowlers')
    }
  }

  return {
    loading,
    data: data?.data,
    insertBall
  }
}
export default useInsertBall
