import React from 'react';
import styled from '@emotion/styled'

const MainButton = styled.div`
  width: 40%;
  height: 10%;
  margin-top: 4%;
  border-radius: 50px;
  background-color: #FFFFFF;
  
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
