import React from 'react';

import Page from '../../Page';
import MainImage from './MainImage'
import Title from './Title'
import MainButton from './MainButton'

import { text } from '../../../data';


const Comp: React.FC = () => {
  return (
    <Page>
      <MainImage />
      <Title />
      <MainButton text={text.gameAdd.title} path="/newgame/"/>
      <MainButton text={text.gameList.title} path="/gamelist/"/>
    </Page>
  );
}

export default Comp;
