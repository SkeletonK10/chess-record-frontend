import React from 'react';
import { useParams } from 'react-router-dom';

import Page from '../../Page';
import Title from './Title';
import GameHeader from './GameHeader';
import GameBody from './GameBody';

export interface UserInfo {
  id: number;
  name: string;
  rating: number;
}

export interface GameInfo {
  id: number;
  createdAt: Date;
  white: UserInfo;
  black: UserInfo;
  result: string;
  notation?: string;
}

const Comp: React.FC = () => {
  const { id } = useParams();
  const row: GameInfo = {
    id: 6,
    createdAt: new Date(2021, 11, 6),
    white: {
      id: 1,
      name: "이규호",
      rating: 2864,
    },
    black: {
      id: 2,
      name: "이건우",
      rating: 2792,
    },
    result: "백 승",
    notation: 
    `1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. 0-0 Be7 6. Re1 b5 7. Bb3 0-0 8. c3 d5 0-1`
  };
  return (
    <Page>
      <Title id={Number(id)} />
      <GameHeader white={row.white} black={row.black} result={row.result} />
      <GameBody value={row} />
      
    </Page>
  );
}

export default Comp;
