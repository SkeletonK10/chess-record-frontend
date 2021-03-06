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
      <b>?????? ??????</b>
      <InputStyle
        type="date"
        {...register("playedat")} />
      
      <b>??? ??????</b>
      <SelectStyle {...register("white")} defaultValue="-1">
        <option value='-1'>???????????? ??????</option>
        {PlayerOptions}
      </SelectStyle>
      
      <b>??? ??????</b>
      <SelectStyle {...register("black")} defaultValue="-1">
        <option value='-1'>???????????? ??????</option>
        {PlayerOptions}
      </SelectStyle>
      
      <b>?????????</b>
      <RadioStyle onChange={(e) => { setValue("startpos", penaltyFEN.normal) }}>
        <input type="radio" name="startpos" value="0" onChange={(e) => { setPenalty(e.target.value) }} defaultChecked={true} />??????
        <input type="radio" name="startpos" value="1" onChange={(e) => { setPenalty(e.target.value) }} />????????? ?????????
        <input type="radio" name="startpos" value="-1" onChange={(e) => { setPenalty(e.target.value) }} />????????? ?????????
      </RadioStyle>
      {penalty !== "1" ? undefined :
        <SelectStyle {...register("startpos")}>
          <option value={penaltyWhite.cBishop}>c??? ?????? ?????? (-300)</option>
          <option value={penaltyWhite.fBishop}>f??? ?????? ?????? (-300)</option>
          <option value={penaltyWhite.bKnight}>b??? ????????? ?????? (-300)</option>
          <option value={penaltyWhite.gKnight}>g??? ????????? ?????? (-300)</option>
          <option value={penaltyWhite.aRook}>a??? ??? ?????? (-500)</option>
          <option value={penaltyWhite.hRook}>h??? ??? ?????? (-500)</option>
          <option value={penaltyWhite.queen}>??? ?????? (-900)</option>
        </SelectStyle>}
      {penalty !== "-1" ? undefined :
        <SelectStyle {...register("startpos")}>
          <option value={penaltyBlack.cBishop}>c??? ?????? ?????? (-300)</option>
          <option value={penaltyBlack.fBishop}>f??? ?????? ?????? (-300)</option>
          <option value={penaltyBlack.bKnight}>b??? ????????? ?????? (-300)</option>
          <option value={penaltyBlack.gKnight}>g??? ????????? ?????? (-300)</option>
          <option value={penaltyBlack.aRook}>a??? ??? ?????? (-500)</option>
          <option value={penaltyBlack.hRook}>h??? ??? ?????? (-500)</option>
          <option value={penaltyBlack.queen}>??? ?????? (-900)</option>
        </SelectStyle>}
      
      <b>??????</b>
      <TimeDescriptionStyle>{text.gameAdd.timeDescription}</TimeDescriptionStyle>
      <TimeControlStyle>
        <InputStyle
          type='text'
          inputMode='numeric'
          placeholder='??? ??????'
          {...register("originaltime")}
        />
        +
        <InputStyle
          type='text'
          inputMode='numeric'
          placeholder='??? ??????'
          {...register("incrementtime")}
        />
      </TimeControlStyle>
      
      <b>??????</b>
      <SelectStyle {...register("result")} defaultValue="-1">
        <option value="-1">???????????? ??????</option>
        <option value="??? ???">??? ???</option>
        <option value="?????????">?????????</option>
        <option value="??? ???">??? ???</option>
        <option value="?????????">?????????</option>
      </SelectStyle>
      
      <b>??????(??????)</b>
      <TextareaStyle {...register("notation")}
        placeholder={text.gameAdd.notationSample}
      />
      
      <b>????????? ??????(??????)</b>
      <TextareaStyle {...register("description")}
        placeholder={text.gameAdd.descriptionSample}
      />
      
      <SubmitStyle type="submit" />
    </FormStyle>
  );
}

export default Comp;
