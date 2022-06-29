import React from 'react';
import styled from '@emotion/styled'

import Header from '../Header'
import MainImage from './MainImage'
import Title from './Title'

const MainPage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  
  background-color: #ece6cc;
`;

const Comp: React.FC = () => {
  return (
    <MainPage>
      <Header />
      <MainImage />
      <Title />
    </MainPage>
  );
}

export default Comp;
