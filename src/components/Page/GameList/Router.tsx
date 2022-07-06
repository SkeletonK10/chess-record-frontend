import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import GameList from "./index";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GameList />} />
        <Route path="/:page/" element={<GameList />} />
      </Routes>
    </Router>
    
  );
}

export default App;
