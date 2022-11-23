import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { UserContext } from '../../src/09-use-context/context/UserContext';
import { HomePage } from '../../src/09-use-context/HomePage';

describe('test on HomePage component', () => {
  const user = {
    id: 1,
    name: 'David',
    email: 'reactcontext@react.com'
  };

  it('should render the component with the user data', () => {
    render(
      <UserContext.Provider
        value={{
          user: null
        }}>
        <HomePage />
      </UserContext.Provider>
    );

    const pre = screen.getByText(/null/);

    expect(screen.getByText('HomePage')).toBeTruthy();
    expect(pre).toBeTruthy();
  });

  it('should render the component with the user data', () => {
    render(
      <UserContext.Provider
        value={{
          user
        }}>
        <HomePage />
      </UserContext.Provider>
    );

    const pre = document.querySelector('pre').innerHTML;

    expect(screen.getByText('HomePage')).toBeTruthy();
    expect(pre).toBe(JSON.stringify(user, null, 2));
  });
});
