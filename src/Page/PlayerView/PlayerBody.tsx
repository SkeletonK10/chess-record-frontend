import React from 'react';
import styled from '@emotion/styled';

import { palette } from '../../data';
import { GameList, PlayerInfo } from '../../data/types';

import List from './List';

interface PlayerBodyProps {
  player: PlayerInfo;
  gameList: GameList;
}

interface InfoRowProps {
  index: string;
  value: string | number;
}

const PlayerBodyStyle = styled.div`
  width: 100%;
  margin-top: 3%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  font-size: 1.5rem;
`;

const TableStyle = styled.table`
  width: 90%;
  
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
  
  padding: 4px;
  
  font-weight: 600;
`;

const TableContentStyle = styled.td`
  width: 70%;
  
  padding: 4px;
`;

const InfoRow: React.FC<InfoRowProps> = (props: InfoRowProps) => {
  return (
    <TRStyle>
      <TableIndexStyle>{props.index}</TableIndexStyle>
      <TableContentStyle>{props.value}</TableContentStyle>
    </TRStyle>
  );
}

const Comp: React.FC<PlayerBodyProps> = ({ player, gameList }: PlayerBodyProps) => {
  const summary = gameList.summary;
  return (
    <PlayerBodyStyle>
      <TableStyle>
        <tbody>
          <InfoRow index='이름' value={player.name} />
          <InfoRow index='아이디' value={player.userid} />
          <InfoRow index='현재 레이팅' value={player.rating} />
          <InfoRow index='전적' value={`${summary.total}전 ${summary.win}승 ${summary.draw}무 ${summary.lose}패`} />
          <InfoRow index='승률' value={summary.winRate} />
        </tbody>
      </TableStyle>
      <List list={gameList.list} />
    </PlayerBodyStyle>
  );
}

export default Comp;
