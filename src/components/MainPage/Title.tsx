import React from 'react';
import styled from '@emotion/styled'

import data from '../../data'

const DivTitle = styled.div`
  width: 100%;
  height: 25%;
  
  display: flex;
  justify-content: center;
  align-items: flex-end;
  
  font-size: 60px;
  color: #8c531b;
`;

const DivSubTitle = styled.div`
  width: 100%;
  margin-top: 10px;
  
  display: flex;
  justify-content: center;
  
  font-size: 20px;
  color: #8c531b;
`;

const Title: React.FC = () => {
  return (
    <div>
      <DivTitle>
        {data.title}
      </DivTitle>
      <DivSubTitle>
        {data.subTitle}
      </DivSubTitle>
    </div>
  );
}

export default Title;
