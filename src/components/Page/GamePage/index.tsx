import React from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';

import GameList from "./GameList";
import GameView from "./GameView";

const MainPage: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<GameList />} />
      <Route path="/:id/" element={<GameView />} />
    </Routes>
  );
}

export default MainPage;
