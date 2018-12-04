import React from 'react';

import Router from './Router';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
    }
  }

  addNote = body => {
    this.setState({
      notes: [
        ...this.state.notes,
        {
          id: Date.now(),
          ...body,
        }
      ]
    });
  }

  deleteNote = id => {
    const newNotes = this.state.notes.filter(note => note.id !== id);

    this.setState({
      notes: newNotes,
    })
  }

  updateNote = updatedNote => {
    const notesWithoutUpdatedNote = this.state.notes.filter(note => note.id !== updatedNote.id);

    this.setState({
      notes: [
        ...notesWithoutUpdatedNote,
        updatedNote,
      ]
    });
  }

  render() {
    return (
      <Router
        addNote={this.addNote}
        deleteNote={this.deleteNote}
        notes={this.state.notes}
        updateNote={this.updateNote}
      />
    );
  }
}

export default App;
