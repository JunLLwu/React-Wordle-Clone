import React from 'react';

function RestartButton({ handleRestart }) {
  return (
    <button 
      className='restart'
      onClick={handleRestart}
    >
      Restart
    </button>
  )
}

export default RestartButton;
