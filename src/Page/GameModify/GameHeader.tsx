import React from 'react';
import styled from '@emotion/styled';

import { palette } from '../../data';
import { PlayerInfo } from '../../data/types';

interface GameHeaderProps {
  white: PlayerInfo;
  black: PlayerInfo;
  result: string;
  whiteratingdiff: number;
  blackratingdiff: number;
};

interface ProfileProps {
  side: string;
  value: PlayerInfo;
  ratingdiff: number;
}

const GameHeaderStyle = styled.div`
  width: 90%;
  height: 10%;
  margin-top: 2%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ProfileStyle = styled.div`
  width: 30%;
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

  font-size: 1.2rem;
`;

const Profile: React.FC<ProfileProps> = (props: ProfileProps) => {
  const profile = props.value;
  return (
    <ProfileStyle>
      <SideStyle>{props.side}</SideStyle>
      <NameStyle>{profile.name}</NameStyle>
      <RatingStyle>{`${profile.rating}${props.ratingdiff < 0 ? '-' : '+'}${Math.abs(props.ratingdiff)}`}</RatingStyle>
    </ProfileStyle>
  );
}

const Comp: React.FC<GameHeaderProps> = (props: GameHeaderProps) => {
  const {
    white,
    black,
    result,
    whiteratingdiff,
    blackratingdiff } = props;
  return (
    <GameHeaderStyle>
      <Profile side="백" value={white} ratingdiff={whiteratingdiff} />
      <ResultStyle>{result}</ResultStyle>
      <Profile side="흑" value={black} ratingdiff={blackratingdiff} />
    </GameHeaderStyle>
  );
}

export default Comp;
