import React from 'react';
import styled from '@emotion/styled'

import { text } from '../../data'

const Title = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: flex-end;
  
  font-size: 3rem;
`;

const SubTitle = styled.div`
  width: 100%;
  margin-top: 1%;
  
  display: flex;
  justify-content: center;
  
  font-size: 1.3rem;
`;

const Comp: React.FC = () => {
  return (
    <div>
      <Title>
        {text.main.title}
      </Title>
      <SubTitle>
        {text.main.subTitle}
      </SubTitle>
    </div>
  );
}

export default Comp;
