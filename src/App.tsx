import React from 'react';
import styled from '@emotion/styled'

const DivApp = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  position: absolute;
  background-color: #ece6cc;
`;

const App: React.FC = () => {
  return (
    <DivApp>
        Chess Database for KUAAA
    </DivApp>
  );
}

export default App;
