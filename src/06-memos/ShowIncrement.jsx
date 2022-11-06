import React from 'react';

export const ShowIncrement = React.memo(({ increment }) => {
  console.log('ShowIncrement component was rendered');

  return (
    <button className="btn btn-primary" onClick={() => increment(6)}>
      Increment
    </button>
  );
});
