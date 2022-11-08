const initialState = [
  {
    id: 1,
    todo: 'Collect eggs',
    done: false
  }
];

/**
 * It returns the current state if the action type is not 'add todo', otherwise it returns a new array
 * with the current state and the new todo item
 * @param [state] - The current state of the reducer.
 * @param [action] - This is the action object that was dispatched.
 * @returns The state is being returned.
 */
const todoReducer = (state = initialState, action = {}) => {
  if (action.type == 'add todo') {
    return [...state, action.payload];
  }

  return state;
};

/* Initializing the todos variable with the initial state of the reducer. */
let todos = todoReducer();

/* Creating a new todo object. */
const newTodo = {
  id: 2,
  todo: 'Buy bread',
  done: false
};

/* Creating an action object. */
const addTodoAction = {
  type: 'add todo',
  payload: newTodo
};

/* Dispatching the action object to the reducer. */
todos = todoReducer(todos, addTodoAction);

console.log(todos);
