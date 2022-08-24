import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import axios from 'axios';

import Page from '../../Page';
import Title from './Title';
import GameHeader from './GameHeader';
import GameBody from './GameBody';
import BackButton from '../../BackButton';

import { text, palette, URL } from '../../../data';
import { GameInfo, ModifiableIGameInfo } from '../../../data/types';

const NoResultStyle = styled.div`
  margin-top: 5%;
  font-size: 2rem;
`;

const FormStyle = styled.form`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  box-sizing: border-box;
`;

const ButtonContainerStyle = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: space-around;
`;

const SubmitStyle = styled.div`
  width: 35%;
  height: 10%;

  margin-top: 3%;
  margin-bottom: 3%;
  
  display: flex;
  justify-content: center;

  border: 3px solid ${palette.wood};
  outline: 0;
  font-size: 1.2rem;
`;

const SubmitInputStyle = styled.input`
  border: 0px;
  outline: 0;
  font-size: 1.2rem;
`;

const Comp: React.FC = () => {
  const { id } = useParams();
  const [row, setRow] = useState<GameInfo>();
  
  const getView = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/game/${id}`);
    setRow(response.data);
  }
  
  const { register, handleSubmit } = useForm<ModifiableIGameInfo>();
  const onSubmit: SubmitHandler<ModifiableIGameInfo> = async (data) => {
    // API Call: POST backendURL/game/
    try {
      const response = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/game/${id}`, data);
      if (response.data.code) {
        alert(response.data.msg);
      }
      else {
        alert(text.gameModify().success);
        window.location.href = `${URL.gameView}${id}`;
      }
    } catch (err) {
      alert(text.gameModify().error);
    } finally {
      console.log(data);
    }
  };
  
  useEffect(() => {
    getView();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const isEmpty = !row;
  return (
    <Page>
      <Title id={Number(id)} />
      {isEmpty ? (
        <NoResultStyle>{text.gameView().noRecord}</NoResultStyle>
      ) : (
          <FormStyle onSubmit={handleSubmit(onSubmit)}>
            <GameHeader
              white={row.white}
              black={row.black}
              result={row.result}
              whiteratingdiff={row.whiteratingdiff}
              blackratingdiff={row.blackratingdiff} />
            <GameBody
              value={row}
              register={register} />
            <ButtonContainerStyle>
              <BackButton />
              <SubmitStyle>
                <SubmitInputStyle type="submit" />
              </SubmitStyle>
            </ButtonContainerStyle>
            
          </FormStyle>
      )}
    </Page>
  );
}

export default Comp;
