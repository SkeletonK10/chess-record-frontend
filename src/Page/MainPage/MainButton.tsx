import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { palette } from '../../data';

const MainButton = styled.div`
  width: 60%;
  height: 60px;
  margin-top: 30px;
  margin-bottom: 10px;
  border-radius: 100px;
  background-color: ${palette.ivoryHover};
  border: 3px solid ${palette.ivoryHover};
  cursor: pointer;
  
  &:hover {
    background-color: ${palette.ivoryHover};
    border: 3px solid ${palette.wood};
  }
  
  &:active {
    background-color:${palette.ivoryActive};
    border: 3px solid ${palette.wood};
  }
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  font-size: 2rem;
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
