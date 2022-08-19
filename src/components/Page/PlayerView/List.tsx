import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { MdReadMore } from 'react-icons/md';

import { URL, text, palette } from "../../../data";
import { GameListEntry } from "../../../data/types";

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
  
  const isEmpty = !list;
  
  const Comps = isEmpty ?
  undefined :
  list.slice(offset, offset + limit).map((row: GameListEntry, index: number) => {
    return (
      <tr key={index}>
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
      <ListTitleStyle>기록된 경기 목록</ListTitleStyle>
      {isEmpty ? (text.gameList.noRecord) : (
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
      )}
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
