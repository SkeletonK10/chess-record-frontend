import React from 'react';

import Page from '../../components/Page';
import Title from '../../components/Title';
import PlayerAddForm from './PlayerAddForm';

import { text } from '../../data';

const Comp: React.FC = () => {
  return (
    <Page>
      <Title
        title={text.playerAdd.title}
        subTitle={text.playerAdd.subTitle}
      />
      <PlayerAddForm />
    </Page>
  );
}

export default Comp;
