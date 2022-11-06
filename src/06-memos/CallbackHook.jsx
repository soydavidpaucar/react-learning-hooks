import { useCallback, useState } from 'react';

import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  const [count, setCount] = useState(10);

  const increment = useCallback(() => {
    setCount((value) => value + 1);
  }, []);

  /* const increment = () => {
    setCount(count + 1);
  }; */

  return (
    <>
      <h1>useCallback Hook: {count}</h1>
      <hr />

      <ShowIncrement increment={increment} />
    </>
  );
};
