import { useState } from 'react';
import { UserContext } from './UserContext';

const user = {
  id: 1,
  name: 'David',
  email: 'reactcontext@react.com'
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  /* Creating a context provider that will be used by the children components. */
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
