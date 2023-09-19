import React from 'react';

import RestartButton from '../RestartButton/RestartButton';

function LoseBanner({ answer, handleRestart }) {
  return (
    <div className='sad banner'>
      <p>
        Sorry, the correct answer is 
        <strong>{` ${answer}`}</strong>
      </p>
      <RestartButton 
        onClick={handleRestart}
      />
    </div>
  )
}

export default LoseBanner;
