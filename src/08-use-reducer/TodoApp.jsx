import { useTodo } from '../hooks';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';

export const TodoApp = () => {
  const { todos, totalTodos, pendingTodos, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodo();

  return (
    <>
      <h1>
        TodoApp {totalTodos}, <small>Pending: {pendingTodos}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo} />
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
