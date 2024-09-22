import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Flashcards from '../components/Flashcards,js';

describe('Flashcards Component', () => {
  test('renders the Flashcards header', () => {
    render(<Flashcards />);
    const headerElement = screen.getByText(/Flashcards/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('adds a new card to the flashcards list', () => {
    render(<Flashcards />);

    // Referenciar os inputs e o botão de adicionar
    const questionInput = screen.getByPlaceholderText('Question');
    const answerInput = screen.getByPlaceholderText('Answer');
    const addButton = screen.getByText('Add Card');

    // Adicionar um novo flashcard
    fireEvent.change(questionInput, { target: { value: 'What is React?' } });
    fireEvent.change(answerInput, { target: { value: 'A JavaScript library for building UIs' } });
    fireEvent.click(addButton);

    // Verificar se o flashcard foi adicionado
    const cardQuestion = screen.getByText('What is React?');
    expect(cardQuestion).toBeInTheDocument();
  });

  test('shows and hides the answer when toggling the answer button', () => {
    render(<Flashcards />);

    // Referenciar os inputs e o botão de adicionar
    const questionInput = screen.getByPlaceholderText('Question');
    const answerInput = screen.getByPlaceholderText('Answer');
    const addButton = screen.getByText('Add Card');

    // Adicionar um novo flashcard
    fireEvent.change(questionInput, { target: { value: 'What is React?' } });
    fireEvent.change(answerInput, { target: { value: 'A JavaScript library for building UIs' } });
    fireEvent.click(addButton);

    // Verificar se a pergunta foi adicionada
    const cardQuestion = screen.getByText('What is React?');
    expect(cardQuestion).toBeInTheDocument();

    // Verificar se a resposta não está visível inicialmente
    const toggleAnswerButton = screen.getByText('Show Answer');
    fireEvent.click(toggleAnswerButton);
    const cardAnswer = screen.getByText('A JavaScript library for building UIs');
    expect(cardAnswer).toBeInTheDocument();

    // Ocultar a resposta novamente
    fireEvent.click(toggleAnswerButton);
    expect(cardAnswer).not.toBeVisible();
  });

  test('moves to the next card when clicking the next button', () => {
    render(<Flashcards />);

    // Referenciar os inputs e o botão de adicionar
    const questionInput = screen.getByPlaceholderText('Question');
    const answerInput = screen.getByPlaceholderText('Answer');
    const addButton = screen.getByText('Add Card');

    // Adicionar dois flashcards
    fireEvent.change(questionInput, { target: { value: 'Question 1' } });
    fireEvent.change(answerInput, { target: { value: 'Answer 1' } });
    fireEvent.click(addButton);

    fireEvent.change(questionInput, { target: { value: 'Question 2' } });
    fireEvent.change(answerInput, { target: { value: 'Answer 2' } });
    fireEvent.click(addButton);

    // Verificar se o primeiro flashcard é exibido
    const firstCardQuestion = screen.getByText('Question 1');
    expect(firstCardQuestion).toBeInTheDocument();

    // Mover para o próximo flashcard
    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);

    // Verificar se o segundo flashcard é exibido
    const secondCardQuestion = screen.getByText('Question 2');
    expect(secondCardQuestion).toBeInTheDocument();
  });

  test('does not add card with empty question or answer', () => {
    render(<Flashcards />);

    const addButton = screen.getByText('Add Card');
    
    // Tentar adicionar um flashcard com campos vazios
    fireEvent.click(addButton);

    // Verificar se nenhum flashcard foi adicionado
    const listItems = screen.queryAllByRole('listitem');
    expect(listItems).toHaveLength(0);
  });
});
