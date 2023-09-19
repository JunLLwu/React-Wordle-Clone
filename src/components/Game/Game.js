import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';
import Keyboard from '../Keyboard/Keyboard';
import GuessResults from '../GuessResults';
import LoseBanner from '../LoseBanner';
import WinBanner from '../WinBanner';

const defAlphabet = {
  A: '',
  B: '',
  C: '',
  D: '',
  E: '',
  F: '',
  G: '',
  H: '',
  I: '',
  J: '',
  K: '',
  L: '',
  M: '',
  N: '',
  O: '',
  P: '',
  Q: '',
  R: '',
  S: '',
  T: '',
  U: '',
  V: '',
  W: '',
  X: '',
  Y: '',
  Z: '',
}

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState(0);
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [letterList, setLetterList] = React.useState(defAlphabet);

  console.info({ answer });

  const handleRestart = () => {
    const newAnswer = sample(WORDS);

    setGuessList([]);
    setGameStatus(0);
    setAnswer(newAnswer);
    setLetterList(defAlphabet);
  }

  return (
    <>
      <GuessResults guessList={guessList} answer={answer} />
      {
        !gameStatus ? 
          <>
            <GuessInput 
              guessList={guessList}
              setGuessList={setGuessList}
              answer={answer}
              setGameStatus={setGameStatus}
              letterList={letterList}
              setLetterList={setLetterList}
            />
            <Keyboard letterList={letterList}/>
          </>
          :
          (answer === guessList[guessList.length - 1]) ?
            <WinBanner numGuesses={guessList.length} handleRestart={handleRestart} /> :
            <LoseBanner answer={answer} handleRestart={handleRestart} />
      }
    </>
  )
}

export default Game;
