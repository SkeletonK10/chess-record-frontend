import React from 'react';
import styled from '@emotion/styled';

import ProfileImage from './ProfileImage';

const GameHeaderStyle = styled.div`
  width: 100%;
  margin-top: 4%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  
  font-size: 3rem;
`;


const Comp: React.FC = () => {
  return (
    <GameHeaderStyle>
      <ProfileImage />
    </GameHeaderStyle>
  );
}

export default Comp;
