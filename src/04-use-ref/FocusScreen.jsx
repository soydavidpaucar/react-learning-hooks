import { useRef } from 'react';

export const FocusScreen = () => {
  /* Creating a reference to the input element. */
  const inputRef = useRef();

  /**
   * The handleClick function is called when the button is clicked.
   *
   * The function uses the current property of the inputRef object to call the select() method on the
   * input element.
   *
   * The select() method selects the contents of the input element
   */
  const handleClick = () => {
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input type="text" placeholder="Name..." className="form-control" ref={inputRef} />

      <button className="btn btn-primary mt-2" onClick={handleClick}>
        Set Focus
      </button>
    </>
  );
};
