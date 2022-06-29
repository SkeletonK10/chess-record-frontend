import React from 'react';
import styled from '@emotion/styled'

import Header from '../Header'
import MainImage from './MainImage'
import Title from './Title'
import MainButton from './MainButton'

const MainPage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Comp: React.FC = () => {
  return (
    <MainPage>
      <Header />
      <MainImage />
      <Title />
      <MainButton text="경기 기록 추가" path="/newgame/"/>
      <MainButton text="경기 기록 조회" path="/game/"/>
    </MainPage>
  );
}

export default Comp;
