import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { MdReadMore } from 'react-icons/md';

import { URL, text, palette } from "../../../data";
import { GameListEntry } from "../../../data/types";

interface ListProps {
  page?: string;
}

const ListDivStyle = styled.div`
  width: 100%;
  
  margin-top: 2%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  font-size: 1.2rem;
`;

const TableStyle = styled.table`
  width: 95%;
  
  border: 3px solid ${palette.wood};
  border-collapse: collapse;
`;

const THStyle = styled.th`
  border: 3px solid ${palette.wood};
  font-weight: bold;
`;

const TDStyle = styled.td`
  padding-left: 4px;
  padding-right: 4px;
  
  text-align: center;
  
  border: 3px solid ${palette.wood};
`;

const LinkButton = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const SubStyle = styled.div`
  vertical-align: -0.5em;
  font-size: 0.5em;
  
`

const Comp: React.FC<ListProps> = (props: ListProps) => {
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);
  
  const page: string = props.page || '1';
  const loadList = async () => {
    const response = await axios.get(`${text.backendURL}/gamelist/${page}`);
    setRows(response.data);
  }
  
  useEffect(() => {
    loadList();
  });
  // const rows: Array<GameListEntry> = [
  //   {
  //     id: 1,
  //     createdAt: new Date(Date.now()),
  //     white: "Test1",
  //     black: "Test2",
  //     result: "흑 승",
  //   },
    
  //   {
  //     id: 6,
  //     createdAt: new Date(2021, 11, 6),
  //     white: "Carlsen",
  //     black: "Nepomniachtchi",
  //     result: "백 승",
  //   },
    
  //   {
  //     id: 7,
  //     createdAt: new Date(2021, 11, 7),
  //     white: "Nepomniachtchi",
  //     black: "Carlsen",
  //     result: "무승부",
  //   }
  // ];
  const isEmpty = !rows;
  
  const Comps = isEmpty ?
  undefined :
  rows.map((row: GameListEntry, index: number) => {
    return (
      <tr key={index}>
        <TDStyle>{row.createdat}</TDStyle>
        <TDStyle>{row.white}</TDStyle>
        <TDStyle>{row.black}</TDStyle>
        <TDStyle>{row.result}</TDStyle>
        <TDStyle>
          <LinkButton onClick={() => navigate(`${URL.gameView}${row.id}`)}>
            <MdReadMore /><SubStyle>{row.id}</SubStyle>
          </LinkButton>
        </TDStyle>
      </tr>
    );
  });
  
  return (
    <ListDivStyle>
      {isEmpty ? (text.gameList.noRecord) : (
        <TableStyle>
          <thead>
            <tr>
              <THStyle>기록 일자</THStyle>
              <THStyle>백 선수</THStyle>
              <THStyle>흑 선수</THStyle>
              <THStyle>결과</THStyle>
              <THStyle>상세</THStyle>
            </tr>
          </thead>
          <tbody>
            {Comps}
          </tbody>
        </TableStyle>
      )}
    </ListDivStyle>
  );
}

export default Comp;
