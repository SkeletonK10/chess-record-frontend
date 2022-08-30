import React from 'react';

import Page from '../../components/Page';
import Title from '../../components/Title'
import GameAddForm from './GameAddForm';

import { text } from '../../data';

const Comp: React.FC = () => {
  return (
    <Page>
      <Title
        title={text.gameAdd.title}
        subTitle={text.gameAdd.subTitle}
      />
      <GameAddForm />
    </Page>
  );
}

export default Comp;
