import { Routes, Route } from 'react-router-dom'
import MatchPage from '../Match'
import PlayerPage from '../Player'
import SquadPage from '../Squad'
import TeamPage from '../Team'
import SeriesList from '../Series/List'
import SeriesPage from '../Series'
import MatchList from '../Match/List'
import VenueList from '../Venue/List'
import { useState } from 'react'
import Dashboard from '../../common/Dashboard'
import WelcomePage from '../Welcome'
import Navigations from '../Navigation'
import { navigation } from './navigation'
import DashboardPage from '../DashboardPage'

const Comp = ({ path }) => {
  return {
    '/': <WelcomePage/>,
    '/dashboard': <DashboardPage/>,
    '/player': <PlayerPage/>,
    '/squad': <SquadPage/>,
    '/team': <TeamPage/>,
    '/match': <MatchList/>,
    '/match/:id': <MatchPage/>,
    '/venue': <VenueList/>,
    '/series': <SeriesList/>,
    '/series/:id': <SeriesPage/>
  }[path]
}

const Router = () => {
  const [userLoaded, setUserLoaded] = useState(false)
  const [user, setUser] = useState(null)

  return (
        <>
          {
            !user && <Navigations user={user} setUser={setUser} setUserLoaded={setUserLoaded}/>

          }
            <Dashboard user={user} setUser={setUser} setUserLoaded={setUserLoaded} userLoaded={userLoaded}>
              <Routes>
                  {
                    navigation.map((nav, index) => (
                      <Route key={index} path={nav?.path} element={<Comp {...{ path: nav?.path }}/>} />
                    ))
                  }
              </Routes>
              </Dashboard>
        </>
  )
}

export default Router
