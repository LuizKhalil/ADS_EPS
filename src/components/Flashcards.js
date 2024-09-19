// src/components/Flashcards.js
import React, { useState } from 'react';
import '../css/Flashcards.css';

const Flashcards = () => {
  const [cards, setCards] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const addCard = () => {
    if (newQuestion.trim() && newAnswer.trim()) {
      setCards([...cards, { question: newQuestion, answer: newAnswer }]);
      setNewQuestion('');
      setNewAnswer('');
    }
  };

  const nextCard = () => {
    setShowAnswer(false);
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const toggleAnswer = () => setShowAnswer(!showAnswer);

  return (
    <div className="flashcards">
      <h2>Flashcards</h2>
      <div>
        <input
          type="text"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          placeholder="Question"
        />
        <input
          type="text"
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
          placeholder="Answer"
        />
        <button onClick={addCard}>Add Card</button>
      </div>
      {cards.length > 0 && (
        <div className="card">
          <p>{cards[currentCardIndex].question}</p>
          {showAnswer && <p>{cards[currentCardIndex].answer}</p>}
          <button onClick={toggleAnswer}>
            {showAnswer ? 'Hide Answer' : 'Show Answer'}
          </button>
          <button onClick={nextCard}>Next</button>
        </div>
      )}
    </div>
  );
};

export default Flashcards;
