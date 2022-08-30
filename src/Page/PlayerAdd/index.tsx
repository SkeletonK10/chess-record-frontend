import React from 'react';

import Page from '../../components/Page';
import Title from './Title';
import PlayerAddForm from './PlayerAddForm';

const Comp: React.FC = () => {
  return (
    <Page>
      <Title />
      <PlayerAddForm />
    </Page>
  );
}

export default Comp;
