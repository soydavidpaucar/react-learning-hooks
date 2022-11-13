import { describe, it } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/index.js';

describe('test in useForm hook', () => {
  it('should return the default values', () => {
    const initialForm = {
      name: 'test',
      email: 'test@test.com',
    };
    const {result} = renderHook(() => useForm(initialForm));
    
    const {formState, handleChanges, handleResetForm} = result.current;
    
    expect(formState).toStrictEqual(initialForm);
    expect(handleChanges).toBeInstanceOf(Function);
    expect(handleResetForm).toBeInstanceOf(Function);
  });
  
  it('should change the value of the form (change name)', () => {
    const initialForm = {
      name: 'test',
      email: 'test@test.com',
    };
    
    const {result} = renderHook(() => useForm(initialForm));
    const {handleChanges} = result.current;
    
    act(() => {
      handleChanges({
        target: {
          name: 'name',
          value: 'test2',
        }
      });
      
      handleChanges({
        target: {
          name: 'email',
          value: 'testnewemail@test.com'
        }
      });
    });
    
    expect(result.current.formState).toStrictEqual({
      ...initialForm,
      name: 'test2',
      email: 'testnewemail@test.com'
    });
  });
  
  it('should reset the form with the initialForm', () => {
    const initialForm = {
      name: 'test',
      email: 'test@test.com'
    };
    
    const {result} = renderHook(() => useForm(initialForm));
    
    const {handleChanges, handleResetForm} = result.current;
    
    act(() => {
      handleChanges({
        target: {
          name: 'name',
          value: 'test2',
        }
      });
      
      handleChanges({
        target: {
          name: 'email',
          value: 'testnewemail@test.com'
        }
      });
  
      handleResetForm();
    });
    
    expect(result.current.formState).toStrictEqual(initialForm);
  });
});