import { Routes, Route, Navigate } from 'react-router-dom'
import MatchPage from '../Match'
import PlayerPage from '../Player'
import SquadPage from '../Squad'
import TeamPage from '../Team'
import SeriesList from '../Series/List'
import SeriesPage from '../Series'
import MatchList from '../Match/List'
import VenueList from '../Venue/List'
// import Navigations from '../Navigation'
import { useState } from 'react'
import Dashboard from '../../common/Dashboard'
import WelcomePage from '../Welcome'
import Navigations from '../Navigation'
// import Navigation from '../Navigation'

const Router = () => {
  const [userLoaded, setUserLoaded] = useState(false)
  const [user, setUser] = useState(null)
  const navigateTo = () => {
    if (user) { return <><Navigate to="/series"/> </> } else { return <><Navigate to="/"/> </> }
  }
  return (
        <>
          {
            !user && <Navigations user={user} setUser={setUser} setUserLoaded={setUserLoaded}/>

          }
            <Dashboard user={user} setUser={setUser} setUserLoaded={setUserLoaded}>
              <Routes>
                  <Route path="/" element={userLoaded && !user ? <WelcomePage/> : navigateTo() } />
                  <Route path="/player" element={userLoaded && user ? <PlayerPage/> : navigateTo() } />
                  <Route path="/squad" element={userLoaded && user ? <SquadPage/> : navigateTo() } />
                  <Route path="/team" element={ userLoaded && user ? <TeamPage/> : navigateTo() } />
                  <Route path="/match" element={ userLoaded && user ? <MatchList/> : navigateTo() } />
                  <Route path="/match/:id" element={ userLoaded && user ? <MatchPage/> : navigateTo() } />
                  <Route path="/series" element={ userLoaded && user ? <SeriesList/> : navigateTo() } />
                  <Route path="/series/:id" element={ userLoaded && user ? <SeriesPage/> : navigateTo() } />
                  <Route path="/venue" element={ userLoaded && user ? <VenueList/> : navigateTo() } />
              </Routes>
              </Dashboard>
        </>
  )
}

export default Router
