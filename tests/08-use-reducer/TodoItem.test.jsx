import { render, screen, fireEvent } from '@testing-library/react';
import { beforeEach, describe, it, vi, expect } from 'vitest';
import { TodoItem } from '../../src/08-use-reducer/TodoItem';

describe('test on TodoItem', () => {
  const todo = {
    id: new Date().getTime(),
    description: 'Learn React',
    done: false
  };

  const deleteTodo = vi.fn();
  const toggleTodo = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should match snapshot', () => {
    const { container } = render(<TodoItem todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />);
    expect(container).toMatchSnapshot();
  });

  it('should display the incomplete todo item', () => {
    render(<TodoItem todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />);

    const liElement = screen.getByRole('listitem');
    const spanElement = document.querySelector('span').className;

    expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
    expect(spanElement).toBe('align-self-center');
    expect(spanElement).not.toContain('text-decoration-line-through');
  });

  it('should display the complete todo item', () => {
    render(<TodoItem todo={{ ...todo, done: true }} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />);

    const spanElement = document.querySelector('span').className;

    expect(spanElement).toBe('align-self-center text-decoration-line-through');
  });

  it('should call the toggleTodo function', () => {
    render(<TodoItem todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />);

    const liElement = screen.getByRole('listitem');

    fireEvent.click(liElement);

    expect(toggleTodo).toHaveBeenCalledTimes(1);
    expect(toggleTodo).toHaveBeenCalledWith(todo.id);
  });

  it('should call the deleteTodo function', () => {
    render(<TodoItem todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />);

    const buttonElement = screen.getByRole('button');

    fireEvent.click(buttonElement);

    expect(deleteTodo).toHaveBeenCalledTimes(1);
    expect(deleteTodo).toHaveBeenCalledWith(todo.id);
  });
});
