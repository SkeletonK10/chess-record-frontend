export const URL = {
  main: "/",
  gameAdd: "/newgame/",
  gameList: "/gamelist/",
  gameView: "/game/"
}

export const text = {
  main: {
    title: '체스 데이터 저장소',
    subTitle: 'KUAAA의 체스 경기에 대한 데이터를 저장합니다.',
  },
  
  notFound: {
    title: '404 Not Found',
    subTitle: '존재하지 않는 페이지입니다.'
  },
  
  gameView: (id?: number) => {
    if (typeof id === "undefined") id = -1;
    return {
      title: `${id}번 경기`,
      subTitle: `${id}번 경기에 대한 세부 정보입니다.`,
      noRecord: '기록된 경기 결과가 없습니다!',
    }
  },
  
  gameAdd: {
    title: '경기 기록 추가',
    subTitle: '새로운 경기를 데이터베이스에 추가합니다.',
    notationSample: '1. e4 e5 2. Nf3 Nf6 과 같은 식으로 적어주세요.',
  },
  
  gameList: {
    title: '경기 기록 조회',
    subTitle: '기록된 경기 목록을 조회합니다.',
    noRecord: '기록된 경기 결과가 없습니다!',
  },
  
  backendURL: "http://localhost:8000",
};

export const palette = {
  ivory: '#ece6cc',
  ivoryHover: '#fff9dc',
  ivoryActive: '#c2bda4',
  
  wood: '#8c531b',
  woodHover: '#bb6f24',
  woodActive: '#704316',
};
