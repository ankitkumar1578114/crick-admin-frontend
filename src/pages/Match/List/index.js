import useGetMatches from '../hooks/useGetMatches'
import globalStyle from '../../Venue/List/styles.module.css'
import { useEffect, useState } from 'react'
import Button from '../../Components/Button'
import Table from '../../Components/Table'
import { columns } from '../utlis/match-table'
import MatchCard from '../MatchCard'
import styles from './styles.module.css'
import AddMatchModal from './AddMatchModal'

const List = ({ matches: matchesFromDashboard, loading: loadingFromDashboard, isFromDashboard = false }) => {
  const [matches, setMatches] = useState([])
  const [loading, setLoading] = useState(false)
  const { data: matchesFromMain, getMatches, loadingFromMain } = useGetMatches()

  useEffect(() => {
    setMatches(matchesFromDashboard)
    setLoading(loadingFromDashboard)
  }, [JSON.stringify(matchesFromDashboard)])

  useEffect(() => {
    setMatches(matchesFromMain)
    setLoading(loadingFromMain)
  }, [JSON.stringify(matchesFromMain)])

  useEffect(() => {
    if (!isFromDashboard) { getMatches() }
  }, [])

  const [show, setShow] = useState(false)
  const [view, setView] = useState('list')
  return (<>
        {
          show
            ? <AddMatchModal getMatches={getMatches} setShow={setShow} show={show}/>
            : null
        }
        <div className={globalStyle.container}>
            <div className={globalStyle.flex_right}>
            <div className={globalStyle.heading}>
                Matches
            </div>
            <a onClick={() => setView(view === 'list' ? 'block' : 'list')}>{view === 'list' ? 'Block' : 'List'}</a>
            <Button value="+" onClick={() => setShow(true)}/>
        </div>
        <div className={globalStyle.table_content}>
            {
                {
                  list: <Table columns={columns} data={matches} loading={loading}/>,
                  block: <div className={styles.match_container}>{
                !loading && (matches?.length > 0
                  ? matches?.map((match, index) => (
                    <MatchCard match={match} key={index}/>
                  ))
                  : <div className={globalStyle.no_data_found}>
                    No Data Found
                </div>)}
                </div>
                }[view]
            }
        </div>
        </div>
    </>)
}

export default List
