import moment from 'moment'
import Pill from '../../Components/Pill'
import { Link } from 'react-router-dom'
import Button from '../../Components/Button'

export const columns = [
  {
    key: 'series',
    header: 'Series',
    accessor: 'series_name'
  },
  {
    key: 'name',
    header: 'Name',
    accessor: 'name'
  },
  {
    key: 'team1',
    header: 'Team1',
    accessor: (row) => (
        <>
            {
                row?.team1?.name
            }
        </>
    )
  },
  {
    key: 'team2',
    header: 'Team2',
    accessor: (row) => (
        <>
            {
                row?.team2?.name
            }
        </>
    )
  },
  {
    key: 'venue',
    header: 'Venue',
    accessor: 'venue_name'
  },
  {
    key: 'overs',
    header: 'Overs',
    accessor: 'overs'
  },
  {
    key: 'time',
    header: 'Time',
    accessor: (row) => (
        <>
        {
            {
              '-1': <Pill content="Runnng"/>,
              1: <Pill content="Runnng"/>,
              0: <Pill type="transparent" content={moment(row?.start_time).format('hh:mm DD MMM YYYY') }/>,
              2: <Pill type="secondary" content = 'Finished'/>
            }[row?.current_inning]
        }
        </>
    )
  },
  {
    key: 'view_btn',
    header: 'Overs',
    accessor: (row) => (
        <>
             <Link to={'/match/' + row?.id} ><Button value="View" type="secondary"/></Link>
        </>
    )

  }

]
