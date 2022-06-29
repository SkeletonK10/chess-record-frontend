import React from 'react';
import styled from '@emotion/styled'

import Header from '../Header'
import Title from './Title'

const DivMainPage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  
  background-color: #ece6cc;
`;

const MainPage: React.FC = () => {
  return (
    <DivMainPage>
      <Header />
      <Title />
    </DivMainPage>
  );
}

export default MainPage;
