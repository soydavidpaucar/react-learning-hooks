export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case 'add todo':
      throw new Error('Not implemented yet');

    default:
      return initialState;
  }
};
