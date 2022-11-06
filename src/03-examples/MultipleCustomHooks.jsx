import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from './';

export const MultipleCustomHooks = () => {
  const { count, increment } = useCounter(1);
  const { data, isLoading, error } = useFetch(`https://www.breakingbadapi.com/api/quotes/${count}`);

  /* Destructuring the data object. */
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote quote={quote} author={author} />}

      <button className="btn btn-primary" onClick={() => increment()} disabled={isLoading}>
        Next quote
      </button>
    </>
  );
};
