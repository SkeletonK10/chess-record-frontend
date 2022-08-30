import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Page from '../../components/Page';
import Title from './Title';
import PlayerHeader from './PlayerHeader';
import PlayerBody from './PlayerBody';
import BackButton from '../../components/BackButton';

import { text } from '../../data';
import { GameList, PlayerInfo } from '../../data/types';

const Comp: React.FC = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState<PlayerInfo>();
  const [gameList, setGameList] = useState<GameList>();
  
  const getPlayer = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/player/${id}`);
    setPlayer(response.data);
  }
  
  const getGameList = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/gamelist?playerid=${id}`);
    setGameList(response.data);
  }
  
  useEffect(() => {
    getPlayer();
    getGameList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <Page>
      <Title />
      {(!player || !gameList) ? (
        <>
          {text.playerView.noRecord}
          <BackButton />
        </>
      ) : (
          <>
            <PlayerHeader />
            <PlayerBody player={player} gameList={gameList} />
            <BackButton />
          </>)}
    </Page>
  );
}

export default Comp;
