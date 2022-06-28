import React from 'react';
import styled from '@emotion/styled'

import Header from './components/Header'
import MainTitle from './components/MainTitle'
import MainSubTitle from './components/MainSubTitle'

const DivApp = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  
  
  background-color: #ece6cc;
`;

const App: React.FC = () => {
  return (
    <DivApp>
      <Header />
      <MainTitle />
      <MainSubTitle />
    </DivApp>
  );
}

export default App;
