import { useEffect, useReducer } from 'react';

import { todoReducer } from '../08-use-reducer/todo-reducer';

/**
 * If there's a todos array in localStorage, return it, otherwise return an empty array
 * @returns An array of todos.
 */
const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const totalTodos = todos.length;
  const pendingTodos = todos.filter((todo) => !todo.done).length;

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (newTodo) => {
    const action = {
      type: 'add',
      payload: newTodo
    };

    dispatch(action);
  };

  const handleDeleteTodo = (todoId) => {
    const action = {
      type: 'delete',
      payload: todoId
    };

    dispatch(action);
  };

  const handleToggleTodo = (todoId) => {
    const action = {
      type: 'toggle',
      payload: todoId
    };

    dispatch(action);
  };

  return {
    todos,
    totalTodos,
    pendingTodos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  };
};
