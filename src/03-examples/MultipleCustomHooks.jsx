import { useFetch, useCounter } from '../hooks';

export const MultipleCustomHooks = () => {
  const { count, increment } = useCounter(1);
  const { data, isLoading, error } = useFetch(`https://www.breakingbadapi.com/api/quotes/${count}`);

  /* Destructuring the data object. */
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <>
          <blockquote className="blockquote text-end">
            <p className="mb-3">{quote}</p>
            <footer className="blockquote-footer">{author}</footer>
          </blockquote>
          <button className="btn btn-primary" onClick={() => increment()}>
            Next quote
          </button>
        </>
      )}
    </>
  );
};
