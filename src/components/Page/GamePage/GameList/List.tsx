import React from 'react';
import styled from '@emotion/styled';

import { text } from "../../../../data";

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
`;

const Comp: React.FC = () => {
  let empty = true;
  return (
    <ListDivStyle>
      {empty ? (text.gameList.noRecord) : (
        <TableStyle>
        </TableStyle>
      )}
    </ListDivStyle>
  );
}

export default Comp;
