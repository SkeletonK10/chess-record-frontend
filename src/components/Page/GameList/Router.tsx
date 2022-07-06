import React from 'react';
import { Route, Routes } from 'react-router-dom';

import GameList from "./index";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<GameList />} />
      <Route path="/:page/" element={<GameList />} />
    </Routes>
    
  );
}

export default App;
