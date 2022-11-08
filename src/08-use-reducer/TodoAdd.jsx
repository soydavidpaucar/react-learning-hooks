import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ handleNewTodo }) => {
  const { description, handleChanges, handleResetForm } = useForm({
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length < 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false
    };

    handleNewTodo(newTodo);
    handleResetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add todo..."
        className="form-control"
        name="description"
        onChange={handleChanges}
        value={description}
      />

      <button type="submit" className="btn btn-outline-primary mt-2 btn-block">
        Submit
      </button>
    </form>
  );
};
