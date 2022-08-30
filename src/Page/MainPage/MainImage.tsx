import React from 'react';
import styled from '@emotion/styled'

import MainImage from './main_image.jpg';

const MainImageStyle = styled.img`
  width: 80%;
  height: 30%;
  margin-top: 4%;
  margin-bottom: 2%;
  object-fit: contain;
`;

const Comp: React.FC = () => {
  return (
    <MainImageStyle src={MainImage} alt="Chess: Main Image" />
  );
}

export default Comp;
