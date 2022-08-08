import React from 'react';
import styled from '@emotion/styled';

const GameHeaderStyle = styled.div`
  width: 100%;
  margin-top: 20%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  
  font-size: 3rem;
`;


const Comp: React.FC = () => {
  return (
    <GameHeaderStyle />
  );
}

export default Comp;
