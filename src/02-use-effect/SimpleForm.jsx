import { useEffect, useState } from 'react';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'davidp',
    email: 'adalovelace@gmail.com'
  });

  const { username, email } = formState;

  const handleChanges = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  /* This is a hook that is called only once. */
  useEffect(() => {
    console.log('useEffect - only once');
  }, []);

  /* A hook that is called when the formState changes. */
  useEffect(() => {
    console.log('useEffect - formState changed');
  }, [formState]);

  /* A hook that is called when the email changes. */
  useEffect(() => {
    console.log('useEffect - email changed');
  }, [email]);

  return (
    <>
      <h1>Simple Form</h1>
      <hr />
      <input
        type='text'
        className='form-control mb-2'
        placeholder='Username'
        name='username'
        value={username}
        onChange={handleChanges}
      />
      <input
        type='email'
        className='form-control'
        placeholder='test@email.com'
        name='email'
        value={email}
        onChange={handleChanges}
      />
    </>
  );
};
