import React, { useState } from 'react';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';
import styled from '@emotion/styled';
import { Chess } from 'chess.js';
import { Chessboard, Pieces, Square } from 'react-chessboard';

import { text, palette } from '../../../data'
import { IGameInfo } from '../../../data/types';

interface NotationProps {
  register: UseFormRegister<IGameInfo>;
  setValue: UseFormSetValue<IGameInfo>;
}

const NotationStyle = styled.div`
  margin-top: 1.5%;
  margin-bottom: 1.5%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RadioStyle = styled.div`
  margin-top: 1.5%;
  margin-bottom: 1.5%;

  font-size: 1.2rem;
`;

const BorderStyle = styled.div`
  border: 25px solid ${palette.wood};
`;

const ButtonContainerStyle = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: space-around;
`;

const NotationBackStyle = styled.div`
  width: 20%;
  
  margin: 1.5%;
  border: 3px solid ${palette.wood};
  
  background-color: ${palette.ivory};
  
  cursor: pointer;
  
  &:hover {
    background-color: ${palette.ivoryHover};
  }
  
  &:active {
    background-color:${palette.ivoryActive};
  }
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextareaStyle = styled.textarea`
  width: 100%;
  height: 100px;
  resize: none;

  margin-top: 1.5%;
  margin-bottom: 1.5%;

  border: 3px solid ${palette.wood};
  outline: 0;
  font-size: 1.2rem;
`;

const Comp: React.FC<NotationProps> = (props: NotationProps) => {
  const [game, setGame] = useState(new Chess());
  const [notationType, setNotationType] = useState<number>(1);
  
  const { register, setValue } = props;
  
  const setRadio = (value: string) => {
    setNotationType(Number(value));
  }
  
  const initGame = () => {
    setValue("notation", '');
    setGame(new Chess());
  }
  
  const onDrop = (sourceSquare: Square, targetSquare: Square, piece: Pieces) => {
    const move = {
      from: sourceSquare,
      to: targetSquare,
    }
    const gameCopy = { ...game };
    if (gameCopy.move(move) !== null) {
      setGame(gameCopy);
      setValue("notation", game.pgn());
      return true;
    } else { return false; }
  }
  
  const notationBack = () => {
    const prevGame = new Chess();
    const moves = game.history();
    moves.pop();
    for (let i = 0; i < moves.length; i++) {
      prevGame.move(moves[i]);
    }
    setValue("notation", prevGame.pgn());
    setGame(prevGame);
  }
  
  return (
    <NotationStyle>
      <RadioStyle onChange={(e) => { initGame() }}>
        <input type="radio" name="notation" value="0" onChange={(e) => { setRadio(e.target.value) }} />없음 (비추천!)
        <input type="radio" name="notation" value="1" onChange={(e) => { setRadio(e.target.value) }} defaultChecked={true} />보드에 입력
        <input type="radio" name="notation" value="2" onChange={(e) => { setRadio(e.target.value) }} />직접 입력
      </RadioStyle>
      {notationType === 1 ?
        (
          <>
            <TextareaStyle {...register("notation")}
              readOnly={true}
            />
            <BorderStyle>
              <Chessboard
                boardWidth={300}
                position={game.fen()}
                onPieceDrop={onDrop}
              />
            </BorderStyle>
            <ButtonContainerStyle>
              <NotationBackStyle
                onClick={notationBack}>
                {'<-'}
                </NotationBackStyle>
            </ButtonContainerStyle>
          </>
        ) : undefined
      }
      {notationType === 2 ?
        (
          <TextareaStyle {...register("notation")}
            placeholder={text.gameAdd.notationSample}
          />
        ) : undefined
      }
    </NotationStyle>
  );
}

export default Comp;
