import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from './components/Page/MainPage';
import NotFound from './components/Page/NotFound';
import GameView from './components/Page/GameView';
import GameListRouter from './components/Page/GameList/Router';
import GameAdd from './components/Page/GameAdd';
import PlayerAdd from './components/Page/PlayerAdd';
import PlayerList from './components/Page/PlayerList';
import PlayerView from './components/Page/PlayerView';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/game/:id/" element={<GameView />} />
        <Route path="/gamelist/*" element={<GameListRouter />} />
        <Route path="/newgame/" element={<GameAdd />} />
        <Route path="/newplayer/" element={<PlayerAdd />} />
        <Route path="/playerlist/*" element={<PlayerList />} />
        <Route path="/player/:id/" element={<PlayerView />} />
      </Routes>
    </Router>
    
  );
}

export default App;
