import React from 'react';
import styled from '@emotion/styled'

import data from '../data'

const DivMainTitle = styled.div`
  width: 100%;
  height: 25%;
  
  display: flex;
  justify-content: center;
  align-items: flex-end;
  
  font-size: 60px;
  color: #8c531b;
`;

const MainTitle: React.FC = () => {
  return (
    <DivMainTitle>
        {data.title}
    </DivMainTitle>
  );
}

export default MainTitle;
