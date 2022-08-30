import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from './Page/MainPage';
import NotFound from './Page/NotFound';
import GameView from './Page/GameView';
import GameList from './Page/GameList';
import GameAdd from './Page/GameAdd';
import GameModify from './Page/GameModify';
import PlayerAdd from './Page/PlayerAdd';
import PlayerList from './Page/PlayerList';
import PlayerView from './Page/PlayerView';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/game/:id/" element={<GameView />} />
        <Route path="/gamelist/*" element={<GameList />} />
        <Route path="/newgame/" element={<GameAdd />} />
        <Route path="/modifygame/:id/" element={<GameModify />} />
        <Route path="/newplayer/" element={<PlayerAdd />} />
        <Route path="/playerlist/*" element={<PlayerList />} />
        <Route path="/player/:id/" element={<PlayerView />} />
      </Routes>
    </Router>
    
  );
}

export default App;
