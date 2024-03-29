import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import axios from 'axios';

import Page from '../../components/Page';
import Title from '../../components/Title';
import GameHeader from './GameHeader';
import GameBody from './GameBody';
import BackButton from '../../components/BackButton';
import NoRecord from '../../components/NoRecord';

import { URL, text, palette } from '../../data';
import { GameInfo } from '../../data/types';

const ButtonContainerStyle = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: space-around;
`;

const ModifyButtonStyle = styled.div`
  width: 35%;
  height: 10%;

  margin-top: 3%;
  margin-bottom: 3%;

  display: flex;
  justify-content: center;
  cursor: pointer;
  
  border: 3px solid ${palette.wood};
  outline: 0;
  font-size: 1.2rem;
`;

const Comp: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [row, setRow] = useState<GameInfo>();
  
  const getView = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/game/${id}`);
    setRow(response.data);
  }
  
  useEffect(() => {
    getView();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const isEmpty = !row;
  return (
    <Page>
      <Title
        title={text.gameView.title}
        subTitle={text.gameView.subTitle}
      />
      {isEmpty ? (<>
          <NoRecord message={text.gameView.noRecord} />
          <BackButton />
        </>
      ) : (
        <>
          <GameHeader
            white={row.white}
            black={row.black}
            result={row.result}
            whiteratingdiff={row.whiteratingdiff}
            blackratingdiff={row.blackratingdiff} />
          <GameBody value={row} />
          <ButtonContainerStyle>
            <BackButton />
            <ModifyButtonStyle onClick={() => navigate(`${URL.gameModify}${row.id}`)}>
              수정
            </ModifyButtonStyle>
          </ButtonContainerStyle>
          
        </>
      )}
    </Page>
  );
}

export default Comp;
