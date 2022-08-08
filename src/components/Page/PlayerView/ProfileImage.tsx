import React from 'react';
import styled from '@emotion/styled'

import DefaultProfileImage from './default_profile.png';

const ProfileImage = styled.img`
  width: 50%;
  height: 20%;
  margin-top: 2%;
  margin-bottom: 2%;
  object-fit: contain;
`;

const Comp: React.FC = () => {
  return (
    <ProfileImage src={DefaultProfileImage} alt="Chess: defult profile" />
  );
}

export default Comp;
