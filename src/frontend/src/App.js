
import './App.scss';
import { Route, Routes } from "react-router-dom"
import { TeamPage } from './pages/TeamPage';
import { MatchPage } from './pages/MatchPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/teams/:teamName" element={<TeamPage />} />
        <Route path="/teams/:teamName/matches/:year" element={<MatchPage />} />
      </Routes>
    </div>
  );
}

export default App;


