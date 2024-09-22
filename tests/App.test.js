import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App.js';

describe('App Component', () => {
  test('deve renderizar todos os componentes', () => {
    render(<App />);
    
    // Verifica se o título é renderizado
    expect(screen.getByText(/Smart Study Extension/i)).toBeInTheDocument();
    
    // Verifica se os componentes são renderizados
    expect(screen.getByText(/Pomodoro/i)).toBeInTheDocument();
    expect(screen.getByText(/Schedule/i)).toBeInTheDocument();
    expect(screen.getByText(/Notes/i)).toBeInTheDocument();
    expect(screen.getByText(/Flashcards/i)).toBeInTheDocument();
    
    // Verifica se o Banner é renderizado
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
});
