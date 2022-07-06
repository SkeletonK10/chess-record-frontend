import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled'

import { URL, text, palette } from '../data'

const Header = styled.div`
  width: 98%;
  height: 5%;
  padding-left: 2%;
  
  display: flex;
  align-items: center;
  
  background-color: ${palette.wood};
`;

const HeaderTitle = styled.div`
  height: 100%;
  
  cursor: pointer;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: ${palette.wood};
  color: ${palette.ivory};
  font-size: 1.4rem;
`;

const Comp: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Header>
      <HeaderTitle onClick={() => navigate(URL.main)}>
        {text.main.title}
      </HeaderTitle>
    </Header>
  );
}

export default Comp;
