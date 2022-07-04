import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from './components/Page/MainPage';
import GameView from './components/Page/GameView';
import GameList from './components/Page/GameList';
import GameAdd from './components/Page/GameAdd';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/game/:id/" element={<GameView />} />
        <Route path="/gamelist/" element={<GameList />} />
        <Route path="/newgame/" element={<GameAdd />} />
      </Routes>
    </Router>
    
  );
}

export default App;
