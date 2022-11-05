import { useEffect, useState } from 'react';

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      setCoords({ x, y });
    };

    /* Adding an event listener to the window object. */
    window.addEventListener('mousemove', onMouseMove);

    /* A cleanup function that is called when the component is unmounted. */
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>User already exists</h3>
      {JSON.stringify(coords)}
    </>
  );
};
