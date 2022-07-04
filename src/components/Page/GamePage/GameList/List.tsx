import React from 'react';
import styled from '@emotion/styled';

import { text, palette } from "../../../../data";

interface SmallGameView {
  id: number;
  createdAt: Date;
  white: string;
  black: string;
  result: string;
};

const ListDivStyle = styled.div`
  width: 100%;
  height: 70%;
  
  margin-top: 2%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  font-size: 1.5rem;
`;

const TableStyle = styled.table`
  width: 40%;
  
  border: 3px solid ${palette.wood};
  border-collapse: collapse;
`;

const THStyle = styled.th`
  border: 3px solid ${palette.wood};
  font-weight: bold;
`;

const Comp: React.FC = () => {
  //const rows = 'GET backend/game/'
  const rows: Array<SmallGameView> = [
    {
      id: 6,
      createdAt: new Date(2021, 12, 6),
      white: "Carlsen",
      black: "Nepomniachtchi",
      result: "1-0",
    },
    
    {
      id: 7,
      createdAt: new Date(2021, 12, 7),
      white: "Nepomniachtchi",
      black: "Carlsen",
      result: "1/2-1/2",
    }
  ]
  let isEmpty = !rows;
  return (
    <ListDivStyle>
      {isEmpty ? (text.gameList.noRecord) : (
        <TableStyle>
          <tr>
            <THStyle>기록 일자</THStyle>
            <THStyle>백 선수</THStyle>
            <THStyle>흑 선수</THStyle>
            <THStyle>결과</THStyle>
            <THStyle>상세</THStyle>
          </tr>
        </TableStyle>
      )}
    </ListDivStyle>
  );
}

export default Comp;
