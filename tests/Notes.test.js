import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import Notes from '../components/Notes.js'; 

describe('NoteTaking Component', () => {
  test('renders the Notes header', () => {
    render(<Notes />);
    const headerElement = screen.getByText(/notes/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('adds a new note to the list', () => {
    render(<Notes />);

    // Referenciar o textarea e o botão de adicionar
    const noteInput = screen.getByPlaceholderText('Type your notes here...');
    const addButton = screen.getByText('Add Note');

    // Adicionar uma nova nota
    fireEvent.change(noteInput, { target: { value: 'First Note' } });
    fireEvent.click(addButton);

    // Verificar se a nota foi adicionada na lista
    const addedNote = screen.getByText('First Note');
    expect(addedNote).toBeInTheDocument();
  });

  test('does not add an empty note', () => {
    render(<Notes />);

    const addButton = screen.getByText('Add Note');
    
    // Clicar em "Add Note" sem adicionar nada
    fireEvent.click(addButton);

    // Verificar que nenhuma nota foi adicionada
    const listItems = screen.queryAllByRole('listitem');
    expect(listItems).toHaveLength(0); // A lista deve estar vazia
  });
});
