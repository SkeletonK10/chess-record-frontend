import React from 'react';
import styled from '@emotion/styled'

import data from '../data'

const DivHeader = styled.div`
  width: 100%;
  height: 5%;
  padding-left: 3%;
  
  display: flex;
  align-items: center;
  
  font-size: 20px;
  color: #ece6cc;
  
  background-color: #8c531b;
`;

const Header: React.FC = () => {
  return (
    <DivHeader>
        {data.title}
    </DivHeader>
  );
}

export default Header;
