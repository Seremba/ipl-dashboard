
import './App.css';
import { Route, Routes } from "react-router-dom"
import { TeamPage } from './pages/TeamPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/teams/:teamName" element={<TeamPage />} />
      </Routes>
    </div>
  );
}

export default App;


