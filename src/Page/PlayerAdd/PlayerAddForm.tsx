import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import styled from '@emotion/styled';

import BackButton from '../../components/BackButton';

import { text, palette } from "../../data";
import { IPlayerInfo } from "../../data/types";

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
  const { register, handleSubmit } = useForm<IPlayerInfo>();
  const onSubmit: SubmitHandler<IPlayerInfo> = async (data: IPlayerInfo) => {
    // API Call: POST backendURL/user/
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/player/`, data);
    if (response.data.code) {
      alert(response.data.msg);
      console.log(data);
      return;
    }
    alert(text.playerAdd.success);
    console.log(response);
    window.location.reload();
  };
  
  return (
    <FormStyle onSubmit={handleSubmit(onSubmit)}>
      <b>이름</b>
      <InputStyle
        type="text"
        placeholder={text.playerAdd.nameGuide}
        {...register("name")}
      />
      
      <b>구분용 아이디</b>
      <InputStyle
        type="text"
        placeholder={text.playerAdd.useridGuide}
        {...register("userid")}
      />
      <ButtonContainerStyle>
        <BackButton />
        <SubmitStyle>
          <SubmitInputStyle type="submit" />
        </SubmitStyle>
      </ButtonContainerStyle>
    </FormStyle>
  );
}

export default Comp;
