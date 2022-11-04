import { useState } from 'react';

export const useCounter = (initialValue = 10) => {
  const [count, setCount] = useState(initialValue);

  const increment = (number = 1) => setCount(count + number);
  const reset = () => setCount(initialValue);
  const decrement = () =>
    setCount(() => {
      if (count > 0) {
        return count - 1;
      }
      return count;
    });
  return { count, increment, reset, decrement };
};
