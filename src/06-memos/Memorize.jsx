import { useState } from 'react';
import { useCounter } from '../hooks';
import { Small } from './Small';

export const Memorize = () => {
  const { count, increment } = useCounter(1);
  const [show, setShow] = useState(true);

  return (
    <>
      <h1>
        Counter: <Small count={count} />
        <hr />
      </h1>

      <button className="btn btn-primary" onClick={() => increment(1)}>
        +1
      </button>

      <button className="btn btn-outline-primary" onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
