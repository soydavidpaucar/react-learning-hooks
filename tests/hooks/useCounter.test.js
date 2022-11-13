import { describe, expect, it } from 'vitest';
import { renderHook } from '@testing-library/react';
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
  })
});