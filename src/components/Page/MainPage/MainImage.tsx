import React from 'react';
import styled from '@emotion/styled'

const MainImage = styled.img`
  width: 80%;
  height: 30%;
  margin-top: 4%;
  margin-bottom: 2%;
  object-fit: contain;
`;

const Comp: React.FC = () => {
  return (
    <MainImage src="img/main_image.jpg" alt="Chess: Main Image" />
  );
}

export default Comp;
