import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, handleDeleteTodo, handleToggleTodo }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={handleDeleteTodo} toggleTodo={handleToggleTodo} />
      ))}
    </ul>
  );
};
