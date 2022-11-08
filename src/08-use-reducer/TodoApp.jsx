import { useEffect, useReducer } from 'react';

import { todoReducer } from './todo-reducer';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';

const initialState = [
  /* {
    id: new Date().getTime(),
    description: 'Learn React',
    done: false
  } */
];

/**
 * If there are todos in localStorage, parse them and return them, otherwise return an empty array
 * @returns An array of todos.
 */
const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  /* Saving the todos in localStorage. */
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

  return (
    <>
      <h1>
        TodoApp {todos.length}, <small>Pending: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} />
        </div>
        <div className="col-5">
          <h4>Add Todo</h4>
          <hr />
          <TodoAdd handleNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
