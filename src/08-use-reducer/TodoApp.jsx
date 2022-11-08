import { useReducer } from 'react';

import { todoReducer } from './todo-reducer';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';

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

  const handleNewTodo = (newTodo) => {
    console.log(newTodo);
  };

  return (
    <>
      <h1>
        TodoApp (10), <small>Pending: 2</small>
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
