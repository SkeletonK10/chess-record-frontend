export const URL = {
  main: "/",
  gameAdd: "/newgame/",
  gameList: "/gamelist/",
  gameView: "/game/",
  playerAdd: "/newplayer/",
  playerList: "/playerlist/",
  playerView: "/player/",
}

export const text = {
  main: {
    title: '체스 데이터 저장소',
    subTitle: 'KUAAA의 체스 경기 데이터를 저장합니다.',
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
      noNotation: '기록된 기보가 없습니다!',
      noDescription: '기록된 정보가 없습니다!',
    }
  },
  
  gameAdd: {
    title: '경기 기록 추가',
    subTitle: '새로운 경기를 데이터베이스에 추가합니다.',
    timeDescription: '시간 제한 없이 경기한 경우 0+0으로 적어주세요.',
    notationSample: '예시) 1. e4 e5 2. Nf3 Nf6 ... 8. c3 d5 0-1',
    descriptionSample: '간단한 설명 등을 적어주세요!',
    success: '기록에 성공하였습니다!',
    error: '결과 기록에 실패했습니다!\n콘솔의 에러 메시지를 확인해 주세요.',
  },
  
  gameList: {
    title: '경기 기록 조회',
    subTitle: '기록된 경기 목록을 조회합니다.',
    noRecord: '기록된 경기 결과가 없습니다!',
  },
  
  playerAdd: {
    title: '플레이어 등록',
    subTitle: '새로운 유저를 데이터베이스에 등록합니다.',
    nameGuide: '1~6자의 한글',
    useridGuide: '3~16자의 영문 및 숫자',
    success: '기록에 성공하였습니다!',
    error: '결과 기록에 실패했습니다!\n콘솔의 에러 메시지를 확인해 주세요.',
  },
  
  playerList: {
    title: '플레이어 조회',
    subTitle: '등록된 유저 목록을 조회합니다.',
    noRecord: '등록된 유저가 없습니다!',
    
  },
  
  playerView: {
    title: '플레이어 상세',
    subTitle: `플레이어의 세부 정보를 조회합니다.`,
    noRecord: '등록된 해당 유저가 없습니다!',
  },
};

export const palette = {
  ivory: '#ece6cc',
  ivoryHover: '#fff9dc',
  ivoryActive: '#c2bda4',
  
  wood: '#8c531b',
  woodHover: '#bb6f24',
  woodActive: '#704316',
};

export const penaltyFEN = {
  normal: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
  white: {
    queen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNB1KBNR w KQkq - 0 1",
    aRook: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/1NBQKBNR w Kkq - 0 1",
    hRook: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBN1 w Qkq - 0 1",
    bKnight: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/R1BQKBNR w KQkq - 0 1",
    gKnight: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKB1R w KQkq - 0 1",
    cBishop: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RN1QKBNR w KQkq - 0 1",
    fBishop: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQK1NR w KQkq - 0 1",
  },
  black: {
    queen: "rnb1kbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
    aRook: "1nbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQk - 0 1",
    hRook: "rnbqkbn1/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQq - 0 1",
    bKnight: "r1bqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
    gKnight: "rnbqkb1r/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
    cBishop: "rn1qkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
    fBishop: "rnbqk1nr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
  }
}