import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // para adicionar matchers como 'toBeInTheDocument'
import Schedule from './Schedule';

describe('ToDo Component', () => {
  test('renders the To-Do list header', () => {
    render(<Schedule />);
    const headerElement = screen.getByText(/to-do list/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('adds a new task to the list', () => {
    render(<Schedule />);

    // Input e botão
    const inputElement = screen.getByPlaceholderText('Add new task');
    const addButton = screen.getByText('Add Task');

    // Adicionar tarefa
    fireEvent.change(inputElement, { target: { value: 'Learn Testing' } });
    fireEvent.click(addButton);

    // Verificar se a tarefa foi adicionada à lista
    const taskElement = screen.getByText('Learn Testing');
    expect(taskElement).toBeInTheDocument();
  });

  test('toggles task completion', () => {
    render(<Schedule />);

    // Adicionar tarefa
    const inputElement = screen.getByPlaceholderText('Add new task');
    const addButton = screen.getByText('Add Task');
    fireEvent.change(inputElement, { target: { value: 'Learn Testing' } });
    fireEvent.click(addButton);

    // Clicar na tarefa para marcar como completa
    const taskElement = screen.getByText('Learn Testing');
    fireEvent.click(taskElement);

    // Verificar se a tarefa foi marcada como completa (classe 'completed' foi aplicada)
    expect(taskElement).toHaveClass('completed');
  });

  test('deletes a task from the list', () => {
    render(<Schedule />);

    // Adicionar tarefa
    const inputElement = screen.getByPlaceholderText('Add new task');
    const addButton = screen.getByText('Add Task');
    fireEvent.change(inputElement, { target: { value: 'Learn Testing' } });
    fireEvent.click(addButton);

    // Verificar se a tarefa foi adicionada
    const taskElement = screen.getByText('Learn Testing');
    expect(taskElement).toBeInTheDocument();

    // Clicar no botão de deletar
    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);

    // Verificar se a tarefa foi removida
    expect(taskElement).not.toBeInTheDocument();
  });
});
