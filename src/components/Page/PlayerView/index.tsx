import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Page from '../../Page';
import Title from './Title';
import PlayerHeader from './PlayerHeader';
import PlayerBody from './PlayerBody';
import List from './List';

import { text } from '../../../data';
import { PlayerInfo } from '../../../data/types';

const Comp: React.FC = () => {
  const { id } = useParams();
  const [row, setRow] = useState<PlayerInfo>();
  
  const getView = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/player/${id}`);
    setRow(response.data);
  }
  
  useEffect(() => {
    getView();
  });
  
  return (
    <Page>
      <Title />
      {!row ? (
        <>
          {text.playerView.noRecord}
        </>
      ) : (
        <>
          <PlayerHeader />
          <PlayerBody value={row} />
          <List />
        </>)}
    </Page>
  );
}

export default Comp;
