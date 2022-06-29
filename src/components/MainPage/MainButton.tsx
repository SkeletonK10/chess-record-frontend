import React from 'react';
import styled from '@emotion/styled'

const MainButton = styled.button`
  width: 100%;
  height: 30%;
  margin-top: 4%;
  margin-bottom: 2%;
  object-fit: contain;
`;

const Comp: React.FC = () => {
  return (
    <MainButton />
  );
}

export default Comp;
