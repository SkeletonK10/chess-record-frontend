import React from 'react';
import styled from '@emotion/styled'

import data from '../../data'

const Title = styled.div`
  width: 100%;
  height: 25%;
  
  display: flex;
  justify-content: center;
  align-items: flex-end;
  
  font-size: 60px;
  color: #8c531b;
`;

const SubTitle = styled.div`
  width: 100%;
  margin-top: 10px;
  
  display: flex;
  justify-content: center;
  
  font-size: 20px;
  color: #8c531b;
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
