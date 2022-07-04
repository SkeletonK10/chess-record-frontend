import React from 'react';
import { useNavigate } from 'react-router-dom';
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

const TDStyle = styled.td`
  border: 3px solid ${palette.wood};
`;

const LinkButton = styled.div`
  display: flex;
  justify-content: center;
  
  cursor: pointer;
`;

const Comp: React.FC = () => {
  const navigate = useNavigate();
  //const rows = 'GET backend/game/'
  const rows: Array<SmallGameView> = [
    {
      id: 6,
      createdAt: new Date(2021, 11, 6),
      white: "Carlsen",
      black: "Nepomniachtchi",
      result: "1-0",
    },
    
    {
      id: 7,
      createdAt: new Date(2021, 11, 7),
      white: "Nepomniachtchi",
      black: "Carlsen",
      result: "1/2-1/2",
    }
  ]
  const isEmpty = !rows;
  
  const Comps = rows.map((row: SmallGameView) => {
    const offset = new Date().getTimezoneOffset() * 60000;
    const createdAt = new Date(row.createdAt.getTime() - offset);  
    return (
      <tr>
        <TDStyle>{createdAt.toISOString().slice(0, 10)}</TDStyle>
        <TDStyle>{row.white}</TDStyle>
        <TDStyle>{row.black}</TDStyle>
        <TDStyle>{row.result}</TDStyle>
        <TDStyle><LinkButton onClick={() => navigate(`/game/${row.id}`)}>링크</LinkButton></TDStyle>
      </tr>
    );
  });
  
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
          {Comps}
        </TableStyle>
      )}
    </ListDivStyle>
  );
}

export default Comp;
