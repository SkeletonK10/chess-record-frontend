import React from 'react';
import styled from '@emotion/styled'

const MainButton = styled.div`
  width: 30%;
  height: 10%;
  margin-top: 4%;
  border: 3px solid #8c531b;
  border-radius: 50px;
  background-color: #ece6cc;
  
  &:hover {
    background-color: #fff9dc;
  }
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  font-size: 3rem;
`;

interface ButtonProps {
  text: string;
}

const Comp: React.FC<ButtonProps> = (props) => {
  return (
    <MainButton>
      {props.text}
    </MainButton>
  );
}

export default Comp;
