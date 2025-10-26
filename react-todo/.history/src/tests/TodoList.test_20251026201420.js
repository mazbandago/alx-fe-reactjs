import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

// Mock AddTodoForm to simplify testing
jest.mock('../components/AddTodoForm', () => ({ addTodo }) => {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      addTodo('New Todo');
    }}>
      <button type="submit">Add</button>
    </form>
  );
});

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Set off to the mosque')).toBeInTheDocument();
    expect(screen.getByText('Prepare the kids to school')).toBeInTheDocument();
    expect(screen.getByText('To my daily routine exercise')).toBeInTheDocument();
    expect(screen.getByText('Take my bath and keep learning')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    fireEvent.click(screen.getByText('Add'));
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles a todo', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Set off to the mosque');
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Set off to the mosque');
    const deleteButton = todoItem.nextSibling;
    fireEvent.click(deleteButton);
    expect(todoItem).not.toBeInTheDocument();
  });
});
