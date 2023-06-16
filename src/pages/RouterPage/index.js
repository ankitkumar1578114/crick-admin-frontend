import { Routes, Route } from 'react-router-dom'
import MatchPage from '../Match'
import PlayerPage from '../Player'
import SquadPage from '../Squad'
import TeamPage from '../Team'
import SeriesList from '../Series/List'
import SeriesPage from '../Series'
import MatchList from '../Match/List'

const Router = () => {
  return (
        <>
            <Routes>
                <Route path="/" element={<SeriesList/>} />
                <Route path="/player" element={<PlayerPage/>} />
                <Route path="/squad" element={<SquadPage/>} />
                <Route path="/team" element={<TeamPage/>} />
                <Route path="/match" element={<MatchList/>} />
                <Route path="/match/:id" element={<MatchPage/>} />
                <Route path="/series" element={<SeriesList/>} />
                <Route path="/series/:id" element={<SeriesPage/>} />
             </Routes>
        </>
  )
}

export default Router
