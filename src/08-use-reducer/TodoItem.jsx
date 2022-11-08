export const TodoItem = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between" onClick={() => toggleTodo(todo.id)}>
      <span className={`align-self-center${todo.done ? ' text-decoration-line-through' : ''}`}>{todo.description}</span>
      <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
};
