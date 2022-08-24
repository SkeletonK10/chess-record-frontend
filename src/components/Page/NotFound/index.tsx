import React from 'react';

import Page from '../../Page';
import Title from './Title';
import BackButton from '../../BackButton';

const Comp: React.FC = () => {
  return (
    <Page>
      <Title />
      <BackButton />
    </Page>
  );
}

export default Comp;
