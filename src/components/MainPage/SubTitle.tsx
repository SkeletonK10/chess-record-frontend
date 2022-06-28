import React from 'react';
import styled from '@emotion/styled'

import data from '../../data'

const DivSubTitle = styled.div`
  width: 100%;
  margin-top: 10px;
  
  display: flex;
  justify-content: center;
  
  font-size: 20px;
  color: #8c531b;
`;

const SubTitle: React.FC = () => {
  return (
    <DivSubTitle>
        {data.subTitle}
    </DivSubTitle>
  );
}

export default SubTitle;
