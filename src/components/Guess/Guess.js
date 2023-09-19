import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer }) {
  let arr = range(5);

  return (
    <p className='guess'>
      {
        arr.map((i) => {
          let classStatus = checkGuess(guess, answer);

          return (
            <span 
              className={
                  !!guess ? 
                    `cell ${classStatus[i].status}`
                    : 'cell'
                }
              key={Math.random()}
            >
              {!!guess && guess[i]}
            </span>
          )
        })
      }
    </p>
  )
}

export default Guess;
