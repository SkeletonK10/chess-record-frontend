import React from 'react';
import styled from '@emotion/styled'

import { text } from '../../../data'

interface TitleProps {
  id?: number;
}

const Title = styled.div`
  width: 100%;
  margin-top: 3%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  
  font-size: 2.7rem;
`;

const SubTitle = styled.div`
  width: 100%;
  margin-top: 2%;
  
  display: flex;
  justify-content: center;
  
  font-size: 1.3rem;
`;

const Comp: React.FC<TitleProps> = (props) => {
  return (
    <div>
      <Title>
        {text.gameView(props.id).title}
      </Title>
      <SubTitle>
        {text.gameView(props.id).subTitle}
      </SubTitle>
    </div>
  );
}

export default Comp;
