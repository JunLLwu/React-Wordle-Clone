import React from 'react';

import RestartButton from '../RestartButton/RestartButton';

function WinBanner({ numGuesses, handleRestart }) {
  return (
    <div className='happy banner'>
      <p>
        <strong>Congratulations!</strong>
         {' '}Got it in
        <strong>{` ${numGuesses}`} guesses</strong>.
      </p>
      <RestartButton handleRestart={handleRestart}/>
    </div>
  )
}

export default WinBanner;
