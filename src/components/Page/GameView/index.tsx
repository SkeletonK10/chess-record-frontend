import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import axios from 'axios';

import Page from '../../Page';
import Title from './Title';
import GameHeader from './GameHeader';
import GameBody from './GameBody';

import { text } from '../../../data';
import { GameInfo } from '../../../data/types';

const NoResultStyle = styled.div`
  margin-top: 5%;
  font-size: 2rem;
`;

const Comp: React.FC = () => {
  const { id } = useParams();
  const [row, setRow] = useState<GameInfo>();
  
  const getView = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/game/${id}`);
    setRow(response.data);
  }
  
  useEffect(() => {
    getView();
  });
  
  const isEmpty = !row;
  return (
    <Page>
      <Title id={Number(id)} />
      {isEmpty ? (
        <NoResultStyle>{text.gameView().noRecord}</NoResultStyle>
      ) : (
        <>
          <GameHeader white={row.white} black={row.black} result={row.result} />
          <GameBody value={row} />
        </>
      )}
    </Page>
  );
}

export default Comp;
