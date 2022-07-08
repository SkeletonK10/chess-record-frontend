import React from 'react';
import styled from '@emotion/styled';

import Header from './Header';

const PageStyle = styled.div`
  width: 375px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type PageProps = { children: React.ReactNode };

const Page: React.FC<PageProps> = ({ children }: PageProps) => {
  return (
    <PageStyle>
      <Header />
      {children}
    </PageStyle>
  );
}

export default Page;
