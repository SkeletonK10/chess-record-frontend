import React from 'react';

import PageStyle from '../../PageStyle';

import Header from '../../Header'
import Title from './Title'
import GameAddForm from './GameAddForm';

const Comp: React.FC = () => {
  return (
    <PageStyle>
      <Header />
      <Title />
      <GameAddForm />
    </PageStyle>
  );
}

export default Comp;
