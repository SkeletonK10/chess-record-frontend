import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { palette } from '../../../data';

const MainButton = styled.div`
  width: 30%;
  height: 10%;
  margin-top: 3%;
  border: 3px solid ${palette.font};
  border-radius: 50px;
  background-color: ${palette.background};
  
  &:hover {
    background-color: ${palette.hover};
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
