import React from 'react';
import { useParams } from 'react-router-dom';
import Page from '../../Page';
import Title from './Title';
import List from './List';

const Comp: React.FC = () => {
  const { page } = useParams();
  return (
    <Page>
      <Title />
      <List page={page} />
    </Page>
  );
}

export default Comp;
