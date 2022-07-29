import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import styled from '@emotion/styled';

import { text, palette, penaltyFEN } from "../../../data";
import { PlayerInfo, IGameInfo } from "../../../data/types";

const FormStyle = styled.form`
  width: 100%;
  
  margin-top: 2%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  font-size: 1.5rem;
`;

const InputStyle = styled.input`
  width: 40%;

  margin-top: 1.5%;
  margin-bottom: 1.5%;
  
  border: 3px solid ${palette.wood};
  outline: 0;
  font-size: 1.2rem;
`;

const SelectStyle = styled.select`
  width: 70%;
  height: 5%;

  margin-top: 1.5%;
  margin-bottom: 1.5%;

  border: 3px solid ${palette.wood};
  outline: 0;
  font-size: 1.2rem;
`;

const TextareaStyle = styled.textarea`
  width: 90%;
  height: 100px;
  resize: none;

  margin-top: 1.5%;
  margin-bottom: 1.5%;

  border: 3px solid ${palette.wood};
  outline: 0;
  font-size: 1.2rem;
`;

const RadioStyle = styled.div`
  margin-top: 1.5%;
  margin-bottom: 1.5%;

  font-size: 1.2rem;
`;

const TimeControlStyle = styled.div`
  margin-top: 1.5%;
  margin-bottom: 1.5%;
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-size: 1.2rem;
`;

const TimeDescriptionStyle = styled.div`
  font-size: 0.9rem;
`;

const SubmitStyle = styled.input`
  width: 35%;
  height: 10%;

  margin-top: 1.5%;
  margin-bottom: 1.5%;

  border: 3px solid ${palette.wood};
  outline: 0;
  font-size: 1.2rem;
`;

const Comp: React.FC = () => {
  const [playerList, setPlayerList] = useState([]);
  const [penalty, setPenalty] = useState("");
  const penaltyWhite = penaltyFEN.white;
  const penaltyBlack = penaltyFEN.black;
  
  const loadPlayerList = async () => {
    const response = await axios.get(`${text.backendURL}/playerlist/`);
    setPlayerList(response.data);
  };
  const PlayerOptions = !playerList ?
    undefined :
    playerList.map((player: PlayerInfo, index: number) => {
      return (
        <option key={index} value={player.id}>
          {`${player.name} (${player.rating})`}
        </option>
      );
    });
  
  const { register, handleSubmit, setValue } = useForm<IGameInfo>();
  const onSubmit: SubmitHandler<IGameInfo> = async (data: IGameInfo) => {
    // API Call: POST backendURL/game/
    try {
      const response = await axios.post(`${text.backendURL}/game/`, data);
      if (response.data.code) {
        alert(response.data.msg);
      }
      else {
        alert(text.gameAdd.success);
        window.location.reload();
      }
    } catch (err) {
      alert(text.gameAdd.error);
    } finally {
      console.log(data);
    }
  };
  
  useEffect(() => {
    loadPlayerList();
    setValue("startpos", penaltyFEN.normal);
  }, []);
  
  return (
    <FormStyle onSubmit={handleSubmit(onSubmit)}>
      <b>경기 일자</b>
      <InputStyle
        type="date"
        {...register("playedat")} />
      
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
      
      <b>페널티</b>
      <RadioStyle onChange={(e) => { setValue("startpos", penaltyFEN.normal) }}>
        <input type="radio" name="startpos" value="0" onChange={(e) => { setPenalty(e.target.value) }} defaultChecked={true} />없음
        <input type="radio" name="startpos" value="1" onChange={(e) => { setPenalty(e.target.value) }} />백에게 페널티
        <input type="radio" name="startpos" value="-1" onChange={(e) => { setPenalty(e.target.value) }} />흑에게 페널티
      </RadioStyle>
      {penalty !== "1" ? undefined :
        <SelectStyle {...register("startpos")}>
          <option value={penaltyWhite.cBishop}>c열 비숍 없이 (-300)</option>
          <option value={penaltyWhite.fBishop}>f열 비숍 없이 (-300)</option>
          <option value={penaltyWhite.bKnight}>b열 나이트 없이 (-300)</option>
          <option value={penaltyWhite.gKnight}>g열 나이트 없이 (-300)</option>
          <option value={penaltyWhite.aRook}>a열 룩 없이 (-500)</option>
          <option value={penaltyWhite.hRook}>h열 룩 없이 (-500)</option>
          <option value={penaltyWhite.queen}>퀸 없이 (-900)</option>
        </SelectStyle>}
      {penalty !== "-1" ? undefined :
        <SelectStyle {...register("startpos")}>
          <option value={penaltyBlack.cBishop}>c열 비숍 없이 (-300)</option>
          <option value={penaltyBlack.fBishop}>f열 비숍 없이 (-300)</option>
          <option value={penaltyBlack.bKnight}>b열 나이트 없이 (-300)</option>
          <option value={penaltyBlack.gKnight}>g열 나이트 없이 (-300)</option>
          <option value={penaltyBlack.aRook}>a열 룩 없이 (-500)</option>
          <option value={penaltyBlack.hRook}>h열 룩 없이 (-500)</option>
          <option value={penaltyBlack.queen}>퀸 없이 (-900)</option>
        </SelectStyle>}
      
      <b>시간</b>
      <TimeDescriptionStyle>{text.gameAdd.timeDescription}</TimeDescriptionStyle>
      <TimeControlStyle>
        <InputStyle
          type='text'
          inputMode='numeric'
          placeholder='분 단위'
          {...register("originaltime")}
        />
        +
        <InputStyle
          type='text'
          inputMode='numeric'
          placeholder='초 단위'
          {...register("incrementtime")}
        />
      </TimeControlStyle>
      
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
      
      <b>간단한 설명(선택)</b>
      <TextareaStyle {...register("description")}
        placeholder={text.gameAdd.descriptionSample}
      />
      
      <SubmitStyle type="submit" />
    </FormStyle>
  );
}

export default Comp;
