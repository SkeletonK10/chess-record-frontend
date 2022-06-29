import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { palette } from '../../../data';

const MainButton = styled.div`
  width: 30%;
  height: 10%;
  margin-top: 3%;
  border: 3px solid ${palette.wood};
  border-radius: 50px;
  background-color: ${palette.ivory};
  
  &:hover {
    background-color: ${palette.ivoryHover};
  }
  
  &:active {
    background-color:${palette.ivoryActive};
  }
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  font-size: 3rem;
`;

interface ButtonProps {
  text: string;
  path: string;
}

const Comp: React.FC<ButtonProps> = (props) => {
  const navigate = useNavigate();
  return (
    <MainButton onClick={() => navigate(props.path)}>
        {props.text}
    </MainButton>
  );
}

export default Comp;
