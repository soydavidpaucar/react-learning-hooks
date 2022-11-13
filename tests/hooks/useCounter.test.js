import { describe, expect, it } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/index.js';

describe('test in useCounter hook', () => {
  it('should return the default values', () => {
    /* render the hook without create a component */
    const {result} = renderHook(() => useCounter());
    
    const {count, increment, decrement, reset} = result.current;
    
    expect(count).toBe(10);
    expect(increment).toBeInstanceOf(Function);
    expect(decrement).toBeInstanceOf(Function);
    expect(reset).toBeInstanceOf(Function);
  });
  
  it('should return the 100 as initial value', () => {
    const {result} = renderHook(() => useCounter(100));
    
    const {count} = result.current;
    
    expect(count).toBe(100);
  });
  
  it('should increment the counter', () => {
    const {result} = renderHook(() => useCounter(100));
    
    const {increment} = result.current;
    
    act(() => increment());
    
    expect(result.current.count).toBe(101);
  });
  
  it('should decrement the counter', () => {
    const {result} = renderHook(() => useCounter(1));
    
    const {decrement} = result.current;
    
    act(() => {
      decrement(1);
      decrement(2);
    });
    
    expect(result.current.count).toBe(0);
  });
  
  it('should reset the counter', () => {
    const {result} = renderHook(() => useCounter(100));
    
    const {increment, reset} = result.current;
    
    act(() => {
      increment(2);
      reset();
    });
    
    expect(result.current.count).toBe(100);
  });
});