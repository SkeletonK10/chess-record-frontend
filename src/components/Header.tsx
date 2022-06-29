import React from 'react';
import styled from '@emotion/styled'

import data from '../data'

const Header = styled.div`
  width: 100%;
  height: 5%;
  padding-left: 2%;
  
  display: flex;
  align-items: center;
  
  font-size: 1.4rem;
  color: #ece6cc;
  
  background-color: #8c531b;
`;

const Comp: React.FC = () => {
  return (
    <Header>
        {data.title}
    </Header>
  );
}

export default Comp;
