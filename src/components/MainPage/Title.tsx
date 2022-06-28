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

const Title: React.FC = () => {
  return (
    <DivTitle>
        {data.title}
    </DivTitle>
  );
}

export default Title;
