import React from 'react';

import Guess from '../Guess'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function GuessResults({ guessList, answer }) {
  let arr = range(NUM_OF_GUESSES_ALLOWED);

  return <div className='guess-results'>
    {
      arr.map((i) => {
        return <Guess key={Math.random()} guess={guessList[i]} answer={answer}/>
      })
    }
  </div>;
}

export default GuessResults;
