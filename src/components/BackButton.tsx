import React from 'react';
import styled from '@emotion/styled';

import { palette } from '../data';

const BackButtonStyle = styled.div`
  width: 35%;
  height: 10%;

  margin-top: 3%;
  margin-bottom: 3%;

  display: flex;
  justify-content: center;
  cursor: pointer;

  border: 3px solid ${palette.wood};
  outline: 0;
  font-size: 1.2rem;
`;

const Comp: React.FC = () => {
  return (
    <BackButtonStyle onClick={() => window.history.back()}>
      뒤로
    </BackButtonStyle>
  );
}

export default Comp;
