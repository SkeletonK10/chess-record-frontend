import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { MdReadMore } from 'react-icons/md';

import { URL, palette } from "../../data";
import { GameListEntry } from "../../data/types";

interface PlayerGameListProps {
  list: Array<GameListEntry>;
}

const ListDivStyle = styled.div`
  width: 100%;
  
  margin-top: 4%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  font-size: 1.2rem;
`;

const ListTitleStyle = styled.div`
  margin-bottom: 4%;
  
  font-weight: bold;
`

const TableStyle = styled.table`
  width: 95%;
  
  tr td {
    border-bottom: 2px solid ${palette.wood};
  }
  
  tr:last-child td {
    border-bottom: none;
  }
  border-collapse: collapse;
`;

const THStyle = styled.th`
  font-weight: bold;
`;

const TDStyle = styled.td`
  padding: 4px;
  
  text-align: center;
`;

const LinkButton = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const PageControllerStyle = styled.div`
  margin-top: 4%;
  
  display: flex;
  justify-content: center;
`

const Comp: React.FC<PlayerGameListProps> = ({ list }) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [endPage, setEndPage] = useState(0);
  
  const limit: number = 5;
  const offset: number = limit * (page - 1);
  
  useEffect(() => {
    if (list) {
      setEndPage(Math.ceil(list.length / limit));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const Comps = list.slice(offset, offset + limit).map((row: GameListEntry, index: number) => {
    return (
      <tr key={index}>
        <TDStyle>{row.white}</TDStyle>
        <TDStyle>{row.black}</TDStyle>
        <TDStyle>{row.result}</TDStyle>
        <TDStyle>
          <LinkButton onClick={() => navigate(`${URL.gameView}${row.id}`)}>
            <MdReadMore />
          </LinkButton>
        </TDStyle>
      </tr>
    );
  });
  
  return (
    <ListDivStyle>
      <ListTitleStyle>기록된 경기 목록</ListTitleStyle>
      <TableStyle>
        <thead>
          <tr>
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
      <PageControllerStyle>
        {page <= 1 ? (<></>) : (
          <LinkButton onClick={() => setPage(page - 1)}>
            &lt;
          </LinkButton>
        )}
        <b>&nbsp;&nbsp;{page}&nbsp;&nbsp;</b>
        {page >= endPage ? (<></>) : (
          <LinkButton onClick={() => setPage(page + 1)}>
            &gt;
          </LinkButton>
        )}
      </PageControllerStyle>
    </ListDivStyle>
  );
}

export default Comp;
