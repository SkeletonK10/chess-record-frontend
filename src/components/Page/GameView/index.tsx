import React from 'react';
import { useParams } from 'react-router-dom';

import Page from '../../Page';
import Title from './Title';

interface BigGameView {
  id: number;
  createdAt: Date;
  white: string;
  black: string;
  result: string;
  notation?: string;
}

const Comp: React.FC = () => {
  const { id } = useParams();
  const rows: Array<BigGameView> = [
    {
      id: 6,
      createdAt: new Date(2021, 11, 6),
      white: "Magnus",
      black: "Ian",
      result: "백 승",
    },
    
    {
      id: 7,
      createdAt: new Date(2021, 11, 7),
      white: "Ian",
      black: "Magnus",
      result: "무승부",
      notation:
      `1. e4 e5 1/2-1/2`,
    }
  ]
  return (
    <Page>
      <Title />
    </Page>
  );
}

export default Comp;
