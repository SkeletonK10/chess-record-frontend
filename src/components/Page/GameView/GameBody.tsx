import React from 'react';
import styled from '@emotion/styled';

import { GameInfo } from '.';
import { palette } from '../../../data';

interface GameBodyProps {
  value: GameInfo;
}

const GameBodyStyle = styled.div`
  width: 100%;
  margin-top: 3%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  font-size: 1.5rem;
`;

const TableStyle = styled.table`
`;

const NotationStyle = styled.textarea`
  width: 50%;
  resize: none;

  margin-top: 1%;
  margin-bottom: 1%;

  border: 3px solid ${palette.wood};
  outline: 0;
  font-size: 1.2rem;
`;

const Comp: React.FC<GameBodyProps> = (props: GameBodyProps) => {
  const game = props.value;
  return (
    <GameBodyStyle>
      <TableStyle></TableStyle>
      <b>기보</b>
      <NotationStyle readOnly={true} value={game.notation}></NotationStyle>
    </GameBodyStyle>
  );
}

export default Comp;
