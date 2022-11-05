import { useEffect, useState } from 'react';

import { useForm } from '../hooks/useForm';
import { Message } from './Message';

export const FormWithCustomHook = () => {
  const { formState, handleChanges, handleResetForm, username, email, password } = useForm({
    username: '',
    email: '',
    password: ''
  });

  /* Destructuring the formState object. */
  // const { username, email, password } = formState;

  return (
    <>
      <h1>Simple Form With Custom Hook</h1>
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
        className='form-control mb-2'
        placeholder='test@email.com'
        name='email'
        value={email}
        onChange={handleChanges}
      />

      <input
        type='password'
        className='form-control mb-2'
        placeholder='******'
        name='password'
        value={password}
        onChange={handleChanges}
      />

      <button className='btn btn-primary' onClick={handleResetForm}>
        Reset
      </button>
    </>
  );
};
