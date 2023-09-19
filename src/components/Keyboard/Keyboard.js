import React from 'react';

const keys = [
  'QWERTYUIOP',
  'ASDFGHJKL',
  'ZXCVBNM'
];

function Keyboard({ letterList }) {

  return (
    <div className='keyboard'>
      {
        keys.map((row, i) => {
          return (
            <p 
              className={`row row-${i}`}
              key={`row-${i}`}
            >
              {
                row.split('').map((letter) => {
                  return (
                    <span
                      className={`letter ${letterList[letter]}`}
                      key={letter}
                    >
                      {letter}
                    </span>
                  )
                })
              }
            </p>
          )
        })
      }
    </div>
  )
}

export default Keyboard;
