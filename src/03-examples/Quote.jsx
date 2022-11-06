import { useLayoutEffect, useState } from 'react';
import { useRef } from 'react';

export const Quote = ({ quote, author }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  /* Setting the boxSize state to the width and height of the pRef.current.clientWidth and
pRef.current.clientHeight. */
  useLayoutEffect(() => {
    const { clientWidth, clientHeight } = pRef.current;
    setBoxSize({ width: clientWidth, height: clientHeight });
  }, [quote]);

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: 'flex' }}>
        <p className="mb-3" ref={pRef}>
          {quote}
        </p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>

      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};
