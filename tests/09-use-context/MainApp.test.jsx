import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it } from 'vitest';

import { MainApp } from '../../src/09-use-context/MainApp';

describe('test on MainApp component', () => {
  it('should display the HomePage when route is /', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText('HomePage')).toBeTruthy();
  });

  it('should display the LoginPage when route is /login', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText('LoginPage')).toBeTruthy();
  });

  it('should display the HomePage when route is not found', () => {
    render(
      <MemoryRouter initialEntries={['/not-found']}>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText('HomePage')).toBeTruthy();
  });
});
