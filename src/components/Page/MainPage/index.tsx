import React from 'react';

import PageStyle from '../../PageStyle';

import Header from '../../Header'
import MainImage from './MainImage'
import Title from './Title'
import MainButton from './MainButton'


const Comp: React.FC = () => {
  return (
    <PageStyle>
      <Header />
      <MainImage />
      <Title />
      <MainButton text="경기 기록 추가" path="/newgame/"/>
      <MainButton text="경기 기록 조회" path="/game/"/>
    </PageStyle>
  );
}

export default Comp;
