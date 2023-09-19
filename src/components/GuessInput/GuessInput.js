import React from 'react';

import { checkGuess } from '../../game-helpers';

function GuessInput({ 
  guessList, setGuessList, 
  answer, setGameStatus,
  letterList, setLetterList
}) {

  const [guess, setGuess] = React.useState('');
  
  return (
    <form 
      className='guess-input-wrapper'
      onSubmit={event => {
        event.preventDefault();

        if(guess.length === 5) {
          let nextGuessList = [...guessList];
          let nextLetterList = { ...letterList };
          nextGuessList.push(guess);

          checkGuess(guess, answer).forEach(row => {
            nextLetterList = { 
                ...nextLetterList,
                [row.letter]: row.status
              }
          })

          setLetterList(nextLetterList);
          setGuessList(nextGuessList);
          setGuess('');

          if((guess === answer) || guessList.length === 5) {
            setGameStatus(true);
          }
        }
      }}
    >
      <label htmlFor='guess-input'>
        Enter guess:
      </label>
      <input
        id='guess-input'
        type='text'
        maxLength='5'
        value={guess}
        onChange={event => {
          if(/^[a-zA-Z]*$/.test(event.target.value)) (
            setGuess(event.target.value.toUpperCase())
          )
        }}
      />
    </form>
  )
}

export default GuessInput;
