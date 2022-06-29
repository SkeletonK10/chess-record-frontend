import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from './components/Page/MainPage'
import GameList from './components/Page/GameList'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/game/" element={<GameList />} />
      </Routes>
    </Router>
    
  );
}

export default App;
