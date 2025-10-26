import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

// Test to check if the counter renders correctly
test('renders TodoList component', () => {
    render(<TodoList/>);
    // Verify component initial render
    expect(screen.getByText(/todos: 0/i)).toBeInTheDocument();
    expect(screen.getByText('Id')).toBeInTheDocument();
    expect(screen.getByText('text')).toBeInTheDocument();
    expect(screen.getByText('completed')).toBeInTheDocument();
});

// Test to check if the increment button works
test('increments counter', () => {
    render(<Counter />);
    // Simulate click event
    fireEvent.click(screen.getByText('Increment'));
    // Verify if the count is incremented
    expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
});

// Test to check if the decrement button works
test('decrements counter', () => {
    render(<Counter />);
    fireEvent.click(screen.getByText('Increment')); // Increment to avoid negative counting scenario
    fireEvent.click(screen.getByText('Decrement'));
    // Verify if the count is decremented
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
});