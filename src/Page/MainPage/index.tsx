import React, { useEffect } from 'react';
import axios from 'axios';

import Page from '../../components/Page';
import MainImage from './MainImage'
import Title from '../../components/Title'
import MainButton from './MainButton'

import { URL, text } from '../../data';


const Comp: React.FC = () => {
  const connectionTest= async () => {
    await axios.get(`${process.env.REACT_APP_BACKEND_URL}/`);
  }
  useEffect(() => {
    connectionTest();
  }, []);
  return (
    <Page>
      <div style={{height: "40px"}} />
      <Title
        title={text.main.title}
        subTitle={text.main.subTitle}
      />
      <div style={{height: "40px"}} />
      <MainButton text={text.gameAdd.title} path={URL.gameAdd} />
      <div style={{height: "20px"}} />
      <MainButton text={text.gameList.title} path={URL.gameList} />
      <div style={{height: "20px"}} />
      <MainButton text={text.playerAdd.title} path={URL.playerAdd} />
      <div style={{height: "20px"}} />
      <MainButton text={text.playerList.title} path={URL.playerList}/>
    </Page>
  );
}

export default Comp;
