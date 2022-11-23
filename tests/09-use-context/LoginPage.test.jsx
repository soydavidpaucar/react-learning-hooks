import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import { UserContext } from '../../src/09-use-context/context/UserContext';
import { LoginPage } from '../../src/09-use-context/LoginPage';
describe('test on LoginPage', () => {
  const user = {
    id: 1,
    name: 'David',
    email: 'react@react.com'
  };
  it('should render login page', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const pre = document.querySelector('pre').innerHTML;

    expect(screen.getByText('LoginPage')).toBeTruthy();
    expect(pre).toBe(JSON.stringify(null, null, 2));
  });

  it('should render login page with user data', () => {
    render(
      <UserContext.Provider value={{ user }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const pre = document.querySelector('pre').innerHTML;

    expect(screen.getByText('LoginPage')).toBeTruthy();
    expect(pre).toBe(JSON.stringify(user, null, 2));
  });

  it('should set user data', () => {
    const setUser = vi.fn();

    render(
      <UserContext.Provider value={{ user, setUser }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(setUser).toHaveBeenCalledWith(user);

    const pre = document.querySelector('pre').innerHTML;

    expect(pre).toBe(JSON.stringify(user, null, 2));
    expect(setUser).toHaveBeenCalledTimes(1);
    expect(setUser).toHaveBeenCalled();
  });
});
