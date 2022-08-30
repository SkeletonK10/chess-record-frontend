import React from 'react';

import Page from '../../components/Page';
import Title from './Title';
import BackButton from '../../components/BackButton';

const Comp: React.FC = () => {
  return (
    <Page>
      <Title />
      <BackButton />
    </Page>
  );
}

export default Comp;
