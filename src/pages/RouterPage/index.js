import { Routes, Route } from 'react-router-dom'
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

const Router = () => {
  const [user, setUser] = useState(null)
  return (
        <>
            <Navigations user={user} setUser={setUser}/>
            <Dashboard>
              <Routes>
                  <Route path="/" element={<SeriesList/>} />
                  <Route path="/player" element={<PlayerPage/>} />
                  <Route path="/squad" element={<SquadPage/>} />
                  <Route path="/team" element={<TeamPage/>} />
                  <Route path="/match" element={<MatchList/>} />
                  <Route path="/match/:id" element={<MatchPage/>} />
                  <Route path="/series" element={<SeriesList/>} />
                  <Route path="/series/:id" element={<SeriesPage/>} />
                  <Route path="/venue" element={<VenueList/>} />
              </Routes>
              </Dashboard>
        </>
  )
}

export default Router
