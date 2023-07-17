import useRequest from '../../../common/hooks/useRequest'
const useInsertBall = ({
  matchData, ballOftheMatch,
  getScoreData, batPlayerId, ballPlayerId,
  batsmanOnNonStrike, squadId, getMatchById,
  legalBalls, battingTeam, reset, autoLoad
}) => {
  const { data, loading, trigger } = useRequest({
    url: 'ball/insert_ball',
    method: 'post',
    autoLoad
  })

  const insertBall = async (result) => {
    if (battingTeam === 0) {
      alert('Match has not started yet')
      return
    }
    if (batPlayerId && batsmanOnNonStrike && ballPlayerId) {
      const payload = {
        matchId: matchData?.id,
        battingTeamId: battingTeam === 1 ? matchData?.team1?.id : matchData?.team2?.id,
        bowlingTeamId: battingTeam === 2 ? matchData?.team2?.id : matchData?.team1?.id,
        ballOftheMatch: ballOftheMatch + 1,
        batPlayerId,
        ballPlayerId,
        batsmanOnNonStrike,
        squadId,
        result,
        legalBalls: legalBalls + 1,
        team1: matchData?.team1?.id,
        team2: matchData?.team2?.id
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
