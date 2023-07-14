import { Routes, Route, Navigate } from 'react-router-dom'
import MatchPage from '../Match'
import PlayerPage from '../Player'
import SquadPage from '../Squad'
import TeamPage from '../Team'
import SeriesList from '../Series/List'
import SeriesPage from '../Series'
import MatchList from '../Match/List'
import VenueList from '../Venue/List'
import Navigations from '../Navigation'
import { useState } from 'react'
import Dashboard from '../../common/Dashboard'
import WelcomePage from '../Welcome'

const Router = () => {
  const [user, setUser] = useState(null)
  const navigateTo = () => {
    return <><Navigate to="/series"/> </>
  }
  return (
        <>
            <Navigations user={user} setUser={setUser}/>
            <Dashboard>
              <Routes>
                  <Route path="/" element={user ? navigateTo() : <WelcomePage/>} />
                  <Route path="/player" element={!user ? navigateTo() : <PlayerPage/>} />
                  <Route path="/squad" element={!user ? navigateTo() : <SquadPage/>} />
                  <Route path="/team" element={!user ? navigateTo() : <TeamPage/>} />
                  <Route path="/match" element={!user ? navigateTo() : <MatchList/>} />
                  <Route path="/match/:id" element={!user ? navigateTo() : <MatchPage/>} />
                  <Route path="/series" element={!user ? navigateTo() : <SeriesList/>} />
                  <Route path="/series/:id" element={!user ? navigateTo() : <SeriesPage/>} />
                  <Route path="/venue" element={!user ? navigateTo() : <VenueList/>} />
              </Routes>
              </Dashboard>
        </>
  )
}

export default Router
