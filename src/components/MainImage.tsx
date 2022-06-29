import React from 'react';
import styled from '@emotion/styled'

const ImgMainImage = styled.img`
  width: 100%;
  height: 30%;
  margin-top: 4%;
  margin-bottom: 2%;
  object-fit: contain;
`;

const MainImage: React.FC = () => {
  return (
    <ImgMainImage src="img/main_image.jpg" alt="Chess: Main Image" />
  );
}

export default MainImage;
