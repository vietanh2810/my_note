
import { useState } from 'react';
import NotesList from '../NotesList/NotesList';
import SearchBar from '../SearchBar/SearchBar';
import Header from '../Header/Header';
import { nanoid } from 'nanoid';
window.nbNote = 2;

function App() {
  const [notes, setNotes] = useState([
    {
      id: 0,
      text: "today note: eat",
      date: "13/04/2022"
    }, 
    {
      id: 1,
      text: "today note: coookkk",
      date: "14/04/2022"
    }
  ]);
  const [term,setTerm] = useState('');
  const [darkMode,setDarkMode] = useState(false);

  const deletenote = (id) => {
    const newNotes = notes.filter(note => {
      return note.id !== id;
    });
    setNotes(newNotes);
  }

  const pushNote = (text) => {
    const date = new Date();
    window.nbNote++;
    console.log(window.nbNote);
    const newNote = {
      id: window.nbNote,
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes,newNote];
    setNotes(newNotes);
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="note-container">
        <Header handleSwitchMode={setDarkMode}/>
        <SearchBar handleSearchNote={setTerm}/>
        <NotesList handleAddNote={pushNote} 
                    notes={notes.filter(note => 
                      note.text.toLowerCase().includes(term.toLowerCase())
                    )}
                    handleDeleteNote={deletenote}/>
      </div>
    </div>
  );
}

export default App;
