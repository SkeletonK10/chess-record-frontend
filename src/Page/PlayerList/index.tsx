import React from 'react';

import Page from '../../components/Page';
import Title from '../../components/Title';
import List from './List';
import BackButton from '../../components/BackButton';

import { text } from '../../data';

const Comp: React.FC = () => {
  return (
    <Page>
      <Title
        title={text.playerList.title}
        subTitle={text.playerList.subTitle}
      />
      <List />
      <BackButton />
    </Page>
  );
}

export default Comp;
