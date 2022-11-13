import { useState } from 'react';

export const useCounter = (initialValue = 10) => {
  const [count, setCount] = useState(initialValue);

  const increment = (number = 1) => setCount((current) => current + number);
  const reset = () => setCount(initialValue);
  const decrement = () =>
    setCount((current) => {
      if (current > 0) {
        return current - 1;
      }
      return current;
    });
  return { count, increment, reset, decrement };
};
