import { Routes, Route } from 'react-router-dom'
import MatchPage from '../Match'
import PlayerPage from '../Player'
import SquadPage from '../Squad'
import TeamPage from '../Team'
import MatchList from '../Match/List'

const Router = () => {
  return (
        <>
            <Routes>
                <Route path="/player" element={<PlayerPage/>} />
                <Route path="/squad" element={<SquadPage/>} />
                <Route path="/team" element={<TeamPage/>} />
                <Route path="/match" element={<MatchList/>} />
                <Route path="/match/:id" element={<MatchPage/>} />

            </Routes>
        </>
  )
}

export default Router
