import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Page from '../../components/Page';
import Title from '../../components/Title';
import List from './List';
import BackButton from '../../components/BackButton';

import { GameList } from '../../data/types';
import { text } from '../../data';

const Comp: React.FC = () => {
  const [gameList, setGameList] = useState<GameList>();
  
  const getGameList = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/gamelist/`);
    setGameList(response.data);
  }
  
  useEffect(() => {
    getGameList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <Page>
      <Title
        title={text.gameList.title}
        subTitle={text.gameList.subTitle}
      />
      {!gameList ? (<><br />{text.gameList.noRecord}</>) : (<List list={gameList.list} />)}
      <BackButton />
    </Page>
  );
}

export default Comp;
