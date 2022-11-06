import { useMemo, useState } from 'react';

import { useCounter } from '../hooks';

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log('Here');
  }

  return `${iterationNumber} realized iterations`;
};

export const MemoHook = () => {
  const { count, increment } = useCounter(4000);
  const [show, setShow] = useState(true);

  /* A hook that allows us to memorize a value, so it is not recalculated every time the component is
  rendered. */
  const memorizedValue = useMemo(() => heavyStuff(count), [count]);

  return (
    <>
      <h1>
        Counter: <small>{count}</small>
      </h1>
      <hr />

      <h4>{memorizedValue}</h4>

      <button className="btn btn-primary" onClick={() => increment(1)}>
        +1
      </button>

      <button className="btn btn-outline-primary" onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
