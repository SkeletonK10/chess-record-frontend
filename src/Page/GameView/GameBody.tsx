import React from 'react';
import styled from '@emotion/styled';

import { text, palette } from '../../data';
import { GameInfo } from '../../data/types';

interface GameBodyProps {
  value: GameInfo;
}

interface InfoRowProps {
  index: string;
  value: string | number;
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
  width: 85%;
  
  tr td {
    border-bottom: 2px solid ${palette.wood};
  }
  
  tr:last-child td {
    border-bottom: none;
  }
  
  font-size: 1.2rem;
`;

const TRStyle = styled.tr`
`;

const TableIndexStyle = styled.td`
  width: 30%;
`;

const TableContentStyle = styled.td`
  width: 70%;
`;

const TextareaStyle = styled.textarea`
  width: 90%;
  height: 100px;
  resize: none;

  margin-top: 1.5%;
  margin-bottom: 1.5%;

  border: 3px solid ${palette.wood};
  outline: 0;
  font-size: 1.2rem;
`;

const IncorrectNotationStyle = styled.div`
  width: 85%;
  
  background-color: ${palette.ivory}
  
  position: absolute;
  
  right: 100px;
  top: 30px;
  
  opacity: 1;
  
  border: 2px solid ${palette.wood};
  font-size: 1.2rem;
`;

const InfoRow: React.FC<InfoRowProps> = (props: InfoRowProps) => {
  return (
    <TRStyle>
      <TableIndexStyle>{props.index}</TableIndexStyle>
      <TableContentStyle>{props.value}</TableContentStyle>
    </TRStyle>
  );
}

const Comp: React.FC<GameBodyProps> = (props: GameBodyProps) => {
  const game = props.value;
  
  const isNotationCorrect = true; // game.isNotationCorrect;
  
  return (
    <GameBodyStyle>
      <TableStyle>
        <tbody>
          <InfoRow index='경기 일자' value={game.playedat} />
          <InfoRow index='기록 일자' value={game.createdat} />
          <InfoRow index='시간 제한' value={`${game.originaltime || '∞'} + ${game.incrementtime}`} />
        </tbody>
      </TableStyle>
      
      <b>기보</b>
      {isNotationCorrect ? (<></>) : (
        <IncorrectNotationStyle>
          {text.gameView.incorrectNotation}
        </IncorrectNotationStyle>
      )}
      
      <TextareaStyle
        readOnly={true}
        value={game.notation}
        placeholder={text.gameView.noNotation}
      />
      
      <b>간단한 설명</b>
      <TextareaStyle
        readOnly={true}
        value={game.description}
        placeholder={text.gameView.noDescription}
      />
      
    </GameBodyStyle>
  );
}

export default Comp;
