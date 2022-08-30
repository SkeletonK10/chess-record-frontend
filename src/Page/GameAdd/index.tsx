import React from 'react';

import Page from '../../components/Page';
import Title from './Title'
import GameAddForm from './GameAddForm';

const Comp: React.FC = () => {
  return (
    <Page>
      <Title />
      <GameAddForm />
    </Page>
  );
}

export default Comp;
