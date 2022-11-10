import { useContext } from 'react';

import { UserContext } from './context/UserContext';

export const LoginPage = () => {
  /* Destructuring the `user` property from the `UserContext` object. */
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h1>LoginPage</h1>
      <hr />

      <pre>{JSON.stringify(user, null, 2)}</pre>

      <button className="btn btn-primary" onClick={() => setUser({ id: 1, name: 'David', email: 'react@react.com' })}>
        Set user
      </button>
    </div>
  );
};
