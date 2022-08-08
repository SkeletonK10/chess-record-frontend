import React from 'react';
import styled from '@emotion/styled';

import { palette } from '../../../data';
import { PlayerInfo } from '../../../data/types';

interface PlayerBodyProps {
  value: PlayerInfo;
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

const InfoRow: React.FC<InfoRowProps> = (props: InfoRowProps) => {
  return (
    <TRStyle>
      <TableIndexStyle>{props.index}</TableIndexStyle>
      <TableContentStyle>{props.value}</TableContentStyle>
    </TRStyle>
  );
}

const Comp: React.FC<PlayerBodyProps> = (props: PlayerBodyProps) => {
  const player = props.value;
  
  return (
    <PlayerBodyStyle>
      <TableStyle>
        <tbody>
          <InfoRow index='이름' value={player.name} />
          <InfoRow index='아이디' value={player.userid} />
          <InfoRow index='현재 레이팅' value={player.rating} />
        </tbody>
      </TableStyle>
    </PlayerBodyStyle>
  );
}

export default Comp;
