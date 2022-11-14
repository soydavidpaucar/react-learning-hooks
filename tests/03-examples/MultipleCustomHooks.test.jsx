import { describe, expect, it, test, vi } from 'vitest';
import { MultipleCustomHooks } from '../../src/03-examples';
import { fireEvent, render, screen } from '@testing-library/react';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

vi.mock('../../src/hooks/useFetch');
vi.mock('../../src/hooks/useCounter');

describe('test MultipleCustomHooks component', () => {
  const mockIncrement = vi.fn();
  useCounter.mockReturnValue({
    count: 1,
    increment: mockIncrement
  });
  
  /* Clearing all the mocks before each test. */
  beforeEach(() => {
    vi.clearAllMocks();
  });
  
  it('should render the component', async () => {
    useFetch.mockReturnValue({data: null, isLoading: true, error: null});
    
    render(<MultipleCustomHooks />);
    
    expect(screen.getByText('Loading...'));
    expect(screen.getByText('BreakingBad Quotes'));
  });
  
  test('if the button is disabled when component is rendered', () => {
    useFetch.mockReturnValue({data: null, isLoading: true, error: null});
    
    render(<MultipleCustomHooks />);
    
    const button = screen.getByRole('button', {name: 'Next quote'});
    expect(button.disabled).toBe(true);
  });
  
  it('should render the quote', () => {
    useFetch.mockReturnValue({
      data: [{
        author: 'Walter White',
        quote: 'I am the one who knocks!'
      }], isLoading: false, error: null
    });
    
    render(<MultipleCustomHooks />);
    
    expect(screen.getByText('I am the one who knocks!')).toBeTruthy();
    expect(screen.getByText('Walter White')).toBeTruthy();
    
    const button = screen.getByRole('button', {name: 'Next quote'});
    expect(button.disabled).toBe(false);
  });
  
  it('should call the increment function', () => {
    useFetch.mockReturnValue({
      data: [{
        author: 'Walter White',
        quote: 'I am the one who knocks!'
      }], isLoading: false, error: null
    });
    
    render(<MultipleCustomHooks />);
    const button = screen.getByRole('button', {name: 'Next quote'});
    fireEvent.click(button);
    
    expect(mockIncrement).toHaveBeenCalled();
    expect(mockIncrement).toHaveBeenCalledTimes(1);
  });
});