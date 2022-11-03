import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {
  const { count, increment, reset, decrement } = useCounter();

  return (
    <>
      <h1>Counter With Custom Hook: {count}</h1>
      <hr />

      <button className='btn btn-primary' onClick={() => increment(5)}>
        +1
      </button>
      <button className='btn btn-secondary' onClick={reset}>
        Reset
      </button>
      <button className='btn btn-warning' onClick={decrement}>
        -1
      </button>
    </>
  );
};
