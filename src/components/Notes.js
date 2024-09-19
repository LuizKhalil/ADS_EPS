import React, { useState } from 'react';
import '../css/Notes.css';

const NoteTaking = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const addNote = () => {
    if (newNote.trim() !== '') {
      setNotes([...notes, newNote]);
      setNewNote('');
    }
  };

  return (
    <div className="notes">
      <h2 className="notes-header">Notes</h2>
      <textarea
        className="note-input"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="Type your notes here..."
      />
      <button onClick={addNote}>Add Note</button>
      <ul className="note-list">
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
};

export default NoteTaking;
