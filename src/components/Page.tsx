import React from 'react';
import styled from '@emotion/styled';

import Header from './Header';

import { palette } from '../data';

const PageStyle = styled.div`
  width: 375px;
  
  background-color: ${palette.ivory};
  color: ${palette.wood};
  
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
