import './App.css';
import PrincipalPage from './Components/PrincipalP';
import { Routes, Route } from 'react-router-dom';
import Playing from './Components/Play';
import GameOver from './Components/GameO';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<PrincipalPage/>}/>
        <Route path='playing' element={<Playing/>}/>
        <Route path='gameover' element={<GameOver/>}/>
      </Routes>
    </>
  );
}

export default App;
