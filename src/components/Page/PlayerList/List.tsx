import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { MdReadMore } from 'react-icons/md';

import { URL, text, palette } from "../../../data";
import { PlayerListEntry } from "../../../data/types";

interface ListProps {
  page?: string;
}

const ListDivStyle = styled.div`
  width: 100%;
  
  margin-top: 4%;
  
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
`;

const Comp: React.FC<ListProps> = (props: ListProps) => {
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);
  const loadList = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/playerlist/`);
    setRows(response.data);
  }
  
  useEffect(() => {
    loadList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isEmpty = !rows;
  
  const Comps = isEmpty ?
  undefined :
  rows.map((row: PlayerListEntry, index: number) => {
    return (
      <tr key={index}>
        <TDStyle>{row.name}</TDStyle>
        <TDStyle>{row.userid}</TDStyle>
        <TDStyle>{row.rating}</TDStyle>
        <TDStyle>
          <LinkButton onClick={() => navigate(`${URL.playerView}${row.id}`)}>
            <MdReadMore /><SubStyle>{row.id}</SubStyle>
          </LinkButton>
        </TDStyle>
      </tr>
    );
  });
  
  return (
    <ListDivStyle>
      {isEmpty ? (text.playerList.noRecord) : (
        <TableStyle>
          <thead>
            <tr>
              <THStyle>이름</THStyle>
              <THStyle>아이디</THStyle>
              <THStyle>레이팅</THStyle>
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
