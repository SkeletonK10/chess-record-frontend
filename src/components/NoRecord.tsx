import React from 'react';
import styled from '@emotion/styled'

interface NoRecordProps {
  message: string;
}

const NoRecordContainerStyle = styled.div`
  width: 100%;
  margin-top: 5%;
  
  display: flex;
  justify-content: center;
  
  font-size: 1.4rem;
`;

const Comp: React.FC<NoRecordProps> = ({ message }) => {
  return (
    <NoRecordContainerStyle>
      {message}
    </NoRecordContainerStyle>
  );
}

export default Comp;
