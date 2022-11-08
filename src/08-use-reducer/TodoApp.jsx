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

  return (
    <>
      <h1>
        TodoApp (10), <small>Pending: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between">
              <span className="align-self-center">Item 1</span>
              <button className="btn btn-danger">Delete</button>
            </li>
          </ul>
        </div>
        <div className="col-5">
          <h4>Add Todo</h4>
          <hr />
          <form>
            <input type="text" placeholder="Add todo..." className="form-control" />

            <button type="submit" className="btn btn-outline-primary mt-2 btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
