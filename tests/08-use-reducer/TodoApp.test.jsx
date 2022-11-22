import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { TodoApp } from '../../src/08-use-reducer/TodoApp';
import { useTodo } from '../../src/hooks/useTodo.js';

vi.mock('../../src/hooks/useTodo.js');

describe('test on TodoApp', () => {
  it('should match snapshot', () => {
    vi.mocked(useTodo).mockReturnValue({
      todos: [
        {
          id: new Date().getTime(),
          description: 'Learn React',
          done: false
        },
        {
          id: new Date().getTime() + 1,
          description: 'Learn Vue',
          done: true
        }
      ],
      totalTodos: 2,
      pendingTodos: 1,
      handleNewTodo: vi.fn(),
      handleDeleteTodo: vi.fn(),
      handleToggleTodo: vi.fn()
    });

    const { container } = render(<TodoApp />);

    expect(container).toMatchSnapshot();

    expect(useTodo).toHaveBeenCalledTimes(1);
    expect(screen.getByText('Learn React')).toBeTruthy();
    expect(screen.getByText('Learn Vue')).toBeTruthy();
  });
});
