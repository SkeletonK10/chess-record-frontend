import React from 'react';

import Page from '../../Page';
import MainImage from './MainImage'
import Title from './Title'
import MainButton from './MainButton'

import { URL, text } from '../../../data';


const Comp: React.FC = () => {
  return (
    <Page>
      <MainImage />
      <Title />
      <MainButton text={text.gameAdd.title} path={URL.gameAdd}/>
      <MainButton text={text.gameList.title} path={URL.gameList}/>
      <MainButton text={text.playerAdd.title} path={URL.playerAdd}/>
      <MainButton text={text.playerList.title} path={URL.playerList}/>
    </Page>
  );
}

export default Comp;
