import React from 'react';
import styled from '@emotion/styled';

import { UserInfo } from '.';
import { palette } from '../../../data';

interface GameHeaderProps {
  white: UserInfo;
  black: UserInfo;
  result: string;
};

interface ProfileProps {
  side: string;
  value: UserInfo;
}

const GameHeaderStyle = styled.div`
  width: 50%;
  height: 10%;
  margin-top: 2%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProfileStyle = styled.div`
  width: 40%;
  height: 100%;
  
  border-left: 2px solid ${palette.wood};
  border-right: 2px solid ${palette.wood};
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  font-size: 2rem;
`;

const ResultStyle = styled.div`
  width: 30%;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  font-size: 2rem;
  font-weight: bold;
`;

const SideStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  font-size: 2rem;
  font-weight: bold;
`;

const NameStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  font-size: 2rem;
`;

const RatingStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  font-size: 1.5rem;
`;

const Profile: React.FC<ProfileProps> = (props: ProfileProps) => {
  const profile = props.value;
  return (
    <ProfileStyle>
      <SideStyle>{props.side}</SideStyle>
      <NameStyle>{profile.name}</NameStyle>
      <RatingStyle>{profile.rating}</RatingStyle>
    </ProfileStyle>
  );
}

const Comp: React.FC<GameHeaderProps> = (props: GameHeaderProps) => {
  const { white, black, result } = props;
  return (
    <GameHeaderStyle>
      <Profile side="백" value={white} />
      <ResultStyle>{result}</ResultStyle>
      <Profile side="흑" value={black} />
    </GameHeaderStyle>
  );
}

export default Comp;
