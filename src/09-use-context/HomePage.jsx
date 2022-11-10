import { useContext } from 'react';

import { UserContext } from './context/UserContext';

export const HomePage = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>HomePage</h1>
      <hr />

      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};
