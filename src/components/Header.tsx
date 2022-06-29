import React from 'react';
import styled from '@emotion/styled'

import { text, palette } from '../data'

const Header = styled.div`
  width: 98%;
  height: 5%;
  padding-left: 2%;
  
  display: flex;
  align-items: center;
  
  font-size: 1.4rem;
  color: ${palette.ivory};
  
  background-color: ${palette.wood};
`;

const Comp: React.FC = () => {
  return (
    <Header>
        {text.title}
    </Header>
  );
}

export default Comp;
