import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import styled from '@emotion/styled';

import { text, palette } from "../../../data";
import { IGameInfo } from "../../../data/types";

const FormStyle = styled.form`
  width: 100%;
  height: 70%;
  
  margin-top: 2%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  font-size: 1.5rem;
`;

// const InputStyle = styled.input`
//   width: 20%;
//   height: 5%;

//   margin-top: 1%;
//   margin-bottom: 1%;
  
//   border: 3px solid ${palette.wood};
//   outline: 0;
//   font-size: 1.2rem;
// `;

const SelectStyle = styled.select`
  width: 20%;
  height: 5%;

  margin-top: 1%;
  margin-bottom: 1%;

  border: 3px solid ${palette.wood};
  outline: 0;
  font-size: 1.2rem;
`;

const TextareaStyle = styled.textarea`
  width: 40%;
  height: 30%;
  resize: none;

  margin-top: 1%;
  margin-bottom: 1%;

  border: 3px solid ${palette.wood};
  outline: 0;
  font-size: 1.2rem;
`;

const SubmitStyle = styled.input`
  width: 10%;
  height: 10%;

  margin-top: 1%;
  margin-bottom: 1%;

  border: 3px solid ${palette.wood};
  outline: 0;
  font-size: 1.2rem;
`;

const Comp: React.FC = () => {
  const { register, handleSubmit } = useForm<IGameInfo>();
  const onSubmit: SubmitHandler<IGameInfo> = async (data: IGameInfo) => {
    // API Call: POST backendURL/game/
    const url: string = text.backendURL + "/game/";
    try {
      const response = await axios.post(url, data);
      console.log(text.gameAdd.success);
      console.log(response);
    }
    catch (err) {
      console.error(err);
      alert(text.gameAdd.error);
    }
    console.log(data);
  } 
  
  return (
    <FormStyle onSubmit={handleSubmit(onSubmit)}>
      <b>백 선수</b>
      <SelectStyle {...register("white")} />
      
      <b>흑 선수</b>
      <SelectStyle {...register("black")} />
      
      <b>결과</b>
      <SelectStyle {...register("result")} defaultValue="-1">
        <option value="-1">선택하지 않음</option>
        <option value="1-0">백 승</option>
        <option value="1/2-1/2">무승부</option>
        <option value="0-1">흑 승</option>
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
