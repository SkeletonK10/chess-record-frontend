import React from 'react';

import Page from '../../components/Page';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';

import { text } from '../../data';

const Comp: React.FC = () => {
  return (
    <Page>
      <Title
        title={text.notFound.title}
        subTitle={text.notFound.subTitle}
      />
      <BackButton />
    </Page>
  );
}

export default Comp;
