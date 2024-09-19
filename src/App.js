import React, { useState } from 'react';
import './css/App.css';
import Pomodoro from './components/Pomodoro'
import Schedule from './components/Schedule'
import Notes from './components/Notes'
import Flashcards from './components/Flashcards'

const App = () => {
  return (
    <div className="App">
      <h1>Smart Study Extension</h1>
      <Pomodoro />
      <Schedule />
      <Notes />
      <Flashcards />
    </div>
  );
};

export default App;
