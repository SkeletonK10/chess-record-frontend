import React from 'react';

import Page from '../../components/Page';
import Title from './Title';
import List from './List';
import BackButton from '../../components/BackButton';

const Comp: React.FC = () => {
  return (
    <Page>
      <Title />
      <List />
      <BackButton />
    </Page>
  );
}

export default Comp;
