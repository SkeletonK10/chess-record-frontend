import React from 'react';
import styled from '@emotion/styled'

import { text } from '../../../data'

const Title = styled.div`
  width: 100%;
  margin-top: 3%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  
  font-size: 3.6rem;
`;

const SubTitle = styled.div`
  width: 100%;
  margin-top: 2%;
  
  display: flex;
  justify-content: center;
  
  font-size: 1.4rem;
`;

const Comp: React.FC = () => {
  return (
    <div>
      <Title>
        {text.gameList.title}
      </Title>
      <SubTitle>
        {text.gameList.subTitle}
      </SubTitle>
    </div>
  );
}

export default Comp;
