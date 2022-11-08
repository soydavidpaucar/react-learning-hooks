import { useReducer } from 'react';

import { todoReducer } from './todo-reducer';

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Learn React',
    done: false
  },
  {
    id: new Date().getTime() + 1,
    description: 'Learn Node',
    done: false
  }
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  console.log('todos :>> ', todos);
  console.log('dispatch :>> ', dispatch);

  return (
    <>
      <h1>TodoApp</h1>
      <hr />

      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </>
  );
};
