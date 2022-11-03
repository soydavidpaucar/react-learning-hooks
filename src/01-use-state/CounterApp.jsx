import { useState } from 'react';

export const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Counter: {counter}</h1>
      <hr />
      <button className='btn btn-primary' onClick={() => setCounter(counter + 1)}>
        +1
      </button>
      <button className='btn btn-warning'>-1</button>
    </>
  );
};
