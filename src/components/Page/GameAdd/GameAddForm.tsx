import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import styled from '@emotion/styled';

import { text, palette } from "../../../data";
import { UserInfo, IGameInfo } from "../../../data/types";

const FormStyle = styled.form`
  width: 100%;
  
  margin-top: 2%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  font-size: 1.5rem;
`;

// const InputStyle = styled.input`
//   width: 70%;

//   margin-top: 1%;
//   margin-bottom: 1%;
  
//   border: 3px solid ${palette.wood};
//   outline: 0;
//   font-size: 1.2rem;
// `;

const SelectStyle = styled.select`
  width: 70%;
  height: 5%;

  margin-top: 1%;
  margin-bottom: 1%;

  border: 3px solid ${palette.wood};
  outline: 0;
  font-size: 1.2rem;
`;

const TextareaStyle = styled.textarea`
  width: 90%;
  height: 30%;
  resize: none;

  margin-top: 1%;
  margin-bottom: 1%;

  border: 3px solid ${palette.wood};
  outline: 0;
  font-size: 1.2rem;
`;

const SubmitStyle = styled.input`
  width: 35%;
  height: 10%;

  margin-top: 1%;
  margin-bottom: 1%;

  border: 3px solid ${palette.wood};
  outline: 0;
  font-size: 1.2rem;
`;

const Comp: React.FC = () => {
  const [playerList, setPlayerList] = useState([]);
  
  const loadPlayerList = async () => {
    const response = await axios.get(`${text.backendURL}/playerlist/`);
    setPlayerList(response.data);
  }
  
  const PlayerOptions = !playerList ?
  undefined :
  playerList.map((player: UserInfo, index: number) => {
    return (
      <option key={index} value={player.id}>
        {`${player.name} (${player.rating})`}
      </option>
    );
  });
  
  const { register, handleSubmit } = useForm<IGameInfo>();
  const onSubmit: SubmitHandler<IGameInfo> = async (data: IGameInfo) => {
    // API Call: POST backendURL/game/
    try {
      const response = await axios.post(`${text.backendURL}/game/`, data);
      alert(text.gameAdd.success);
      console.log(response);
      window.location.reload()
    }
    catch (err) {
      console.error(err);
      alert(text.gameAdd.error);
    }
    console.log(data);
  };
  
  useEffect(() => {
    loadPlayerList();
  });
  
  return (
    <FormStyle onSubmit={handleSubmit(onSubmit)}>
      <b>백 선수</b>
      <SelectStyle {...register("white")} defaultValue="-1">
        <option value='-1'>선택하지 않음</option>
        {PlayerOptions}
      </SelectStyle>
      
      <b>흑 선수</b>
      <SelectStyle {...register("black")} defaultValue="-1">
        <option value='-1'>선택하지 않음</option>
        {PlayerOptions}
      </SelectStyle>
      
      <b>결과</b>
      <SelectStyle {...register("result")} defaultValue="-1">
        <option value="-1">선택하지 않음</option>
        <option value="백 승">백 승</option>
        <option value="무승부">무승부</option>
        <option value="흑 승">흑 승</option>
        <option value="중단됨">중단됨</option>
      </SelectStyle>
      
      <b>기보(선택)</b>
      <TextareaStyle {...register("notation")}
        placeholder={text.gameAdd.notationSample}
      />
      
      <SubmitStyle type="submit" />
    </FormStyle>
  );
}

export default Comp;
