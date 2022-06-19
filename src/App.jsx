import './App.css';
import PrincipalPage from './Components/PrincipalP';
import { Routes, Route } from 'react-router-dom';
import Playing from './Components/Play';
import GameOver from './Components/GameO';
import Instrucciones from './Components/Instruc';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<PrincipalPage/>}/>
        <Route path='/playing' element={<Playing/>}/>
        <Route path='/gameover' element={<GameOver/>}/>
        <Route path='/instrucciones' element={<Instrucciones/>}/>
      </Routes>
    </>
  );
}

export default App;
