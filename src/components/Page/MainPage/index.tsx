import React from 'react';

import PageStyle from '../../PageStyle';

import Header from '../../Header'
import MainImage from './MainImage'
import Title from './Title'
import MainButton from './MainButton'

import { text } from '../../../data';


const Comp: React.FC = () => {
  return (
    <PageStyle>
      <Header />
      <MainImage />
      <Title />
      <MainButton text={text.gameAdd.title} path="/newgame/"/>
      <MainButton text={text.gameList.title} path="/game/"/>
    </PageStyle>
  );
}

export default Comp;
