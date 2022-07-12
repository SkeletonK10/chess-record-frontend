import React from 'react';

import Page from '../../Page';
import Title from './Title';
import UserAddForm from './UserAddForm';

const Comp: React.FC = () => {
  return (
    <Page>
      <Title />
      <UserAddForm />
    </Page>
  );
}

export default Comp;
