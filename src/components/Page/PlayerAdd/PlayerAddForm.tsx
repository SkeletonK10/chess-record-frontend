import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import styled from '@emotion/styled';

import { text, palette } from "../../../data";
import { IPlayerInfo } from "../../../data/types";

const FormStyle = styled.form`
  width: 100%;
  
  margin-top: 2%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  font-size: 1.5rem;
`;

const InputStyle = styled.input`
  width: 60%;

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
  const { register, handleSubmit } = useForm<IPlayerInfo>();
  const onSubmit: SubmitHandler<IPlayerInfo> = async (data: IPlayerInfo) => {
    // API Call: POST backendURL/user/
    try {
      const response = await axios.post(`${text.backendURL}/user/`, data);
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
  
  return (
    <FormStyle onSubmit={handleSubmit(onSubmit)}>
      <b>이름</b>
      <InputStyle
        type="text"
        placeholder="예: 홍길동"
        {...register("name")}
      />
      
      <b>구분용 아이디</b>
      <InputStyle
        type="text"
        placeholder="3~16자의 영문 및 숫자"
        {...register("userid")}
      />
      <SubmitStyle type="submit" />
    </FormStyle>
  );
}

export default Comp;
