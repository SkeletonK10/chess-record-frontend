import React from 'react';
import styled from '@emotion/styled'

import data from '../../data'

const Title = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: flex-end;
  
  font-size: 3.6rem;
`;

const SubTitle = styled.div`
  width: 100%;
  margin-top: 1%;
  
  display: flex;
  justify-content: center;
  
  font-size: 1.4rem;
`;

const Comp: React.FC = () => {
  return (
    <div>
      <Title>
        {data.title}
      </Title>
      <SubTitle>
        {data.subTitle}
      </SubTitle>
    </div>
  );
}

export default Comp;
