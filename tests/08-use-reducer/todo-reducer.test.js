import { it, expect } from 'vitest';

import { todoReducer } from '../../src/08-use-reducer/todo-reducer';

describe('test on todo-reducer', () => {
  const initialState = [
    {
      id: new Date().getTime(),
      description: 'Learn React',
      done: false
    }
  ];

  it('should return the initial state', () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  it('should add a new todo', () => {
    const action = {
      type: 'add',
      payload: {
        id: new Date().getTime(),
        description: 'Learn Vue',
        done: false
      }
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
    expect(newState).toEqual([...initialState, action.payload]);
  });

  it('should delete a todo', () => {
    const action = {
      type: 'delete',
      payload: initialState[0].id
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(0);
    expect(newState).not.toContain(initialState[0]);
  });

  it('should toggle a todo', () => {
    const action = {
      type: 'toggle',
      payload: initialState[0].id
    };

    const newState = todoReducer(initialState, action);

    expect(newState[0].done).toBe(true);
    expect(newState[0]).toStrictEqual({
      ...initialState[0],
      done: true
    });
    expect(newState.length).toBe(1);
  });

  it('should return the todo if the todo id does not exist', () => {
    const action = {
      type: 'toggle',
      payload: new Date().getTime() + 1
    };

    const newState = todoReducer(initialState, action);

    expect(newState).toStrictEqual(initialState);
  });

  it('should return the initial state if the action type is not valid', () => {
    const action = {
      type: 'invalid'
    };

    const newState = todoReducer(initialState, action);

    expect(newState).toBe(initialState);
  });
});
