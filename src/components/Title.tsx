import React from 'react';
import styled from '@emotion/styled'

interface TitleProps {
  title: string;
  subTitle: string;
}

const Title = styled.div`
  width: 100%;
  margin-top: 3%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  
  font-size: 3rem;
  font-weight: bold;
`;

const SubTitle = styled.div`
  width: 100%;
  margin-top: 2%;
  
  display: flex;
  justify-content: center;
  
  font-size: 1.3rem;
`;

const Comp: React.FC<TitleProps> = ({ title, subTitle }) => {
  return (
    <div>
      <Title>
        {title}
      </Title>
      <SubTitle>
        {subTitle}
      </SubTitle>
    </div>
  );
}

export default Comp;
